/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015-2022 Yegor Bugayenko
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const fs = require('fs')
const child_process = require('child_process')

module.exports = function (grunt) {
  'use strict';
  grunt.util.linefeed = '\n';
  grunt.loadNpmTasks('grunt-css-purge');
  grunt.initConfig(
    {
      pkg: grunt.file.readJSON('package.json'),
      sass: {
        dev: {
          options: {
            sourceMap: true,
            outputStyle: 'compressed'
          },
          files: {
            'tacit.min.css': 'scss/main.scss'
          }
        },
        dist: {
          options: {
            sourceMap: true,
            outputStyle: 'compressed'
          },
          files: {
            'dist/<%= pkg.name %>-<%= pkg.version %>.min.css': 'scss/main.scss'
          }
        },
        uncompressed: {
          options: {
            sourceMap: false,
            outputStyle: 'expanded'
          },
          files: {
            'dist/<%= pkg.name %>-<%= pkg.version %>.css': 'scss/main.scss'
          }
        }
      },
      watch: {
        sass: {
          files: 'scss/{,*/}*.scss',
          tasks: ['sass:dev']
        }
      },
      sasslint: {
        allFiles: [
          'scss/*.scss'
        ]
      },
      css_purge: {
        dist: {
          options: {},
          src: 'dist/<%= pkg.name %>-<%= pkg.version %>.min.css',
          dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.min.css',
        },
        uncompressed: {
          options: {},
          src: 'dist/<%= pkg.name %>-<%= pkg.version %>.css',
          dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.css',
        },
      },
    }
  );
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });

  grunt.registerTask('checkYear', 'Checks the year patterns in copyright lines in source files.', () => {
    const pattern = `2015-${new Date().getFullYear()}`
    const invalidFiles = child_process.execSync('git ls-files LICENSE "*.scss" "*.html" "*.js"').toString().trim().split('\n').filter(file => {
      return !fs.readFileSync(file).toString().includes(pattern)
    })
    invalidFiles.forEach(file => {
      grunt.log.error(`The file, ${file}, does not include the pattern: ${pattern}`)
    })
    return invalidFiles.length === 0
  })
  grunt.registerTask('validate', 'validate css bundle with W3C Jigsaw', function () {
    const path = require('path');
    var validate = require('css-validator');
    const glob = require('glob');
    let srcPath = '';
    let css = '';
    glob("*.css", {}, function (err, files) {
      files.map(file => {
        srcPath = path.join(__dirname + '/dist', file);
        css = grunt.file.read(srcPath);
        var done = this.async();
        validate({ text: `${css}` }, function (error, data) {
          if (data.validity) {
            done(true);
          } else {
            done(false);
          }
        });
      })

    })
  })
  grunt.registerTask('default', ['sasslint', 'sass:dist', 'css_purge', 'checkYear', 'validate']);
  grunt.registerTask('rultor', ['sasslint', 'sass:dist', 'sass:uncompressed', 'css_purge', 'checkYear', 'validate']);
  grunt.registerTask('dev', ['sasslint', 'sass:dev', 'css_purge', 'watch']);
}
