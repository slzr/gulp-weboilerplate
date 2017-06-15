
/**
 * REMOVE/CLEAN TASKS
 */
module.exports = function(gulp, $, conf) {
    'use strict';

    /**
     * Remove '/www' folder
     * @task {clean}
     * @group {Clean tasks}
     */
    gulp.task('clean', $.del.bind(null, [conf.folders.dest]));

    /**
     * Remove bower '/components' folder
     * @task {clean:components}
     * @group {Clean tasks}
     */
    gulp.task('clean:components', $.del.bind(null, [conf.folders.components]));    
    
    /**
     * Remove npm '/node_modules' folder
     * @task {clean:modules}
     * @group {Clean tasks}
     */
    gulp.task('clean:modules', $.del.bind(null, [conf.folders.modules]));

    /**
     * Remove '/dist' folder
     * @task {clean:build}
     * @group {Clean tasks}
     */
    gulp.task('clean:build', $.del.bind(null, [conf.folders.build]));
    
    /**
     * Remove all removable folders
     * @task {clean:all}
     * @group {Clean tasks}
     */
    gulp.task('clean:all', ['clean', 'clean:components', 'clean:modules', 'clean:build'], null);
};