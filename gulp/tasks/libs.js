var gulp =    require('gulp'),
	cssnano = require('gulp-cssnano'),
	concat =  require('gulp-concat'),
	uglify =  require('gulp-uglifyjs'),
	rename =  require('gulp-rename');

// gulp.task('libs', function() {
// 	var js = gulp.src('src/libs/*.js')
// 		.pipe(concat('libs.min.js'))
// 		.pipe(uglify())
// 		.pipe(gulp.dest('src/js'));

// 	var css = gulp.src('src/libs/*.css')
// 		.pipe(concat('libs.min.css'))
// 		.pipe(cssnano())
// 		.pipe(gulp.dest('src/css'))
// });

gulp.task('js-libs', function() {
	gulp.src([
		'src/libs/jquery/dist/jquery.min.js',
		'src/libs/wow/dist/wow.min.js',
		'src/libs/jquery.inview.min.js',
		'src/libs/slick-carousel/slick/slick.min.js',
		'src/libs/jquery.countTo.js',
		'src/libs/onepagenav/jquery.nav.js',
		'src/libs/smoothscroll.js'
		])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/js'))
});

gulp.task('css-libs', function() {
	gulp.src([
		'src/libs/slick-carousel/slick/slick-theme.css',
		'src/libs/slick-carousel/slick/slick.css',
		'src/libs/animate/animate.css',
		'src/libs/font-awesome/css/font-awesome.min.css'
		])
		.pipe(concat('libs.min.css'))
		.pipe(cssnano())
		.pipe(gulp.dest('src/css'))
});

gulp.task('fonts-libs', function() {
	gulp.src([
		'src/libs/font-awesome/fonts/**/*.*',
		'src/libs/slick-carousel/slick/fonts/**/*.*'
		])
		.pipe(gulp.dest('src/fonts'));
});


