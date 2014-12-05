/*
 * grunt-unused
 * https://github.com/ryanburgess/grunt-name-changer
 *
 * Copyright (c) 2014 Ryan Burgess
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  grunt.registerTask('name-changer', function(){
    var fs = require('fs'),
      path = require('path'),
      options,
      reference,
      filetype,
      lettercase,
      spaces,
      prepend,
      append,
      filename,
      extension,
      remove,
      successful = 0,
      failed = 0;

    options = this.options({
      reference: 'img/',
      filetype: ['**/*.png', '**/*.jpg', '**/*.gif'],
      lettercase: 'lowercase',
      spaces: '-',
      remove: null,
      prepend: null,
      append: null
    });

    String.prototype.toCapitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    }

    String.prototype.toTitleCase = function () {
      return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
    
    grunt.file.expand({
      filter: 'isFile',
        cwd: options.reference
      }, options.filetype).forEach(function(file){
        try{
          successful++;

          filename = file.replace(/\-/g, options.spaces).replace(/\_/g, options.spaces).replace(/\ /g, options.spaces);

          if(options.remove !== null){
            filename = filename.replace(options.remove, '');
          }

          if(options.lettercase === 'uppercase'){
            filename = filename.toUpperCase();
          }else if(options.lettercase === 'lowercase'){
            filename = filename.toLowerCase();
          }else if(options.lettercase === 'capitalize'){
            filename = filename.toCapitalize();
          }else if(options.lettercase === 'titlecase'){
            filename = filename.toTitleCase();
          }

          //prepend
          if(options.prepend !== null){
            filename = filename.replace(path.extname(filename), '');
            filename = options.prepend + options.spaces + filename;
          }
          //append
          if(options.append !== null){
            extension = path.extname(filename);
            filename = filename.replace(extension, '');
            //filename = filename.replace('.', options.spaces + options.append + '.');
            filename = filename + extension;
          }

          // update file name
          fs.rename(options.reference+file, options.reference+filename, null);
        }catch (e) {
          failed++;
          grunt.log.error('File "' + file + '" failed to rename.');
          grunt.fail.warn(e);
        }
    });
    // output files updated
    grunt.log.ok(successful + ' file' + (successful === 1 ? '' : 's') + ' renamed.');
  });
};