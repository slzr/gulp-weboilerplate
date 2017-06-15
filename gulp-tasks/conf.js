

var pkg = require('../package.json');
var conf = module.exports = { };


//  FOLDERS  //
conf.folders = {
  src:       './src',
  dest:       './www',
  build:      './dist',
  components: './src/components',
  modules:    './node_modules'
};


//  SCSS  //
conf.scss = {
  src: [
    conf.folders.src + '/scss/main.scss',
  ],
  base: conf.folders.src + '/scss/',
  dest: conf.folders.dest + '/css/',
  watch: [
    conf.folders.src + '/scss/**/*.scss',
  ],
};