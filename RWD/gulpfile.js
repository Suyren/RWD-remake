'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('css/*.scss')
     .pipe(sass().on('error' , sass.logError))
     .pipe(gulp.dest('./css'))
});

gulp.task('sass:watch', function () {
    gulp.watch('css/*.scss', ['sass']);
  });

gulp.task('concat' , function (){
    return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest(js/all.js))
});
gulp.task('default',['sass']);