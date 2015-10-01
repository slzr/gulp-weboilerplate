# Gulp Web Boilerplate
----------
Plantilla con varias configuraciones de Gulp
Incluye:
- Gulp
- Jade
- Stylus
- Js Lint
- Sprites
- Iconfonts
- LiveReload Server
- Imagemin
- Concat
- Uglify

## Uso
Desde consola, teniendo instalado nodejs con npm ejecutas:

- Dependencias Globales:
```
$ npm install -g bower gulp stylus
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