const gulp = require('gulp');
const sass = require('gulp-sass');
const server = require('gulp-server-livereload');

gulp.task('sass', function () {
	console.log('Running sass');
	return gulp.src('./src/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist'));
});

gulp.task('move', function () {
	console.log('Running move');
	return gulp.src('./src/**/*.*')
		.pipe(gulp.dest('dist'));
});
gulp.task('watch', function() {
	return gulp.watch('./src/**/*.*', ['sass', 'move'])
});

gulp.task('server', function() {
	return gulp.src('./dist')
		.pipe(server({ livereload: true }));
});

gulp.task('start', ['watch', 'server']);
gulp.task('build', ['sass', 'move']);