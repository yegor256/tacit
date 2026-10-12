/**
 * SPDX-FileCopyrightText: Copyright (c) 2015-2026 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

const fs = require('fs');
const cp = require('child_process');
const validate = require('css-validator');
const { globSync } = require('glob'),
  pattern = `2015-${new Date().getFullYear()}`;

module.exports = (grunt) => {
  grunt.util.linefeed = '\n';
  grunt.loadNpmTasks('grunt-css-purge');
  grunt.loadNpmTasks('grunt-file-append');
  grunt.initConfig(
    {
      css_purge: {
        dist: {
          files: {
            'dist/<%= pkg.name %>-<%= pkg.version %>.min.css': 'dist/<%= pkg.name %>-<%= pkg.version %>.min.css',
            'dist/<%= pkg.name %>.min.css': 'dist/<%= pkg.name %>.min.css'
          },
          options: {
            shorten: false
          }
        },
        uncompressed: {
          files: {
            'dist/<%= pkg.name %>-<%= pkg.version %>.css': 'dist/<%= pkg.name %>-<%= pkg.version %>.css',
            'dist/<%= pkg.name %>.css': 'dist/<%= pkg.name %>.css'
          },
          options: {}
        },
      },
      file_append: {
        default_options: {
          files: [
            {
              input: 'dist/<%= pkg.name %>.css',
              output: 'dist/<%= pkg.name %>.css',
              prepend: "/* <%= pkg.name %> <%= pkg.version %> */",
            },
            {
              input: 'dist/<%= pkg.name %>.min.css',
              output: 'dist/<%= pkg.name %>.min.css',
              prepend: "/* <%= pkg.name %> <%= pkg.version %> */",
            },
            {
              input: 'dist/<%= pkg.name %>-<%= pkg.version %>.css',
              output: 'dist/<%= pkg.name %>-<%= pkg.version %>.css',
              prepend: "/* <%= pkg.name %> <%= pkg.version %> */",
            },
            {
              input: 'dist/<%= pkg.name %>-<%= pkg.version %>.min.css',
              output: 'dist/<%= pkg.name %>-<%= pkg.version %>.min.css',
              prepend: "/* <%= pkg.name %> <%= pkg.version %> */",
            }
          ]
        }
      },
      pkg: grunt.file.readJSON('package.json'),
      sass: {
        dev: {
          files: {
            'tacit.min.css': 'scss/main.scss'
          },
          options: {
            implementation: require('sass'),
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
            implementation: require('sass'),
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
            implementation: require('sass'),
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
    const invalidFiles = cp.execSync('git ls-files LICENSE.txt "*.scss" "*.html" "*.js"').toString().trim().split('\n').filter(
      file => !fs.readFileSync(file).toString().includes(pattern)
    );
    invalidFiles.forEach(file => {
      grunt.log.error(`The file, ${file}, does not include the pattern: ${pattern}`);
    });
    return invalidFiles.length === 0
  });

  grunt.registerTask('validate', 'validate css bundle with W3C Jigsaw', function validateTask() {
    let failed = false,
      remaining = 0;
    const done = this.async(),
      files = globSync('dist/*.css'),
      report = (file, ok, message) => {
        if (ok) {
          grunt.log.ok(`${file} is valid`);
        } else {
          grunt.log.error(message);
          failed = true;
        }
        remaining -= 1;
        if (remaining === 0) {
          done(!failed);
        }
      };
    remaining = files.length;
    if (remaining === 0) {
      grunt.log.error('No CSS files found in dist/. Run the sass:dist task first.');
      done(false);
      return;
    }
    files.forEach((file) => {
      let settled = false;
      grunt.log.writeln(`Validating ${file}...`);
      const onResult = (error, data) => {
        if (settled) {
          return;
        }
        settled = true;
        if (error) {
          report(file, false, `The file, ${file}, failed to validate: ${error.message || error}`);
          return;
        }
        report(file, data.validity, `The file, ${file}, does not pass W3C CSS validation`);
      };
      try {
        validate({ text: grunt.file.read(file) }, onResult);
      } catch (error) {
        onResult(error, null);
      }
    });
  });

  grunt.registerTask('default', ['sasslint', 'sass:dist', 'sass:uncompressed', 'css_purge', 'file_append', 'checkYear', 'validate']);
  grunt.registerTask('dev', ['sasslint', 'sass:dev', 'css_purge', 'watch']);
}
