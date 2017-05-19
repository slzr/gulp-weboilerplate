# Gulp Web Boilerplate
Just another gulp template for web projects.

Includes:
- [x] Gulp tasks:
  - [x] Sass compile
  - [x] BrowserSync Server
  - [x] Js Lint/Uglify
  - [x] Files concatenation
  - [ ] Images minification
  - [ ] Sprites generation
  - [ ] Iconfonts generation from SGVs
  - [ ] Bower components auto includes
- [ ] SCSS files structure [Guidelines](https://sass-guidelin.es/), [Boilerplate](https://github.com/HugoGiraudel/sass-boilerplate)
- [ ] Normalize
- [ ] Modernizr

## Installation
Desde consola, teniendo instalado nodejs con npm ejecutas:

- Dependencias Globales:
```
$ npm install -g bower gulp
```

- Instalar dependencias del proyectos:
```
$ npm install 
$ bower install 
```

## Gulp Tasks

- Servidor LiveReload
> Compila Stylus, Jade, Lint js y abre Explorador Web
```
$ gulp serve
```

- Compilar app 
> Crear carpeta dist, con todos los archivos minificados y concatenados, imagenes minificadas, fuentes, etc.
```
$ gulp build
```