
/**
 * SCRIPTS TASKS
 */
module.exports = function (gulp, $, conf) {
  'use strict';

  /**
   * Lint and package project js files
   * @task {scripts}
   * @group {Processing}
   */
  gulp.task('scripts', function () {
    return gulp.src(conf.scripts.src)
      .pipe($.include())
        .on('error', console.log)
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'))
      // .pipe($.concat('main.js'))
      .pipe(gulp.dest(conf.scripts.dest))
      .pipe(conf.browserSync.stream());
  });

};