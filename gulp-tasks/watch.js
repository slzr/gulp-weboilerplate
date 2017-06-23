
/**
 * WATCH TASKS
 */
module.exports = function (gulp, $, conf) {
  'use strict';

  /**
   * WATCH ALL FILES AND EXECUTE TASKS
   * @task {watch}
   * @group {serve}
   */
  gulp.task('watch', function () {
    gulp.watch(conf.scss.watch, ['scss']);
  });

};