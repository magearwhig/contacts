module.exports = function(grunt) {

    // files to include in main build
    var contactsFiles = [
        'js/bindings.js',
        'js/models/contact.js',
        'js/viewModels/contacts.js',
        'js/application.js'
    ];

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                wrap: true,
                report: 'min',
                beautify: true
            },
            my_target: {
                files: {
                    'js/contacts.min.js': contactsFiles
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};
