/*
 * grunt-jsx2js
 * https://github.com/zhongzhi107/grunt-jsx2js
 *
 * Copyright (c) 2015 zhi.zhong
 * Licensed under the MIT license.
 */

'use strict';

var reactTools = require('react-tools');

module.exports = function(grunt) {

  var transform = require('react-tools').transform;

  grunt.registerMultiTask('jsx2js', 'Grunt task for compiling Facebook React\'s .jsx templates into .js', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options();

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(grunt.util.linefeed));

      try {
        src = transform(src, options);
      }
      catch(e) {
        grunt.log.error(e);
        grunt.fail.warn(f.src.join() + ' failed to compile.');
        return;
      }
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
