
/**
 * BOWER TASKS
 */
module.exports = function (gulp, $, conf) {
  'use strict';

  gulp.task("bower:css", function () {
    return gulp.src($.bower({
      "overrides": conf.bower.overrides,
      filter: conf.scss.filter
    }))
      .pipe($.debug())
      .pipe($.cleanCss())
      .pipe($.concat('vendor.min.css'))
      .pipe(gulp.dest(conf.scss.dest));
  });

  gulp.task("bower:js", function () {
    return gulp.src($.bower({
      "overrides": conf.bower.overrides,
      filter: conf.scripts.filter
    }))
      .pipe($.debug())
      .pipe($.uglify())
      .pipe($.optimizeJs())
      .pipe($.concat('vendor.min.js'))
      .pipe(gulp.dest(conf.scripts.dest));
  })

  gulp.task('bower:fonts', function () {
    return gulp.src($.bower({
      "overrides": conf.bower.overrides,
      filter: ['**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff', '**/*.woff2', '**/*.otf']
    }))
      .pipe($.debug())
      .pipe(gulp.dest(conf.fonts.dest));
  });

  /**
   * 
   * @task {bower}
   * @group {serve}
   */
  gulp.task('bower', $.sequence('bower:css', 'bower:js', 'bower:fonts'));
}