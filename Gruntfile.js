module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

};
