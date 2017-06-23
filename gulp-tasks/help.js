
/**
 * HELP TASKS
 */
module.exports = function (gulp, $, conf) {
  'use strict';

  gulp.task('help', function() {
    return $.helpDoc(gulp, {
      lineWidth:             120,
      keysColumnWidth:       25,
      emptyLineBetweenTasks: false,
      displayDependencies:   true,
      // logger:                gutil
    });
  });

  gulp.task('default', ['help']);
};