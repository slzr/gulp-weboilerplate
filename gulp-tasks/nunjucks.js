
/**
 * HTML TASKS
 */

var path = require('path');
module.exports = function (gulp, $, conf) {
  'use strict';

  /**
   * Compile nunjucks files => 'html'
   * @task {nunjucks}
   * @group {Compiling}
   */
  gulp.task('nunjucks', function () {
    return gulp.src(conf.nunjucks.src)
      .pipe($.data(function() {
        return require('../src/data.json')
      }))
      .pipe($.debug())
      .pipe($.nunjucks({
        path: conf.nunjucks.templates
      }))
      .pipe(gulp.dest(conf.nunjucks.dest))
      .pipe(conf.browserSync.stream());
  });

};