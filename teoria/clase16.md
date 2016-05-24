# Clase 16

### Esquema de URI de datos

```css
  ul.checklist > li.complete { 
    margin-left: 20px; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAA
      ABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeN
      Ge4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC) top left no-repeat; 
  }
```

```html
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABGdBTUEAALGP
  C/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9YGARc5KB0XV+IA
  AAAddEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIFRoZSBHSU1Q72QlbgAAAF1J
  REFUGNO9zL0NglAAxPEfdLTs4BZM4DIO4C7OwQg2JoQ9LE1exdlYvBBeZ7jq
  ch9//q1uH4TLzw4d6+ErXMMcXuHWxId3KOETnnXXV6MJpcq2MLaI97CER3N0
  vr4MkhoXe0rZigAAAABJRU5ErkJggg" alt="Red dot" />
```

- **Ventajas**
  - No se requieren las cabeceras HTTP
  - Aporta ventajas especificas para escenarios muy restringidos

- **Desventajas**
  - No es cacheado
  - El contenido es proporcionamente más grandes (33% - 200%)
  - Algunos navegadores lo limitan a 4kb

- **Ejemplos**
  - [Cursores con data-URI](http://codepen.io/tinvalerio/pen/seamH)

- **Herrramientas**
  - [Conversor de imagen a base64](https://www.base64-image.de/)
  - [Conversor de base64 a imagen](http://codebeautify.org/base64-to-image-converter#)


### Sprites

```html
<body>
  <ul id="navlist">
    <li id="home"><a href="default.asp"></a></li>
    <li id="prev"><a href="css_intro.asp"></a></li>
    <li id="next"><a href="css_syntax.asp"></a></li>
  </ul>
</body>
```

```css
  #navlist {
      position: relative;
  }
  
  #navlist li {
      margin: 0;
      padding: 0;
      list-style: none;
      position: absolute;
      top: 0;
  }
  
  #navlist li, #navlist a {
      height: 44px;
      display: block;
  }
  
  #home {
      left: 0px;
      width: 46px;
      background: url('img_navsprites_hover.gif') 0 0;
  }
  
  #prev {
      left: 63px;
      width: 43px;
      background: url('img_navsprites_hover.gif') -47px 0;
  }
  
  #next {
      left: 129px;
      width: 43px;
      background: url('img_navsprites_hover.gif') -91px 0;
  }
  
  #home a:hover {
      background: url('img_navsprites_hover.gif') 0 -45px;
  }
  
  #prev a:hover {
      background: url('img_navsprites_hover.gif') -47px -45px;
  }
  
  #next a:hover {
      background: url('img_navsprites_hover.gif') -91px -45px;
  }
```
- [Ejemplo funcionando](http://www.w3schools.com/css/tryit.asp?filename=trycss_sprites_hover_nav)
- **Herramientas:**
  - [Sprite Cow](http://www.spritecow.com/)


**Sprites como base de la animación**

- Ejemplos:
  - [Steps Animation](http://codepen.io/simurai/pen/tukwj)
  - [Demo 2: Responsive Sprites Animation](http://codepen.io/SitePoint/pen/zxXrzP)
  - [Animation Cat](http://codepen.io/morulus/pen/NqRRLm)
  - [Monkey Island CSS Animation](http://codepen.io/manz/pen/wBZvoE)
  - [Bernard (The Day of the Tentacle) CSS animation](http://codepen.io/manz/pen/ByEyda)
- Recursos para aprender:
  - [CSS Sprites: What They Are, Why They’re Cool, and How To Use Them - CSS Tricks](https://css-tricks.com/css-sprites/)
  - [Responsive Sprite Animations with ImageMagick and GreenSock - SitePoint](https://www.sitepoint.com/responsive-sprite-animations-imagemagick-greensock/)
  - [Animar personajes con animaciones CSS - Emezeta](http://www.emezeta.com/articulos/animar-personajes-con-animaciones-css)




### Ejercicios

1 - Utiliza un sprite para mostrar la información meteorológica en diversos lugares del mundo.
- Recursos:
  - [Sprite y ejemplo](http://codepen.io/ulisesgascon/pen/LNwgaZ)
  - [Información meteorológica](http://openweathermap.org/)

```html
  <!-- Tu solución -->
```

2 -  Utiliza un sprite para agrupar todos los logos de otras empresas que necesitas citar en tu web.
- Recursos:
  - [Guía](http://sixrevisions.com/css/css-sprites-site-speed/)
  - [Sprite de ejemplo](http://www.seosemanticxhtml.com/common/images/clientele_logos_sprite.jpg)

```html
  <!-- Tu solución -->
```
