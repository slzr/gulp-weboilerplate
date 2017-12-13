
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

  /**
   * Minify all images using Imagemin and overwrite it in src
   * @task {imagemin}
   * @group {Processing}
   */
  gulp.task('imagemin', function () {
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
    .pipe($.plumber.stop())     
    .pipe(gulp.dest(conf.images.base))
  });

   /**
   * Minify all images using TinyPNG and overwrite it in src
   * @task {tiny}
   * @group {Processing}
   */
  gulp.task('tiny', function () {
    gulp.src(conf.images.tiny)
    .pipe($.plumber())        
    .pipe($.tinypng({
        key:     conf.env.TINY_KEY,
        sigFile: conf.images.base + '.tinypng-sigs',
        log:     true
    }))
    .pipe($.plumber.stop())         
    .pipe(gulp.dest(conf.images.base));
  });
};