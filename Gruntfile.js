module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'name-changer': {
      options: {
        reference: 'img/',
        directory: ['**/*.png', '**/*.jpg', '**/*.gif'],
        lettercase: 'lower',
        spaces:'-'
      },
    }
  });
  grunt.loadNpmTasks('grunt-name-changer');
  grunt.registerTask('default',['name-changer']);
};