Grunt Name Changer
==================

A Grunt task for batch renaming files.

## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```sh
npm install grunt-name-changer --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-name-changer');
```

*Tip: the [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) module makes it easier to load multiple grunt tasks.*

[grunt]: http://gruntjs.com
[Getting Started]: https://github.com/gruntjs/grunt/wiki/Getting-started


## Documentation

See the [Gruntfile](Gruntfile.js) in this repo for a full example.


### Example config

```js
grunt.initConfig({
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
grunt.registerTask('default', ['name-changer']);
```

### Options

#### reference
Type: `String`
Default value: `img/`

A reference to the directory of files that are being checked if they are referenced in other project files.

#### filetype
Type: `String|Array`
Default value: `['**/*.png', '**/*.jpg', '**/*.gif']`

An array of filetypes in the reference directory.

#### lettercase
Type: `String`
Default value: `lowercase`

An option for changing the letter case of the file names.

## Release History
* 0.1.0: Initial release.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


## License

MIT © [Ryan Burgess](http://ryanburgess.com)