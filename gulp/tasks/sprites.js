var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var del = require('del');

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

gulp.task('beginClean', function() {
	return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

// beginClean needs to finish running first
gulp.task('createSprite', ['beginClean'], function() {
	return gulp.src('./app/assets/images/icons/**/*.svg')
	// intermediate step to transform files
	.pipe(svgSprite(config))
	// get all svg files and move into temp folder
	.pipe(gulp.dest('./app/temp/sprite/'));
});

// createSprite needs to finish running first
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

// delete after creating sprites for use
gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
	return del('./app/temp/sprite');
});

// merge two gulp tasks into 1 task for simplicity
gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);