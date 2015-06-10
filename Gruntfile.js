module.exports = function(grunt) {
  
  require("load-grunt-tasks")(grunt);
  
  grunt.initConfig({
    
    less: {
      style: {
        files: {
          "build/css/style.css": ["source/less/style.less"]
        }
      }
    },
    
    autoprefixer: {
      options: {
        browsers: ["last 2 versions", "ie 10"] 
      },
      style: {
        src: "build/style.css"
      }
    },
    
    cmq: {
      style: {
        files: {
          "build/css/style.css": ["build/css/style.css"]
        }
      }
    },
    
    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0,
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },
    
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png, jpg, gif, svg}"]
        }]
      }
    },
    
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "source",
          src: [
            "img/**",
            "js/*",
            "index.html"
          ],
          dest: "build"
        }]
      }
    },
    
    clean: {
      build: ["build"]
    }
  
  });
  
  grunt.registerTask("build", [
    "clean",
    "copy",    
    "less",
    "autoprefixer",
    "cmq",
    "cssmin",
    "imagemin"
    ]);
  
};