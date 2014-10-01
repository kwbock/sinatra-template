module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Clean stuff up
    clean: {
      // Clean any pre-commit hooks in .git/hooks directory
      hooks: ['.git/hooks/pre-commit']
    },

    // Run shell commands
    shell: {
      hooks: {
        // Copy the project's pre-commit hook into .git/hooks
        command: 'cp config/git-hooks/pre-commit .git/hooks/'
      }
    },

    jshint: {
      all: ['app/**/*.js'],
      options: {
        asi: false,
        boss: false,
        camelcase: false,
        curly: true,
        eqeqeq: true,
        eqnull: false,
        evil: false,
        expr: false,
        forin: true,
        funcscope: false,
        immed: true,
        latedef: true,
        loopfunc: false,
        maxerr: 100,
        newcap: true,
        node: true,
        nonew: true,
        plusplus: false,
        regexdash: false,
        shadow: false,
        strict: false,
        sub: false,
        supernew: false,
        trailing: true,
        undef: true,
        unused: true,
        white: false,
        predef: [
          "_",
          "$",
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('hookmeup', ['clean:hooks', 'shell:hooks']);

};
