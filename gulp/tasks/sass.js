var gulp = require('gulp');
var sass = require('gulp-sass');
var cfg = require('../../package.json').config;
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
 
gulp.task('sass', function () {
  return gulp.src(cfg.src.sass + '/**/*.{scss,sass}')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('src/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('src/sass/**/*.{scss,sass}', ['sass']);
});