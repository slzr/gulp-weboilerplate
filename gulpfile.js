'use strict';

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'browser-sync', 'del'],
  rename: {
    'large-name': 'shortName'
  }
});
var tasksPath = './gulp-tasks/';

var taskList = require('fs').readdirSync(tasksPath);
taskList.forEach(function (taskFile) {
  require(tasksPath + taskFile)(gulp, plugins);
});




// var gulp       = require('gulp'), 
//   debug        = require('gulp-debug'),           
//   del          = require('del'),
//   sass         = require('gulp-sass'),
//   browserSync  = require('browser-sync').create(),
//   gutil        = require('gulp-util'),
//   cssnano      = require('gulp-cssnano'),
//   rename       = require('gulp-rename'),
//   sourcemaps   = require('gulp-sourcemaps'),
//   autoprefixer = require('gulp-autoprefixer'),
//   header       = require('gulp-header'),
//   jshint       = require('gulp-jshint'),
//   uglify       = require('gulp-uglify'),
//   bower        = require('main-bower-files'),
  
//   package      = require('./package.json');

// /**
//  * BANNER TEMPLATE 
//  */
// var banner = [
//   '/*!\n' +
//   ' * <%= package.name %>\n' +
//   ' * <%= package.title %>\n' +
//   ' * <%= package.url %>\n' +
//   ' * @author <%= package.author %>\n' +
//   ' * @version <%= package.version %>\n' +
//   ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
//   ' */',
//   '\n'
// ].join('');


// /**
//  * COMPILE SCSS
//  */
// gulp.task('scss', function(){
//   return gulp.src('src/assets/scss/styles.scss')
//     // .pipe(sourcemaps.init())
//     .pipe(sass().on('error', sass.logError))
//     .pipe(autoprefixer({ browsers: ['last 4 version', '> 5%'] }))
//     .pipe(gulp.dest('www/assets/css'))
//     // .pipe(cssnano())
//     // .pipe(rename({ suffix: '.min' }))
//     // .pipe(header(banner, { package : package }))
//     // .pipe(sourcemaps.write())
//     // .pipe(gulp.dest('www/assets/css'))
//     .pipe(browserSync.stream());
// });


// /**
//  * LINT JS
//  */
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


// /**
//  * HTML
//  */
// gulp.task('html', function () {
//   return gulp.src('src/**/*.html')
//     .pipe(gulp.dest('www/'))
//     .pipe(browserSync.stream());        
// });

// //  FONTS
// gulp.task('fonts', function() {
//   return gulp.src('src/assets/fonts/*.*')
//     .pipe(gulp.dest('www/assets/fonts'))
//     .pipe(browserSync.stream());            
// });


// /**
//  * BROWSER SYNC
//  */
// gulp.task('browser-sync', function() {
//   browserSync.init({
//     server: { baseDir: "./www" }  
//   });
// });


// /**
//  * SERVER/DEFAULT TASK
//  */
// gulp.task('serve:www', ['html', 'scss', 'js', 'browser-sync'], function () {
//   gulp.watch("src/assets/scss/**/*.scss", ['scss']);
//   gulp.watch("src/assets/js/*.js", ['js']);
//   gulp.watch("src/*.html", ['html']);
//   gulp.watch("src/assets/components/**.*", ['bower:js']);
// });
// gulp.task('default', ['serve:www']);


// // BOWER

// var overrides = {
//   "bootstrap": {
//     "main": [
//       "dist/css/bootstrap.css",
//       "dist/js/bootstrap.js",
//       "dist/fonts/*.*"
//     ],
//     "dependencies": { "jquery": "^3.2.1" }
//   }
// };
// gulp.task('bower:js', function(){
//   return gulp.src( bower({
//     "overrides": overrides,
//     "filter": "**/*.js"
//   }))
//     .pipe(uglify())  
//     .pipe(rename({ basename: 'vendor', suffix: '.min' }))
//     .pipe(gulp.dest('www/assets/js'))
//     .pipe(browserSync.stream());                
// })
// // BUILD
// // FONTS
// // IMAGES
// // GENERATE SPRITES
// // GENERATE ICONS















// //  COPY ALL EXTRAS FILES
// // gulp.task('extras', function() {
// //   return gulp.src([
// //     'app/*.*',
// //     '!app/*.html'
// //   ], { dot: true })
// //   .pipe(gulp.dest('dist'));
// // });





// //  MINIFY, CONCAT HTML/CSS/JS & BOWER DEPS
// // gulp.task('minicat', ['stylus', 'jade', 'lint'], function() {
// //   var assets = useref.assets();
// //   return gulp.src('app/*.html')
// //     .pipe( assets )
// //     .pipe( gulpif('*.js',  uglify() ))
// //     .pipe( gulpif('*.css', miniCss({ compatibility: '*' }) ))
// //     .pipe( rev() )
// //     .pipe( assets.restore() )
// //     .pipe( useref() )
// //     .pipe( revReplace() )
// //     .pipe( gulpif('*.html', miniHTML({
// //       conditionals: true,
// //       loose: true }) ))
// //     .pipe( gulp.dest('dist') );
// // });
// //  MINIFY, CONCAT HTML/CSS/JS & BOWER DEPS

// //  MINIFY ALL IMAGENES
// // gulp.task('imagemin', function(){
// //   return gulp.src('app/img/**/*')
// //     .pipe( imagemin({
// //       progressive: true,
// //       interlaced: true,
// //       svgoPlugins: [{
// //         removeViewBox: false,
// //         cleanupIDs: false
// //       }],
// //       use: [pngquant()]
// //     }))
// //     .pipe(gulp.dest('dist/img'));
// // });
// //  MINIFY ALL IMAGENES


// // gulp.task('fonts:bower', function(){
// //   return gulp.src( bowerFiles({
// //     filter: '**/*.{eot, svg, ttf, woff, woff2, otf}'
// //   }).concat( components + '/bootstrap/dist/fonts/**.*' ) )
// //     .pipe( gulp.dest('dist/fonts') );
// // });
