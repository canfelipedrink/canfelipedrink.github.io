var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', function () {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });

  gulp.watch("index.html").on("change", browserSync.reload);
  gulp.watch("*.css").on("change", browserSync.reload);
  gulp.watch("*.js").on("change", browserSync.reload);
});
