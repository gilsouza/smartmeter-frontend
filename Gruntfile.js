module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    clean: ["path/to/dir/one", "path/to/dir/two"],
    browserSync: {
        default_options: {
            bsFiles: {
                src: [
                    "**/*.*"
                ]
            },
            options: {
              server: {
                baseDir: "public"
              }
            }
        }
    },
    concat: {
        options: {
            separator: ';',
            stripBanners: true,
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */',
            },
        dist: {
            src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
            dest: 'dist/built.js',
        },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['browserSync']);
  grunt.registerTask('build', ['clean', 'concat', 'uglify']);

};