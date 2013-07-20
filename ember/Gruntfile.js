module.exports = function(grunt) {

    // files to include in main build
    var contactsFiles = [
        'js/application.js',
        'js/router.js',
        'js/models/store.js',
        'js/models/contact.js',
        'js/controllers/contacts_controller.js',
        'js/controllers/contact_controller.js',
        'js/views/display_view.js'
    ];

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                report: 'min',
                beautify: false
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
