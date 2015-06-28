module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'name-changer': {
      options: {
        reference: 'img/',
        directory: ['**/*.png', '**/*.jpg', '**/*.gif'],
        lettercase: 'lowercase',
        spaces:'-'
      },
    },
    jshint: {
      all: ['task/**/*.js'],
      options: {
        reporter: require('jshint-stylish'),
        curly: true,
        eqeqeq: true,
        eqnull: false,
        browser: true,
        indent: 2,
        quotmark: 'single',
        unused: false,
        ignores: ['node_modules/**/*.js'],
        globals: {
        },
      },
    },
    jsonlint: {
      sample: {
        src: [ 'package.json' ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-name-changer');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.registerTask('test',['jsonlint', 'jshint']);
  grunt.registerTask('default',['name-changer']);
};