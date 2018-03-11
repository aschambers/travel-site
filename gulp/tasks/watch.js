var gulp = require('gulp');
var watch = require('gulp-watch');
// browser sync create method to autorefresh when saving a file
var browserSync = require('browser-sync').create();

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

	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
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

// won't begin until scripts task has completed
gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});