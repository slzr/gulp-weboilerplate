
/**
 * SERVE TASKS
 */
module.exports = function (gulp, $, conf) {
  'use strict';

  conf.browserSync = $.browserSync;

  gulp.task('server', function() {
    $.browserSync.init({
      server: { baseDir: conf.folders.dest }
    });
  })

  /**
   * @task {serve}
   * @group {serve}
   */
  gulp.task('serve', $.sequence(['scss', 'bower'], 'watch', 'server'));
    
}

//     gulp.watch("src/scss/**/*.scss", ['scss']);
//     gulp.watch("src/js/**/*.js", ['js']);
//     gulp.watch("src/**/*.html").on('change', browserSync.reload);

//     gulp.watch("src/js/**/*.js").on('change', browserSync.reload);

//   });
//   gulp.task('serve', sequence('scss', 'bower', 'server'));

//   gulp.task('default', ['serve']);


