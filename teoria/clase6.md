# Clase 6

### Contenido de terceros

```html
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>Iframes</title>
  </head>
  <body>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.40170663965!2d-3.720401048893044!3d40.422103063134955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288624178bff%3A0xaceb2ce3f952eea!2sFictizia!5e0!3m2!1ses!2ses!4v1460443770809" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  </body>
  </html>
```

- **Etiqueta &lt;iframes&gt;**
```html
      <iframe src="URL">
        <!-- Texto alternativo -->
      </iframe>
```
- **Características:**
  - Podemos traer otras páginas web e insertarlas en las nuestras 
  - Muchos servicios como Youtube, Google Maps, etc... nos facilitan un código de insertación
  - Podemos usar estilos para gestionar como encajará en nuestra web
  - Con HTML5 podemos limitar los iframes usando el atributo *sandbox*
  - El tiempo de cargar se altera
- **Atributos**:
	- height *usaremos css, aunque se puede seguir usando*
	- width *usaremos css, aunque se puede seguir usando*
	- name
	- src
	- allowfullscreen
  - Atributos (Obsoletos):
  	- align - *usaremos css*
  	- frameborder - *usaremos css*
  	- longdesc - *eliminado en HTML5*
  	- marginheight - *usaremos css*
  	- marginwidth - *usaremos css*
  	- scrolling - *usaremos css*
  - Nuevos Atributos (HTML5):
  	- sandbox - *nos permite gestionar las restricciones*
  	- srcdoc - *sobreescribe el contenido del iframe por contenido html nuestro*


### Iframes Avanzado

**Abrir un link en un Iframe**
```html
  <!DOCTYPE html>
  <html>
    <head>
        <meta charset="UTF-8">
        <title>Iframes</title>
        <style>
            iframe {
                width: 600px;
                height: 600px;
            }
        </style>
    </head>
    <body>
      <iframe  src="https://www.youtube.com/embed/jvZ8BcgWnUo" name="iframe_fictizia"></iframe>
      <p><a href="http://www.fictizia.com" target="iframe_fictizia">Fictizia Mola!</a></p>
    </body>
  </html>
```

