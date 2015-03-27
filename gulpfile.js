'use strict';

var gulp       = require('gulp')
  , uglify     = require('gulp-uglify')
  , rename     = require('gulp-rename')
  , ngAnnotate = require('gulp-ng-annotate')
  , jshint     = require('gulp-jshint')
  ;


gulp.task('lint', function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('copy', function() {
    gulp.src('lib/sweetalert.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest('dist/'))
    ;
});

gulp.task('dist', ['lint', 'copy'], function() {
    gulp.src('lib/sweetalert.js')
        .pipe(ngAnnotate())
        .pipe(uglify({
            preserveComments: 'some'
        }))
        .pipe(rename({
            basename: 'sweetalert.min'
        }))
        .pipe(gulp.dest('dist/'))
    ;
});
