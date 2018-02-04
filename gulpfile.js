var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var sass = require('gulp-sass');

gulp.task('default', function () {
    return gulp.src('./src/*.css')
        .pipe(postcss([ autoprefixer() ]))
        .pipe(gulp.dest('./dest'));
});

gulp.task('sass',function(){
    return gulp.src('./src/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./src/'));
});
gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', ['sass']);
  });