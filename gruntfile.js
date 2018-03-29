module.exports = function(grunt){


/**
  //something trying
  grunt.registerTask('code', function(){
    console.log('I am coding...');
  });
                    **/


/******************/


  //load plugins
  grunt.loadNpmTask('grunt-contrib-concat');
  grunt.loadNpmTask('grunt-sass');
  grunt.loadNpmTask('grunt-contrib-uglify');

  //register tasks
  grunt registerTask('concat-js', ['concat:js']);
  grunt registerTask('concat-css', ['concat:css']);


  grunt.initConfig({
    //pass in options to plugins, references to files etc.
    concat: {
      js: {
         src: ['js/*.js'], // src: ['js/jquery-1.12.4', 'js/rslides.js', 'js/scripts.js']
         dest: 'build-grunt/script.js'
      },
      css: {
        src: ['css/reset.css', 'css/mixins.css', 'css/style.css', 'css/variable.css'],
        dest: 'build-grunt/styles.css'
      }
    },

    sass: {
        build:{
          files:[{
            src: ['scss/styles.scss'],
            dest: 'css/styles.css'
          }]
        }
      },

      uglify: {
        build:{
          files:[{
            src: ['build/script.js'],
            dest: 'build-grunt/script.js'
          }]
        }
      }
  });


}
