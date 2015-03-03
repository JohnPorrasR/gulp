var gulp       = require('gulp'),
   // livereload = require('gulp-livereload'),
   connect     = require('gulp-connect'),
   uglify      = require('gulp-uglify');

var rootDir = './';

gulp.task('css', function(){
  gulp.src('css/*.css')
    .pipe(connect.reload());
});

gulp.task('js', function(){
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('lib'))
});

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
  gulp.watch('js/*.js', ['js']);
  gulp.watch('*.html', ['html']);
  gulp.watch('css/*.css', ['css']);
});

gulp.task('default',['connect','watch']);
