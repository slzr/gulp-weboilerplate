
/**
 * WATCH TASKS
 */
module.exports = function (gulp, $, conf) {
  'use strict';

  /**
   * Watch files for changes and execute tasks ['nunjucks', 'scss', 'scripts', 'images', 'fonts', 'bower']
   * @task {watch}
   * @group {Serve}
   */
  gulp.task('watch', function () {
    gulp.watch(conf.pug.watch,        ['pug']);
    gulp.watch(conf.scss.watch,       ['scss']);
    gulp.watch(conf.scripts.watch,    ['scripts']);
    gulp.watch(conf.images.watch,     ['images']);
    gulp.watch(conf.fonts.watch,      ['fonts']);

    gulp.watch(conf.copy.media.watch, ['media']);

    gulp.watch(conf.bower.watch,      ['bower']);
  });

};

// gulp.watch("src/**/*.html").on('change', browserSync.reload);