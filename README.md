# Gulp Web Boilerplate

Just another gulp template for web projects.

Includes:

- [x] Gulp tasks:
  - [x] Sass compile
  - [x] BrowserSync Server
  - [x] Js Lint/Uglify
  - [x] Files concatenation
  - [ ] Bootstrap sass
  - [ ] Images minification, svgo
  - [ ] Build tasks
  - [ ] Sprites generation
  - [ ] Iconfonts generation from SGVs
  - [ ] Bower components auto includes
  - [ ] favicon, apple touch icons generation [32px, 72px, 114px]
- [ ] SCSS files structure [Guidelines](https://sass-guidelin.es/), [Boilerplate](https://github.com/HugoGiraudel/sass-boilerplate)
- [ ] Normalize
- [ ] Modernizr
- [ ] Tasks help

## Installation

Desde consola, teniendo instalado nodejs con npm ejecutas:

- Dependencias Globales:

```sh
$ npm install -g bower gulp
```

- Instalar dependencias del proyectos:

```sh
$ npm install
$ bower install
```

## Gulp Tasks

- Servidor LiveReload
> Compila Stylus, Jade, Lint js y abre Explorador Web
```sh
$ gulp serve
```

- Compilar app
> Crear carpeta dist, con todos los archivos minificados y concatenados, imagenes minificadas, fuentes, etc.
```sh
$ gulp build
```