var gulp = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Sass
gulp.task('sass', function(){
	gulp.src('assets/sass/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('assets/css/'))
});

// Task for building blog when something changed:
gulp.task('build', shell.task(['bundle exec jekyll build --watch']));

// Task for serving blog with Browsersync
gulp.task('serve', function () {
    browserSync.init({server: {baseDir: '_site/'}});
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['build', 'serve']);