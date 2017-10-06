var serveStatic = require('serve-static');
var fs = require('fs');
var _ = require('lodash');

var mountFolder = function (dir)
{
    return serveStatic(require('path')
    .resolve(dir));
};

var webpackDistConfig = require('./webpack.dist.config.js');
var webpackDevConfig = require('./webpack.dev.config.js');

module.exports = function (grunt)
{
    // Let *load-grunt-tasks* require everything
    require('load-grunt-tasks')(grunt);

    // Read configuration from package.json
    var pkgConfig = grunt.file.readJSON('package.json');

    grunt.initConfig({
        'pkg': pkgConfig,

        'webpack': {
            options: webpackDistConfig,
            dist   : {
                cache: false
            }
        },

        'webpack-dev-server': {
            options: {
                hot        : true,
                port       : 8000,
                webpack    : webpackDevConfig,
                publicPath : '/assets/',
                contentBase: './<%= pkg.src %>/'
            },

            start: { }
        },

        'connect': {
            options: {
                port: 8000
            },

            dist: {
                options: {
                    keepalive : true,
                    middleware: function ()
                    {
                        return [
                            mountFolder(pkgConfig.dist)
                        ];
                    }
                }
            }
        },

        'open': {
            options: {
                delay: 500
            },
            dev    : {
                path: 'http://localhost:<%= connect.options.port %>/webpack-dev-server/index.web.html'
            },
            dist   : {
                path: 'http://localhost:<%= connect.options.port %>/index.html'
            }
        },

        'karma': {
            unit: {
                configFile: 'karma.conf.js'
            }
        },

        'copy': {
            dist: {
                files: [
                    {
                        flatten: true,
                        src    : ['<%= pkg.src %>/index.web.html'],
                        dest   : '<%= pkg.dist %>/index.html'
                    },
                    {
                        flatten: true,
                        src    : ['<%= pkg.src %>/favicon.ico'],
                        dest   : '<%= pkg.dist %>/favicon.ico'
                    }
                ]
            }
        },

        'clean': {
            dist: {
                options: {
                    force: true
                },
                files  : [{
                    dot: true,
                    src: [
                        '<%= pkg.dist %>'
                    ]
                }]
            }
        },

        'watch': {
            options: {
                livereload: true
            },
            build  : {
                files: 'src/**/*.js',
                tasks: ['webpack']
            },
            sass   : {
                files: 'src/assets/scss/**/*.scss',
                tasks: ['sass']
            }
        },

        'exec': {
            launch_electron: 'electron electron.js'
        },

        'eslint': {
            options: {
                fix: false
            },
            target : ['src/**/*.js']
        },

        'concurrent': {
            electron: {
                tasks  : ['watch', 'exec:launch_electron'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },

        'sass': {
            options: {
                sourceMap: true
            },
            dist   : {
                files: {
                    'src/assets/css/estilos.css': 'src/assets/scss/estilos.scss'
                }
            }
        }
    });

    grunt.registerTask('serve-web', function (target)
    {
        if (target === 'dist')
        {
            return grunt.task.run(['build', 'open:dist', 'connect:dist']);
        }

        grunt.task.run([
            'open:dev',
            'webpack-dev-server'
        ]);
    });

    grunt.registerTask('serve-electron', function ()
    {
        grunt.task.run([
            'concurrent:electron'
        ]);
    });

    grunt.registerTask('generate-mock', function ()
    {
        var db = {};

        fs.readdirSync('./apiMock/data').forEach(file => {
            if(file.endsWith('.json'))
            {
                var name = file.split('.')[0];
                db[name] = require('./apiMock/data/' + file)[name];
            }
        })

        fs.writeFileSync('apiMock/db.json', '');
        fs.writeFileSync('apiMock/db.json', JSON.stringify(db));
    });

    grunt.registerTask('create-component', function (name)
    {
        var componentLowerFirst = _.lowerFirst(name);

        // Component file
        var component = fs.readFileSync(__dirname + '/.templates/component.js', 'utf8');
        component = component.replace(/@COMPONENT@/g, name);
        if (!fs.existsSync(__dirname + '/src/core/components/' + componentLowerFirst))
        {
            fs.mkdirSync(__dirname + '/src/core/components/' + componentLowerFirst);
        }
        fs.writeFileSync(__dirname + '/src/core/components/' + componentLowerFirst + '/' + name + '.js', component, 'utf8');

        // Storybook file
        var story = fs.readFileSync(__dirname + '/.templates/story.js', 'utf8');
        story = story.replace(/@COMPONENT@/g, name);
        story = story.replace(/@COMPONENT_LW@/g, componentLowerFirst);
        fs.writeFileSync(__dirname + '/stories/' + name + '.stories.js', story, 'utf8');

        // Component readme
        var componentReadme = fs.readFileSync(__dirname + '/.templates/component-readme.md', 'utf8');
        fs.writeFileSync(__dirname + '/src/core/components/' + componentLowerFirst + '/readme.md', componentReadme, 'utf8');

        console.info('\nComponent created: ' + __dirname + '/src/core/components/' + componentLowerFirst + '/' + name + '.js');
        console.info('Readme created: ' + __dirname + '/src/core/components/' + componentLowerFirst + '/readme.md');
        console.info('Story created: ' + __dirname + '/stories/' + name + '.stories.js');
    });

    grunt.registerTask('build', ['clean', 'copy', 'webpack']);
    grunt.registerTask('default', []);
};
