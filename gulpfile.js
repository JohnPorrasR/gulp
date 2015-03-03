var gulp       = require('gulp'),
   // livereload = require('gulp-livereload'),
   connect     = require('gulp-connect'),
   concat      = require('gulp-concat'),
   uglify      = require('gulp-uglify');

var rootDir = './';

gulp.task('css', function(){
  gulp.src('css/*.css')
    .pipe(connect.reload());
});

gulp.task('js', function(){
  return gulp.src(['js/variables.js', 'js/rojo.js', 'js/verde.js'])
    .pipe(connect.reload())
    .pipe(concat('colores.js'))
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
