var gulp = require('gulp');
var clean = require('../../gulp/tasks/clean.js');

gulp.task('build', ['clean'], function() {
	var html = gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));

	var css = gulp.src('src/css/*.css')
		.pipe(gulp.dest('dist/css'));

	var js = gulp.src('src/js/**/*.js')
		.pipe(gulp.dest('dist/js'));

	var img = gulp.src('src/img/**/*')
		.pipe(gulp.dest('dist/img'));

	var fonts = gulp.src('src/fonts/**/*.*')
		.pipe(gulp.dest('dist/fonts'));
});