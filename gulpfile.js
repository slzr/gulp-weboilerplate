var gulp       = require('gulp'), 
  debug        = require('gulp-debug'),           
  del          = require('del'),
  sass         = require('gulp-sass'),
  browserSync = require('browser-sync').create(),
  gutil        = require('gulp-util'),
  cssnano      = require('gulp-cssnano'),
  rename       = require('gulp-rename'),
  sourcemaps   = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  header       = require('gulp-header'),
  jshint       = require('gulp-jshint'),
  uglify       = require('gulp-uglify'),
  package      = require('./package.json');


/**
 * REMOVE/CLEAN TASKS
 */
gulp.task('clean',            del.bind( null, ['www'] ));
gulp.task('clean:components', del.bind( null, ['src/assets/components'] ));
gulp.task('clean:modules',    del.bind( null, ['node_modules'] ));
gulp.task('clean:build',      del.bind( null, ['build'] ));
gulp.task('clean:all', ['clean', 'clean:components', 'clean:modules', 'clean:build'], null);


/**
 * BANNER TEMPLATE 
 */
var banner = [
  '/*!\n' +
  ' * <%= package.name %>\n' +
  ' * <%= package.title %>\n' +
  ' * <%= package.url %>\n' +
  ' * @author <%= package.author %>\n' +
  ' * @version <%= package.version %>\n' +
  ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
  ' */',
  '\n'
].join('');


/**
 * COMPILE SCSS
 */
gulp.task('scss', function(){
  return gulp.src('src/assets/scss/style.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 4 version', '> 5%'] }))
    .pipe(gulp.dest('www/assets/css'))
    // .pipe(cssnano())
    // .pipe(rename({ suffix: '.min' }))
    // .pipe(header(banner, { package : package }))
    // .pipe(sourcemaps.write())
    // .pipe(gulp.dest('www/assets/css'))
    .pipe(browserSync.stream());
});


/**
 * LINT JS
 */
gulp.task('js',function(){
  gulp.src('src/assets/js/scripts.js')
    // .pipe(sourcemaps.init())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    // .pipe(header(banner, { package: package }))
    .pipe(gulp.dest('www/assets/js'))
    // .pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    // .pipe(header(banner, { package : package }))
    // .pipe(rename({ suffix: '.min' }))
    // .pipe(sourcemaps.write())
    // .pipe(gulp.dest('www/assets/js'))
    .pipe(browserSync.stream());    
});


/**
 * HTML PASS
 */
gulp.task('html', function () {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('www/'))
    .pipe(browserSync.stream());        
});



/**
 * BROWSER SYNC
 */
gulp.task('browser-sync', function() {
  browserSync.init({
    server: { baseDir: "./www" }  
  });
});


/**
 * SERVER/DEFAULT TASK
 */
gulp.task('serve', ['html', 'scss', 'js', 'browser-sync'], function () {
  gulp.watch("src/assets/scss/**/*.scss", ['scss']);
  gulp.watch("src/assets/js/*.js", ['js']);
  gulp.watch("src/*.html", ['html']);
});
gulp.task('default', ['serve']);


// BOWER
// BUILD
// FONTS
// IMAGES
// GENERATE SPRITES
// GENERATE ICONS
