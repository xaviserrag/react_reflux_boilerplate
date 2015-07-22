var lrload = require('livereactload');

module.exports = function (grunt) {
    'use strict';

    var config = {

        pkg: grunt.file.readJSON('package.json'),

        eslint: {
            target: [
                './src/**/*.js',
                '!./tests/**/*.spec.js'
            ]
        },
        browserify: {
            build: {
                src: 'src/index.js',
                dest: '.build/js/index.js',
                options: {
                    browserifyOptions: {
                        debug: true,
                        extensions: ['.es6', '.jsx', '.js']
                    },
                    watch: true,
                    keepAlive: false,
                    transform: ['babelify', 'livereactload']
                }
            }
        },
        copy: {
            assets: {
                files: [
                    {cwd: 'src', expand: true, src: './assets/*', dest: '.build/'}
                ]
            },
            html: {
                files: [
                    {cwd: 'src', expand: true, src: '*.html', dest: '.build/'}
                ]
            }
        },
        watch: {
            all: {
                files: ['src/**/*.js', 'tests/**/*.js'],
                tasks: ['eslint', 'copy'],
                options: {
                    spawn: false
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 8080,
                    base: '.build'
                }
            }
        },

        clean: {
            all: ['.build/*']
        },

        karma: {
            production: {
                configFile: 'karma.conf.js',
                singleRun: true
            },
            development: {
                configFile: 'karma.conf.js',
                coverageReporter: {type: 'html'},
                autoWatch: true,
                singleRun: true
            }
        }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('bundle', ['clean:all', 'browserify', 'copy']);
    grunt.registerTask('server', ['connect', 'monitoring', 'watch']);

    grunt.registerTask('build', ['bundle', 'server']);

    grunt.registerTask('default', ['eslint', 'build']);

    grunt.registerTask('test', ['karma:production']);

    grunt.registerTask('monitoring', function() {
        lrload.monitor('.build/js/index.js');
    });
};
