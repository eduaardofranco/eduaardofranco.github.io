"use strict";

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
  minifyCSS = require('gulp-clean-css'),
  minifyJS = require('gulp-minify'),
	gutil = require('gulp-util'),
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),
	sassDir = './src/styles/*.scss';

// compile sass to .css
gulp.task('sass', function() {

	 var onError = function(err) {
        notify.onError({
            title:    "Gulp",
            subtitle: "Failure!",
            message:  "Error: <%= error.message %>",
            sound:    "Beep"
        })(err);

        this.emit('end');
    };

	// return gulp.src('assets/css/*.scss')
	return gulp.src(sassDir)
	.pipe(plumber({errorHandler: onError}))
	.pipe(sass())
	.pipe(rename('app.css'))
	.pipe(gulp.dest('build/styles'));
});

//'gulp minify' will be minify both, css and js
gulp.task('minify', function() {

  // minify css, rename and put in build/styles
	gulp.src('build/styles/app.css')
	.pipe(minifyCSS())
	.pipe(rename('app.min.css'))
  .pipe(gulp.dest('build/styles'));
  
  // minify js, rename and put in build/scripts
  gulp.src('src/scripts/app.js')
    .pipe(minifyJS())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('build/scripts'));

});



//watching changes
gulp.task('watch', function () {
	gulp.watch(sassDir, ['sass']);
});

// run default function of gulp
gulp.task('default', ['watch']);