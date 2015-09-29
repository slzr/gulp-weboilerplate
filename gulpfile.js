var gulp        = require('gulp'),
    spritesmith = require('gulp.spritesmith'),
    merge       = require('merge-stream');


//  GENERATE SPRITES
gulp.task('sprites', function(){
  var spriteData = gulp.src('app/images/sprites/*.png')
    .pipe(
      spritesmith({
        imgName: 'sprites.png',
        cssName: 'sprites.css'
      })
  );
  var imgStream = spriteData.img
    .pipe( gulp.dest('app/images/') );
  var cssStream = spriteData.css
    .pipe( gulp.dest('app/styles/includes/') );
  return merge(imgStream, cssStream); 
});
//  GENERATE SPRITES


//  WATCHERs
gulp.task('watch:sprites', ['sprites'], function(){
  gulp.watch('app/images/sprites/*.png', ['sprites']);
});
//  WATCHERs