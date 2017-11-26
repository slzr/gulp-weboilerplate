# Web Boilerplate
----------
Proyecto base, seed o boilerplate para proyectos web sencillos tipo landingpages.

Todos:
- [x] Gulp tasks:
  - [x] Sass compile
  - [x] BrowserSync Server
  - [x] Js Lint/Uglify
  - [x] Files concatenation
  - [ ] Bootstrap sass
  - [x] Images minification, svgo
  - [ ] Build tasks
  - [ ] Sprites generation
  - [ ] Iconfonts generation from SGVs
  - [x] Bower components auto includes
  - [ ] Bower images
  - [ ] build fonts 
  - [ ] favicon, apple touch icons generation [32px, 72px, 114px]
- [ ] SCSS files structure [Guidelines](https://sass-guidelin.es/), [Boilerplate](https://github.com/HugoGiraudel/sass-boilerplate)
- [ ] Normalize
- [x] Tasks help


## Desarrollo
Desde consola, teniendo instalado `nodejs` con `npm` y `sass` ejecutas:

- Dependencias Globales:
```sh
$ npm install -g bower gulp-cli
```

- Dependencias del proyecto:
```sh
$ composer install
$ npm install
$ bower install
```

## Gulp Tasks
```sh
> gulp       # Enlista todas las tareas disponibles
> gulp build # Genera/Constuye proyecto [www]
> gulp serve # Servidor 
```