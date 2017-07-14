
/**
 * IMAGE TASKS
 */
module.exports = function (gulp, $, conf) {
  'use strict';

  /**
   * Minify all images
   * @task {images}
   * @group {Processing}
   */
  gulp.task('images', function () {
    return gulp.src(conf.images.src)
      .pipe(gulp.dest(conf.images.dest))
      .pipe(conf.browserSync.stream());
  });
};