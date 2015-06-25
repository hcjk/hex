var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload');

//styles
gulp.task('styles', function () {
    console.log('runs styles');
});

//scripts
gulp.task('scripts', function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('minjs'))
    console.log('runs scripts');
});

//watches stuff
gulp.task('watch', function () {
    var server = livereload({start: true});
    gulp.watch('js/*.js', ['scripts']);
});

//defaults
gulp.task('default', ['styles', 'scripts', 'watch']);