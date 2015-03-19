# grunt-jsx2js

> Grunt task for compiling Facebook React's .jsx templates into .js

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jsx2js --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jsx2js');
```

## The "jsx2js" task

### Overview
In your project's Gruntfile, add a section named `jsx2js` to the data object passed into `grunt.initConfig()`.

This is wrapper of [react-tools](https://www.npmjs.com/package/react-tools)

```js
grunt.initConfig({
  jsx2js: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.sourceMap
Type: `Boolean`
Default value: `false`

Append inline source map at the end of the transformed source.

#### options.harmony
Type: `Boolean`
Default value: `false`

Enable ES6 features.

#### options.sourceFilename
Type: `String`
Default value: `'source.js'`

The output filename for the source map.

#### options.stripTypes
Type: `Boolean`
Default value: `false`

Strips out type annotations.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  jsx2js: {
    options: {
      harmony: true
    },
    files: {
      'dest/main.js': ['src/testing.jsx', 'src/123.jsx'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  jsx2js: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
