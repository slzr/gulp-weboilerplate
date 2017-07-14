
/**
 * FONTS TASKS
 */
module.exports = function (gulp, $, conf) {
  'use strict';

  /**
   * Copy all project web-fonts
   * @task {fonts}
   * @group {Processing}
   */
  gulp.task('fonts', function () {
    return gulp.src(conf.fonts.src)
    .pipe(gulp.dest(conf.fonts.dest))
    .pipe(conf.browserSync.stream());
  });

};