'use strict';

var gulp  = require('gulp'),
  sass = require('gulp-sass'),
  tildeImporter = require('node-sass-tilde-importer');

gulp.task('build:css', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(
      sass({
        importer: tildeImporter
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest('./dist'));
});
  
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', ['build:css'], function() {});
