

var pkg = require('../package.json');
var conf = module.exports = {};


//  FOLDERS  //
conf.folders = {
  src: './src',
  dest: './www',
  build: './dist',
  components: './src/components',
  modules: './node_modules'
};


//  NUNJUCKS
conf.nunjucks = {
  src: [
    conf.folders.src + '/pages/**/*.{nunjucks,njk}'
  ],
  base: conf.folders.src + '/pages/',
  templates: conf.folders.src + '/templates/',
  dest: conf.folders.dest,
  watch: [
    conf.folders.src + '/pages/**/*.{nunjucks,njk}',
    conf.folders.src + '/templates/**/*.{nunjucks,njk}',
  ],
  filter: '**/*.{nunjucks,njk}'
}
//  NUNJUCKS


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
  filter: '**/*.css'
};
//  SCSS  //


//  SCRIPTS  //
conf.scripts = {
  src: [
    conf.folders.src + '/js/main.js',
  ],
  base: conf.folders.src + '/js/',
  dest: conf.folders.dest + '/js/',
  watch: [
    conf.folders.src + '/js/**/*.js',
  ],
  filter: '**/*.js'
}
//  SCRIPTS  //


//  IMAGES  //
conf.images = {
  src: [
    conf.folders.src + '/images/**/*.{jpg,png,gif,svg}',
  ],
  base: conf.folders.src + '/images/',
  dest: conf.folders.dest + '/images/',
  watch: [
    conf.folders.src + '/images/**/*.{jpg,png,gif,svg}',
  ],
  filter: '**/*.{jpg,png,gif,svg}'
}
//  IMAGES  //


//  COPY  //
conf.copy = {
  media: {
    src: [
      conf.folders.src + '/media/**/*.{mp4,mp3}',
    ],
    base: conf.folders.src + '/media/',
    dest: conf.folders.dest + '/media/',
    watch: [
      conf.folders.src + '/media/**/*.{mp4,mp3}',
    ],
    filter: '**/*.{mp4,mp3}'
  },
  scripts: {
    src: [
      conf.folders.src + '/js/partials/world-va.js'
    ],
    base: conf.folders.src + '/js/',
    dest: conf.folders.dest + '/js/',
    watch: [
      conf.folders.src + '/js/**/*.js',
    ],
    filter: '**/*.js'
  }
}
//  COPY  //

//  FONTS  //
conf.fonts = {
  src: [
    conf.folders.src + '/fonts/**/*',
  ],
  base: conf.folders.src + '/fonts/',
  dest: conf.folders.dest + '/fonts/',
  filter: ['**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff', '**/*.woff2', '**/*.otf']
}
//  FONTS  //


//  BOWER  //
conf.bower = {
  watch: [
    conf.folders.components,
    ' ./bower.json'
  ] ,
  overrides: {
    bootstrap: {
      main: ['./dist/js/bootstrap.js', './dist/css/bootstrap.css', './dist/fonts/*.*']
    },
    vegas: {
      main: ['./dist/vegas.js', './dist/vegas.css',]
    },
    jvectormap: {
      main: ['./jquery-jvectormap.css', './jquery-jvectormap.min.js']
    },
    lightbox2: {
      main: ['./dist/js/lightbox.js', './dist/css/lightbox.css']
    },
    swiper: {
      main: ['./dist/js/swiper.jquery.umd.js', './dist/css/swiper.css']
    }
  }
};
//  BOWER  //


//  BANER  //
conf.banner = {
  full:
    '/*!\n' +
    ' * <%= package.name %> v<%= package.version %>: <%= package.description %>\n' +
    ' * (c) ' + new Date().getFullYear() + ' <%= package.author.name %>\n' +
    ' * <%= package.license %> License\n' +
    ' * <%= package.repository.url %>\n' +
    ' */\n\n',
  min:
    '/*!' +
    ' <%= package.name %> v<%= package.version %>' +
    ' | (c) ' + new Date().getFullYear() + ' <%= package.author.name %>' +
    ' | <%= package.license %> License' +
    ' | <%= package.repository.url %>' +
    ' */\n'
};