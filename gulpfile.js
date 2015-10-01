var gulp        = require('gulp'), 
    debug       = require('gulp-debug'),           
    del         = require('del'),
    stylus      = require('gulp-stylus'),     
    quills      = require('quills'),
    jade        = require('gulp-jade'),
    cache       = require('gulp-cached'),
    progeny     = require('gulp-progeny'),
    changed     = require('gulp-changed');


//  CLEAN FOLDERS
gulp.task('clean',            del.bind( null, ['dist'] ));
gulp.task('clean:components', del.bind( null, ['app/components'] ));
gulp.task('clean:modules',    del.bind( null, ['node_modules'] ));
gulp.task('clean:all', ['clean', 'clean:components', 'clean:modules'], null);
//  CLEAN FOLDERS


//  COMPILE STYL FILES
gulp.task('stylus', function(){
  gulp.src( 'app/styles/*.styl' )
    .pipe( changed('app/styles', {
      extension:  '.css',
      hasChanged: changed.compareSha1Digest
    }) )
    .pipe( debug({title:'changes'}) )
    .pipe( stylus({ 
      'use':  quills(),
      import: ['quills', 'includes/*.styl']
    }))
    .pipe( gulp.dest('app/styles'))
});
//  COMPILE STYL FILES


//  COMPILE JADE FILES
gulp.task('jade', function() {
  return gulp.src('app/templates/*.jade')
    .pipe( cache('jade'))
    .pipe(progeny({
      extension:      'jade',
      extensionsList: ['jade'],
      directoryEntry: 'includes',
      debug: true
    }))
    .pipe( jade({
      pretty: true
    }) )
    .pipe( debug() )
    .pipe( gulp.dest('app'))
});
//  COMPILE JADE FILES


//  WATCHERs
gulp.task('watch:stylus', ['stylus'], function(){
  gulp.watch('app/styles/**/*.styl', ['stylus']);
});
gulp.task('watch:jade', ['jade'], function(){
  gulp.watch('app/templates/**/*.jade', ['jade']);
});
//  WATCHERs


// DELETE CACHEs
gulp.task('clear:stylus', function(){
  delete cache.caches['stylus'];
});
gulp.task('clear:jade', function(){
  delete cache.caches['jade'];
});
// DELETE CACHEs