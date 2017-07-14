
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
   * Build 'www'
   * @task {build}
   * @group {Serve}
   */
  gulp.task('build', $.sequence('clean', 'nunjucks', 'scss', 'scripts','images', 'fonts', 'copy', 'bower'));


  /**
   * Build and open browserSync server port and watch files for changes
   * @task {serve}
   * @group {Serve}
   */
  gulp.task('serve', $.sequence('build', 'watch', 'server'));
}