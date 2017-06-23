
/**
 * HTML TASKS
 */
module.exports = function (gulp, $, conf) {
  'use strict';

  /**
   * Compile nunjucks files into html
   * @task {nunjucks}
   * @group {Processing}
   */
  gulp.task('nunjucks', function () {
    return gulp.src('./src/pages/**/*.{html,nunjucks,njk}')
      .pipe($.debug())
      .pipe($.nunjucks({
        path: ['./src/templates']
      }))
      .pipe(gulp.dest('./www/'))
  });

};