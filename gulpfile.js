'use strict';

var gulp       = require('gulp')
  , uglify     = require('gulp-uglify')
  , rename     = require('gulp-rename')
  , ngAnnotate = require('gulp-ng-annotate')
  ;


gulp.task('copy', function() {
    gulp.src('lib/sweetalert.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest('dist/'))
    ;
});

gulp.task('dist', ['copy'], function() {
    gulp.src('lib/sweetalert.js')
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename({
            basename: 'sweetalert.min'
        }))
        .pipe(gulp.dest('dist/'))
    ;
});
