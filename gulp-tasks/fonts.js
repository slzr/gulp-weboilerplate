
/**
 * FONTS TASKS
 */
module.exports = function (gulp, $, conf) {
  'use strict';

  /**
   * Lint and package js files
   * @task {fonts}
   * @group {Processing}
   */
  gulp.task('fonts', function () {
    return gulp.src(conf.fonts.src)
    .pipe(gulp.dest(conf.fonts.dest));
  });

};