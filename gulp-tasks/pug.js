
/**
 * PUG TASKS
 */

var path = require('path');
var fs   = require('fs');
module.exports = function (gulp, $, conf) {
  'use strict';
  
  /**
   * Compile pug files => 'html'
   * @task {pug}
   * @group {Compiling}
   */
  gulp.task('pug', function () {
    return gulp.src(conf.pug.src)
      .pipe($.plumber())
      .pipe($.data(function() {
        return require('../src/data.json')
      }))
      .pipe($.debug())
      .pipe($.pug({ pretty: true }))
      .pipe(gulp.dest(conf.pug.dest))
      .pipe(conf.browserSync.stream());
  });

};