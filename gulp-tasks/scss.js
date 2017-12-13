
/**
 * SCSS TASKS
 */
module.exports = function(gulp, $, conf) {
    'use strict';

    /**
     * Compile SCSS files => 'css'
     * @task {scss}
     * @group {Compiling}
     */
    gulp.task('scss', function(){
      return gulp.src(conf.scss.src)
        .pipe($.sourcemaps.init())
        .pipe($.plumber())        
        .pipe($.sass())
        // .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer({ browsers: ['last 4 version', '> 5%'] }))
        .pipe($.sourcemaps.write())
        .pipe($.rename('main.css'))       
        .pipe($.plumber.stop()) 
        .pipe(gulp.dest(conf.scss.dest))
        .pipe(conf.browserSync.stream());
    });
    
};