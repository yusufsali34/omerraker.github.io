module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			files: ['*.js','src/*.js']
		},
		watch: {
			files: ['<%= jshint.files %>','index.html'],
			tasks: ['jshint','browserSync']
		},
		browserSync: {
			bsFiles: {
				src: ['index.html','*.js','src/*.js']
			},
			options: {
				server: {
					baseDir: "./" 
				},
				watch: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['jshint']);
};