**Twitter**
```html
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>Iframes con Twitter</title>
      <style>
          #Twitter {
              border: 0; 
              width:130px; 
              height:60px;
          }
      </style>
  </head>
  <body>
      <iframe id="Twitter" src="https://platform.twitter.com/widgets/tweet_button.html?size=l&url=http%3A%2F%2Ffictizia.com&text=Aprendiendo%20sobre%20%23iframes%20con%20%40kom_256%20en%20el%20%23CursoDeMaquetacion%20de%20%40fictiziaescuela">
      </iframe>
  </body>
  </html>
```
- [Documentacion](https://dev.twitter.com/web/tweet-button/parameters)
- [URL Encoder/Decoder](http://meyerweb.com/eric/tools/dencoder/)

**Seguridad con Sandbox**

- Iframe con todas las restricciones
```html
      <iframe sandbox src="URL" >
        <!-- Texto alternativo -->
      </iframe>
```
- Iframe con menos restricciones
```html
      <iframe sandbox="allow-scripts allow-popups allow-forms" src="URL" >
        <!-- Texto alternativo -->
      </iframe>
```
- [Soporte](http://caniuse.com/#feat=iframe-sandbox)
- Valores:
	- (Sin valor) - *Todas las rectricciones activadas*
	- allow-forms - *Permite enviar los datos del formulario*
	- allow-pointer-lock - *Permite el bloqueo de puntero*
	- allow-popups - *Permite popups (window.open(), showModalDialog(), target=”_blank”, etc)*
	- allow-same-origin - *Mantiene el orige, cookies, etc..*
	- allow-scripts - *Permite JavaScript, el disparo automático de eventos, etc..*
	- allow-top-navigation  - *Permite la conexión hacia arriba*

### Ejercicios

1 - Mejora tu restaurante incluyendo un vídeo promocional, el mapa y la opción de compartirlo en las redes sociales usando iframes
```html
    <!-- Tu solución -->
```
  
### Malas Prácticas
 
 - **Framsesets, frames, noframes, etc.. ya NO se usan.**
 - [Ejemplo](https://www.uv.es/jac/guia/frame.htm)
 	- HTML5 termino con ellos
 	- Las alternativas son muchas.

### CSS3

- **[CodePen](http://codepen.io/)**


![codepen_logo](http://www.webstyled.com/wp-content/uploads/2014/08/codepen.jpg) 
- [Populares](http://codepen.io/pens/)
- [Selectos](http://codepen.io/pens/picks/)
- Ejemplos
	- [Animated Chrome logo with explode view](http://codepen.io/Dreamdealer/pen/nAGrf)
	- [Interactive Particle Logo](http://codepen.io/Zaku/pen/EDaun)
	- [Pure CSS3 Mister Jekyll Logo](http://codepen.io/clement006/pen/JuBCt)
	- [Buttons with animated background](http://codepen.io/giana/pen/dMdyaX)
	- [Bootstrap Datepicker Demo](http://codepen.io/hexagoncircle/pen/XdZrKa)
	- [Animated Social Buttons](http://codepen.io/iiCe89/pen/WwMeqj)
	- [Skype Animation with Pure CSS](http://codepen.io/samirc/pen/NNyGqj)
	- [Menu tabs with strikethrough CSS](http://codepen.io/vizavi21/pen/dMdVMK)
	- [CSS Loader 2.0](http://codepen.io/triss90/pen/wGyajM)
	- [Chill the lion](http://codepen.io/Yakudoo/pen/YXxmYR)
	- [Responsive Animated Infographic](http://codepen.io/sdras/pen/JdJgrB)
	- [The Whiskey Process](http://codepen.io/gregkohn/pen/OPeOEO)
	- [Collection of Button Hover Effects](http://codepen.io/davidicus/pen/emgQKJ)
	- [10 stunning hover effects with scss](http://codepen.io/caraujo/pen/LVPzxO)
	- [Gooey Menu](http://codepen.io/lbebber/pen/LELBEo)
	- [Pull Down to Refresh (Paper Plane)](http://codepen.io/suez/pen/oXLroX)
	- [One Page Navigation CSS Menu](http://codepen.io/hrtzt/pen/NPZKRN)

### CSS3 y su compatibilidad

**Problemas de Compatibilidad**
- [The CSS3 Test](http://css3test.com/)

**Reset Universal**
```css
    * {
    	margin: 0;
    	padding: 0;
    }
```
- Problemas de rendimiento
- Anti-patrón

- **Normalize.css**
- [¿Qué es?](http://nicolasgallagher.com/about-normalize-css/)
- Frameworks que lo usan:
	- [Fundation](http://foundation.zurb.com/)
	- [Bootstrap](http://getbootstrap.com/)
	- [Html5-Boilerplate](https://html5boilerplate.com/)

- **[html5shiv.js](https://github.com/aFarkas/html5shiv)**
	- Da soporte a las nuevas etiquetas HTML5 
	- Internet Explorer 6-9, Safari 4.x (and iPhone 3.x), and Firefox 3.x.
- **[Respond.js](https://github.com/scottjehl/Respond)**
	- Da soporte a Media Queries
	- Internet Explorer 6-9, Safari 4.x (and iPhone 3.x), and Firefox 3.x.
- **[Modernizr](https://modernizr.com/)**
	- Detección de funcionaldiades 
- **[FlashCanvas.js](http://flashcanvas.net/)**
	- Soporte en Flash (conversión &lt;canvas&gt;) 


### Ejercicios

**2 -** Crea un documento HTML que incluya usando Iframes 10 ejemplos que te inspiren de codepen. Incluye *Normalize.css*
```html
    <!-- Tu solución -->
```

**3 -** Haz una página típica de una empresa fictícia con imágenes y navegación entre distintos documentos.
- Datos mínimos:
    - Index
    - Quiénes somos
    - Servicios (tabla de precios)
    - Portfolio
    - Contacto
- Trucos/Recursos:
    - [Lorem Ipsum](http://es.lipsum.com/)
    - [Quijote Ipsum](http://www.quijotipsum.com/)
    - [Dynamic Dummy Image Generator](http://dummyimage.com/)
    - [Placeimg](https://placeimg.com/)
```html
    <!-- Tu solución -->
```

**4 -** Adapta el diseño anterior para que funcione en un único documento que use enlaces internos.
```html
    <!-- Tu solución -->
```
