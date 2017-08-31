var gulp = require('gulp'),
	cssnano = require('gulp-cssnano'),
	uglify =  require('gulp-uglifyjs'),
	rename =  require('gulp-rename'),
	htmlmin = require('gulp-htmlmin');

gulp.task('minify-js', function() {
	gulp.src('src/js/main.js')
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('src/js'));
});

gulp.task('minify-css', function() {
	gulp.src([
		'src/css/main.css',
		'src/css/normalize.css'
		])
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('src/css'));
});
gulp.task('minify-html', function() {
	gulp.src('src/index.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('src/'));
});

gulp.task('minify', ['minify-js', 'minify-css'], function() {});