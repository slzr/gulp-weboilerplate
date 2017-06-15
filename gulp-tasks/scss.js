
/**
 * SCSS TASKS
 */
module.exports = function(gulp, $, conf) {
    'use strict';

    /**
     * Compile SCSS files
     * @task {scss}
     * @group {test}
     */
    gulp.task('scss', function(){
      return gulp.src(conf.scss.src)
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer({ browsers: ['last 4 version', '> 5%'] }))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(conf.scss.dest))
        // .pipe(cssnano())
        // .pipe(rename({ suffix: '.min' }))
        // .pipe(header(banner, { package : package }))
        // .pipe(sourcemaps.write())
        // .pipe(gulp.dest('www/assets/css'))
        // .pipe(browserSync.stream());
        // .pipe(conf.browserSync.stream());
    });
    
};