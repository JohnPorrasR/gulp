var gulp       = require('gulp'),
   // livereload = require('gulp-livereload'),
   connect     = require('gulp-connect');

var rootDir = './';

gulp.task('html', function(){
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('connect', function(){
  connect.server({
    root: rootDir,
    livereload: true
  });
});

gulp.task('watch', function(){
//  livereload.listen();
  gulp.watch('*.html', ['html']);
});

gulp.task('default',['connect','watch']);
