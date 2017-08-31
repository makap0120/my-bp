var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src/"
        },
        files: ['src/*.html', 'src/img/**/*.{jpeg,png,jpg}', 'src/css/**/*', 'src/js/**.*']
    });
});