var gulp = require('gulp');

gulp.task('copy', function() {
	return gulp.src('src/**/*')
		.pipe(gulp.dest('dist'))
})

gulp.task('copy:watch', function () {
  gulp.watch('src/**/*', ['copy']);
});