/**
 * SPDX-FileCopyrightText: Copyright (c) 2015-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
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
            outputStyle: 'compressed',
            implementation: require('node-sass')
          },
          files: {
            'dist/<%= pkg.name %>-<%= pkg.version %>.min.css': 'scss/main.scss',
            'dist/<%= pkg.name %>.min.css': 'scss/main.scss'
          }
        },
        uncompressed: {
          options: {
            sourceMap: false,
            outputStyle: 'expanded',
            implementation: require('node-sass')
          },
          files: {
            'dist/<%= pkg.name %>-<%= pkg.version %>.css': 'scss/main.scss',
            'dist/<%= pkg.name %>.css': 'scss/main.scss'
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
          files: {
            'dist/<%= pkg.name %>-<%= pkg.version %>.min.css': 'dist/<%= pkg.name %>-<%= pkg.version %>.min.css',
            'dist/<%= pkg.name %>.min.css': 'dist/<%= pkg.name %>.min.css'
          }
        },
        uncompressed: {
          options: {},
          files: {
            'dist/<%= pkg.name %>-<%= pkg.version %>.css': 'dist/<%= pkg.name %>-<%= pkg.version %>.css',
            'dist/<%= pkg.name %>.css': 'dist/<%= pkg.name %>.css'
          }
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
    const {glob} = require('glob');
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
  grunt.registerTask('default', ['sasslint', 'sass:dist', 'sass:uncompressed', 'css_purge', 'checkYear', 'validate']);
  grunt.registerTask('rultor', ['sasslint', 'sass:dist', 'sass:uncompressed', 'css_purge', 'checkYear', 'validate']);
  grunt.registerTask('dev', ['sasslint', 'sass:dev', 'css_purge', 'watch']);
}
