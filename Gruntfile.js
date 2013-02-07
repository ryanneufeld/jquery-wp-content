"use strict";

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("./package.json"),
		jshint: {
			all: [
				"Gruntfile.js",
				"themes/jquery/js/main.js"
			],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Define what should be rebuilt for the watch task
		watch: {
			scripts: {
				files: "<%= jshint.all %>",
				tasks: ["default"],
				options: {
					interrupt: true
				}
			},
			styles: {
				files: "themes/jquery/stylus/**/*.styl",
				tasks: ["stylus", "mincss"],
				options: {
					interrupt: true
				}
			}
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			dist: ["themes/jquery/dist"]
		},

		stylus: {
			compile: {
				options: {
					paths: ["themes/jquery/stylus/util"],
					"import": [
						"colors"
					]
				},
				files: {
					"themes/jquery/dist/output.css": ["themes/jquery/stylus/*.styl"] // compile and concat into single file
				}
			}
		},

		mincss: {
			build: {
				files: {
					"themes/jquery/dist/index.css": "themes/jquery/dist/output.css"
				}
			}
		},

		uglify: {
			build: {
				files: {
					"themes/jquery/dist/index.js": ["themes/jquery/js/plugins.js", "themes/jquery/js/main.js"]
				}
			}
		}

	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-mincss");
	grunt.loadNpmTasks("grunt-contrib-stylus");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	// By default, lint and run all tests.
	grunt.registerTask("default", ["jshint", "clean", "uglify", "stylus", "mincss"]);

};

