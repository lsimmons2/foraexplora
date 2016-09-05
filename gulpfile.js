var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function(){
  gulp.src('./test/server.spec.js', {read: false})
  .pipe(mocha())
});

gulp.task('watch', function(){
  gulp.watch('*', ['test']);
})
