'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var gls = require('gulp-live-server');
var sourcemaps = require('gulp-sourcemaps');

var server = gls.new('app.js');

// include path?
gulp.task('sass', function () {
	return gulp.src('./src/css/**/*.scss')
		.pipe(sourcemaps.init())
	    .pipe(sass.sync().on('error', sass.logError))
	    .pipe(sourcemaps.write('./'))
	    .pipe(gulp.dest('./public'));
});

gulp.task('watch', ['sass'], function() {
	// sass compiling
	gulp.watch('./src/css/**/*.scss', ['sass']);
	// server 
	server.start();
	gulp.watch(['app.js', './server/**/*'], function() {
		server.start.bind(server)();
	});

	gulp.watch(['./public/**/*.css'], function(file) {
		server.notify.apply(server, [file]);
	});
});

gulp.task('build', function() {
	// put all final content into build folder
	
});

gulp.task('default', ['watch'], function() {

});