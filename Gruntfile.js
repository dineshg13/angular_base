module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: "**/*.ts",
            tasks: ['ts']
        },
        sass: {
            dev: {
                files: {
                    'app/css/main.css': 'app/scss/main.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'app/css/*.css',
                        '*',
                        'app/*'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
        ts: {
            default: {
                tsconfig: true
            }
        }

    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks("grunt-ts");

    // define default task
    grunt.registerTask('default', ['ts', 'browserSync', 'watch']);
};