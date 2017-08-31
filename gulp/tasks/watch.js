var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch',['server','sass'], function() {
  gulp.watch('src/sass/**/*', ['sass']);
  gulp.watch('src/**.*.html', browserSync.reload);
  gulp.watch('src/js/**.*.js', browserSync.reload);
})