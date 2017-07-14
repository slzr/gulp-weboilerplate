'use strict';

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'browser-sync', 'main-bower-files', 'del'],
  rename: {
    'main-bower-files': 'bower',
    'gulp-nunjucks-render': 'nunjucks'
  }
});
var tasksPath = './gulp-tasks/';
var conf      = require(tasksPath + 'conf');
var help      = require('gulp-help-doc');


/**
 * LOAD ALL TASKS IN 'gulp-tasks' FOLDER
 */
var taskList = require('fs').readdirSync(tasksPath);
taskList.forEach( function(taskFile) {
  if ( typeof(require(tasksPath + taskFile)) == 'function' )
    require(tasksPath + taskFile)(gulp, plugins, conf);
  // else
    // require(tasksPath + taskFile)
});