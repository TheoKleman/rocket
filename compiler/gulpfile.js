var gulp        = require('gulp');
var webpack     = require('gulp-webpack');
var sass        = require('gulp-sass');
var notify      = require('gulp-notify');
var browserSync = require('browser-sync').create();

// Config
var config = require('./config/general.config')

gulp.task('scripts', function () {
	console.log("task scripts");

	return gulp
		.src(config.scripts.inputPath + '/' + config.scripts.entry)
		.pipe(webpack( require('./config/webpack.config.js') ))
		.pipe(gulp.dest(config.scripts.outputPath));
});

gulp.task('styles', function () {
	return gulp
		.src(config.styles.inputPath + '/' + config.styles.entry)
		.pipe(sass().on('error', function(err) {
			if (config.allowNotifications) {
				notify().write('Sass error : ' + err.message)
			} else {
				console.log(err)
			}

			this.emit('end');
		}))
		.pipe(gulp.dest(config.styles.outputPath))
		.pipe(browserSync.stream());
});


gulp.task('default', ['scripts', 'styles'], function () {
	browserSync.init(config.browserSync);

	// Watching for changes
	gulp.watch(config.styles.inputPath + '/**/*.scss', ['styles']);
	gulp.watch(config.scripts.inputPath + '/**/*.es6', ['scripts']);
});
