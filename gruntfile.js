var webpack = require("webpack");

module.exports = function (grunt) {

  grunt.initConfig({

    pkg:grunt.file.readJSON('package.json'),

    webpack:{
      dev:{
        entry:'./client/app/app.js',
        output: {
          path:'public/',
          filename: 'bundle.js'
        },
        stats: {
          // Configure the console output
          colors: true,
          modules: true,
          reasons: true
        },
        watch:true,

        module:{
          loaders:[
            {test:/\.js$/,  loader:'babel?presets[]=es2015'},
            {test:/\.html$/, loader:'raw'},
            {test:/\.css$/, loader:'style!css'},
            {test:/\.sass$/, loader:'style!css!sass?indentedSyntax'},
            {test:/\.json$/, loader:'json'},
            {test: /\.(jpg|png|ttf|eot|svg|woff|woff2)$/, loader: "file?name=lib/[hash].[ext]" }
          ]
        }
      },
      build:{
        entry:'./client/app/app.js',
        output: {
          path:'public/',
          filename: 'bundle.js'
        },
        stats: {
          // Configure the console output
          colors: true,
          modules: true,
          reasons: true
        },

        module:{
          loaders:[
            {test:/\.js$/,  loader:'babel?presets[]=es2015'},
            {test:/\.html$/, loader:'raw'},
            {test:/\.css$/, loader:'style!css'},
            {test:/\.sass$/, loader:'style!css!sass?indentedSyntax'},
            {test:/\.json$/, loader:'json'},
            {test: /\.(jpg|png|ttf|eot|svg|woff|woff2)$/, loader: "file?name=lib/[hash].[ext]" }
          ]
        },
        plugins: [
          new webpack.optimize.UglifyJsPlugin({minimize: true})
        ]
      }
    },

    copy:{
      html:{
        expand:true,
        cwd:'client/',
        src: ['index.html'],
        dest: 'public/'
      },
      image:{
        expand:true,
        cwd:'client/assets/img/',
        src: ['*.jpg','*.JPG','*.png'],
        dest: 'public/img/'
      }
    },

    connect:{
      server:{
        options:{
          livereload: true,
          port: 8080,
          base: 'public/'
        }
      }
    },

    watch:{
      options:{
        livereload:true
      },
      image:{
        files:['client/assets/img/*.jpg','client/assets/img/*.svg','client/assets/img/*.JPG'],
        tasks:['copy:image']
      }

    },

    clean:{
      all:{
        src:['public/*']
      }
    }



  });

  grunt.registerTask('default',['clean:all','copy','webpack:dev','connect:server','watch']);
  grunt.registerTask('build',['clean:all','copy','webpack:build']);


  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');
}
