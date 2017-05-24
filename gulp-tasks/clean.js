/**
 * REMOVE/CLEAN TASKS
 */
module.exports = function (gulp, $) {
  'use strict';

  gulp.task('clean',            $.del.bind( null, ['www'] ));
  gulp.task('clean:components', $.del.bind( null, ['src/assets/components'] ));
  gulp.task('clean:modules',    $.del.bind( null, ['node_modules'] ));
  gulp.task('clean:build',      $.del.bind( null, ['build'] ));
  gulp.task('clean:all', ['clean', 'clean:components', 'clean:modules', 'clean:build'], null);
};