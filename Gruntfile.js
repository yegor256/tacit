/**
 * SPDX-FileCopyrightText: Copyright (c) 2015-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

const fs = require('fs');
const cp = require('child_process');
const path = require('path');
const validate = require('css-validator');
const {glob} = require('glob'),
  pattern = `2015-${new Date().getFullYear()}`;

module.exports = (grunt) => {
  grunt.util.linefeed = '\n';
  grunt.loadNpmTasks('grunt-css-purge');
  grunt.initConfig(
    {
      css_purge: {
        dist: {
          files: {
            'dist/<%= pkg.name %>-<%= pkg.version %>.min.css': 'dist/<%= pkg.name %>-<%= pkg.version %>.min.css',
            'dist/<%= pkg.name %>.min.css': 'dist/<%= pkg.name %>.min.css'
          },
          options: {}
        },
        uncompressed: {
          files: {
            'dist/<%= pkg.name %>-<%= pkg.version %>.css': 'dist/<%= pkg.name %>-<%= pkg.version %>.css',
            'dist/<%= pkg.name %>.css': 'dist/<%= pkg.name %>.css'
          },
          options: {}
        },
      },
      pkg: grunt.file.readJSON('package.json'),
      sass: {
        dev: {
          files: {
            'tacit.min.css': 'scss/main.scss'
          },
          options: {
            implementation: require('node-sass'),
            outputStyle: 'compressed',
            sourceMap: true
          }
        },
        dist: {
          files: {
            'dist/<%= pkg.name %>-<%= pkg.version %>.min.css': 'scss/main.scss',
            'dist/<%= pkg.name %>.min.css': 'scss/main.scss'
          },
          options: {
            implementation: require('node-sass'),
            outputStyle: 'compressed',
            sourceMap: true
          }
        },
        uncompressed: {
          files: {
            'dist/<%= pkg.name %>-<%= pkg.version %>.css': 'scss/main.scss',
            'dist/<%= pkg.name %>.css': 'scss/main.scss'
          },
          options: {
            implementation: require('node-sass'),
            outputStyle: 'expanded',
            sourceMap: false
          }
        }
      },
      sasslint: {
        allFiles: [
          'scss/*.scss'
        ]
      },
      watch: {
        sass: {
          files: 'scss/{,*/}*.scss',
          tasks: ['sass:dev']
        }
      },
    }
  );

  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });

  grunt.registerTask('checkYear', 'Checks the year patterns in copyright lines in source files.', () => {
    const invalidFiles = cp.execSync('git ls-files LICENSE "*.scss" "*.html" "*.js"').toString().trim().split('\n').filter(
      file => !fs.readFileSync(file).toString().includes(pattern)
    );
    invalidFiles.forEach(file => {
      grunt.log.error(`The file, ${file}, does not include the pattern: ${pattern}`);
    });
    return invalidFiles.length === 0
  });

  grunt.registerTask('validate', 'validate css bundle with W3C Jigsaw', () => {
    let css = '', srcPath = '';
    glob("*.css", {}, (err, files) => {
      files.forEach(file => {
        const done = this.async();
        srcPath = path.join(`${__dirname}/dist`, file);
        css = grunt.file.read(srcPath);
        validate({ text: `${css}` }, (error, data) => {
          if (data.validity) {
            done(true);
          } else {
            done(false);
          }
        });
      });
    });
  });

  grunt.registerTask('default', ['sasslint', 'sass:dist', 'sass:uncompressed', 'css_purge', 'checkYear', 'validate']);
  grunt.registerTask('rultor', ['sasslint', 'sass:dist', 'sass:uncompressed', 'css_purge', 'checkYear', 'validate']);
  grunt.registerTask('dev', ['sasslint', 'sass:dev', 'css_purge', 'watch']);
}
