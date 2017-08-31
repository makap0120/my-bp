var gulp = require('gulp'),
	nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks', function() {
	gulp.src('src/index.html')
		.pipe(nunjucksRender())
		.pipe(gulp.dest('src'));
})