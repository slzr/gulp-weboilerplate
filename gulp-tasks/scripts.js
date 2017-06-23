
/**
 * SCRIPTS TASKS
 */
module.exports = function (gulp, $, conf) {
  'use strict';

  /**
   * Lint and package js files
   * @task {scripts}
   * @group {Processing}
   */
  gulp.task('scripts', function () {
    return gulp.src(conf.scripts.src)
      .pipe($.include())
        .on('error', console.log)
      // .pipe($.jshint())
      // .pipe($.jshint.reporter('jshint-stylish'))
      // .pipe(concat('main.js'))
      // .pipe($.rename('main.js'))
      .pipe(gulp.dest(conf.scripts.dest));
  });

};