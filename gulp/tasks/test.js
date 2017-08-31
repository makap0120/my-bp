var gulp = require('gulp');

gulp.task('test', function() {
	gulp.src('src/libs-original/**/*.*')
	.pipe(gulp.dest('dist/libs'))
})