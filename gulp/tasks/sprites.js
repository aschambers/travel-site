var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');

var config = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}

gulp.task('createSprite', function() {
	return gulp.src('./app/assets/images/icons/**/*.svg')
	// intermediate step to transform files
	.pipe(svgSprite(config))
	// get all svg files and move into temp folder
	.pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/**/*.svg')
	.pipe(gulp.dest('./app/assets/images/sprites'));
});
// add squre brackets to make createSprite have to finish before this gulp task
gulp.task('copySpriteCSS', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/*.css')
	.pipe(rename('_sprite.css'))
	.pipe(gulp.dest('./app/assets/styles/modules'));
});

// merge two gulp tasks into 1 task for simplicity
gulp.task('icons', ['createSprite', 'copySpriteGraphic', 'copySpriteCSS']);