
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
      .pipe($.plumber())    
      .pipe($.imagemin([
        $.imagemin.jpegtran({ progressive: true }),
        $.imagemin.optipng({ optimizationLevel: 5 }),
        $.imagemin.svgo({
          plugins: [
            { removeViewBox: true },
            { cleanupIDs: false }
          ]
        })
      ], true))
      .pipe(gulp.dest(conf.images.dest))
      .pipe(conf.browserSync.stream());
  });
};