var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');

// default task, when running, we want it to do something
gulp.task('default', function() {
	console.log('gulp task created');
});

gulp.task('html', function() {
	console.log('watching html file');
});

gulp.task('styles', function() {
	// console.log('watching stylesheet changes');
	// move water in pipe from point a to b, and manipulate
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
	watch('./app/index.html', function() {
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});
});