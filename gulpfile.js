var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
// browser sync create method to autorefresh when saving a file
var browserSync = require('browser-sync').create();

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
	.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function() {
		// gulp.start('html');
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function() {
		// gulp.start('styles');
		gulp.start('cssInject');
	});
});

// anytime we save a change to any css file, we are triggering the css inject task
// we built the css inject task so that it won't begin until css styles file will compile 
// and complete first
gulp.task('cssInject', ['styles'], function() {
	// method to make available to the browser
	return gulp.src("./app/temp/styles/styles.css")
	.pipe(browserSync.stream());
});








