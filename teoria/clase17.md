# Clase 17

### Hola JavaScript

![js_widebox](http://www.fictizia.com/assets/styles/styleImgs/wideBox/widebox_js.png)

- **JavaScript**
    > JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.
  
  > Se utiliza principalmente en su forma del lado del cliente (client-side), implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas aunque existe una forma de JavaScript del lado del servidor (Server-side JavaScript o SSJS). Su uso en aplicaciones externas a la web, por ejemplo en documentos PDF, aplicaciones de escritorio (mayoritariamente widgets) es también significativo. [JavaScript Wikiwand](https://www.wikiwand.com/es/JavaScript)
  
 - Características
  - Multiparadigma
  - Imperativo y estructurado
  - Dinámico
  	- Tipado dinámico
  	- Objetual
  	- Evaluación en tiempo de ejecución
  - Funcional
  	- Funciones de primera clase
  - Prototípico	
  	- Prototipos
  	- Funciones constructoras
  - Entorno de ejecución
  - Funciones varídicas	
  - Funciones como métodos
  - Arrays y la definición literal de objetos
  - Expresiones regulares
  
  [ECMA-262](https://www.wikiwand.com/es/ECMAScript)
  - Versiones:
  	- Versión 1 (Junio de 1997)
  	- Versión 2 (Junio de 1998)
  	- Versión 3 (Diciembre de 1999)
  	- Versión 4 (Abandonado)
  	- Versión 5 (Diciembre de 2009)
  	- Versión 5.1 (Diciembre de 2011)
  	- Versión 6 (Junio de 2015)
  	- Versión 7 (En desarrollo)
  
  - Compatibilidad:
  	- [ECMA6](https://kangax.github.io/compat-table/es6/)
  	- [ECMA5](http://kangax.github.io/compat-table/es5/)
  	- [Non-standard](http://kangax.github.io/compat-table/non-standard/)
  	- [HTML5 & CSS3](http://fmbip.com/litmus/)
  	- [Polyfill](https://www.wikiwand.com/en/Polyfill)
  
  - Compiladores
  	- [Coffeescript](http://coffeescript.org/)
  	- [Typescript](http://www.typescriptlang.org/)
  	- [Livescript](http://livescript.net/)
  
  - Librerías
  	- [underscore](http://underscorejs.org/)
  	- [Microjs](http://microjs.com/#)
  	- [Threejs](http://threejs.org/)
  	- [D3.js](http://d3js.org/)
  	- [Modernizr](https://modernizr.com/)
  	- [Lodash](https://lodash.com/)
  	- [mustache.js](https://github.com/janl/mustache.js)
  	- [handlebars.js](http://handlebarsjs.com/)
  	- [Firebase](http://firebase.com/)
  
  - Frameworks (MV*)
  	- [Angular.js](https://angularjs.org/)
  	- [Ember.js](http://emberjs.com/)
  	- [Backbone.js](http://backbonejs.org/)
  	- [KnockOut.js](http://knockoutjs.com/)
  	- [React](http://facebook.github.io/react/)
  	- [Meteor](https://www.meteor.com/)



### [El largo camino del desarrollador web](https://coggle.it/diagram/52e97f8c5a143de239005d1b/56212c4e4c505e0045c0d3bda59b77e5977c2c9bd40f3fd0b451bdcf8da4aa52)


### JQuery

![jquery_logo](http://www.fictizia.com/assets/styles/styleImgs/wideBox/wideImg_programacion_con_jquery_para_maquetadores_web.jpg)

> jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.

- **Otros Proyectos:**
  - [JQuery UI](https://jqueryui.com/) 
  - [QUnit](http://qunitjs.com/)

- **Plugins:**
  - [timeago](http://timeago.yarp.com/)
  - [fakeLoader](http://joaopereirawd.github.io/fakeLoader.js/)
  - [gridder](http://www.oriongunning.com/demo/gridder/)
  - [Gridster](http://gridster.net/)
  - [Tabular](http://www.seanmccambridge.com/tubular/)
  - [iPicture](http://ipicture-square.justmybit.com/)
  - [gMaps](http://hpneo.github.io/gmaps/examples.html)
  - [Timelinr](https://github.com/juanbrujo/jQuery-Timelinr)


- **Versiones**
  - 1.x
    - Soporte garantizado para Internet Explorer 6, 7 y 8... además del resto. 
    - [Versión de Producción](https://code.jquery.com/jquery-1.12.4.min.js) 
    - [Versión desarrollo](https://code.jquery.com/jquery-1.12.4.js) 
  - 2.x
    - Es igual que 1.x pero sin soporte a IE 6, 7 y 8.
    - [Versión de Producción](https://code.jquery.com/jquery-2.2.4.min.js) 
    - [Versión desarrollo](https://code.jquery.com/jquery-2.2.4.js) 
  - [Migraciones de versiones más antiguas](https://jquery.com/upgrade-guide/1.9/)

- **CDNs**
  - [Jquery con Cdnjs](https://cdnjs.com/libraries/jquery/) 


- **Primeros Pasos**
```html
<body>
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
    <script>
      $( document ).ready(function() {
           $("body").click(function() {
               alert("Thanks for visiting!");
           });
      });
    </script>
</body
```

### JQuery: Capturando Eventos con *.click()*

```javascript
$("#hide").click(function(){
    $("p").hide();
});

$("#show").click(function(){
    $("p").show();
});
```
- Dispara una función cuando el usuario pincha en un elemento/s especifico/s
- [Ejemplo](http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_show)
- [Difference between .on('click') vs .click()](http://stackoverflow.com/questions/9122078/difference-between-onclick-vs-click)
- [Documentación - .click() en Jquery](https://api.jquery.com/click/)
  - Captura la acción del usuario y dispara una función 
- [Documentación - .hide() en Jquery](https://api.jquery.com/hide/)
  - Oculta el elemento seleccionado   
- [Documentación - .show() en Jquery](https://api.jquery.com/show/)
  - Muestra el elemento seleccionado


### JQuery: Aparecer/Desaparecer con estilo *fadeIn()* y *FadeOut()*

**FadeIn()**
```javascript
  $("button").click(function(){
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
  });
```
- [Ejemplo](http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadein)
- Muestra los elementos seleccionados de manera gradual usando la opacidad
- [Documentación - .fadeIn() en Jquery](https://api.jquery.com/fadeIn/)
 

**FadeOut()**
```javascript
  $("button").click(function(){
      $("#div1").fadeOut();
      $("#div2").fadeOut("slow");
      $("#div3").fadeOut(3000);
  });
```
- Desvanece los elementos seleccionados de manera gradual usando la transparencia
- [Ejemplo](http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadeout)
- [Documentación - .fadeOut() en Jquery](https://api.jquery.com/fadeOut/)

### Jquery: Cambiando clases dinámicamente *.addClass()* y *.removeClass()*

```javascript
  $("button").click(function(){
      $("h1, h2, p").addClass("blue");
      $("div").addClass("important");
  });
```
- Añade las clases que queramos de los elementos seleccionados
- [Ejemplo](http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_addclass2)
- [Documentación - .addClass() en Jquery](https://api.jquery.com/addClass/)

```javascript
  $("button").click(function(){
      $("h1, h2, p").removeClass("blue");
  });
```
- Elimina las clases que queramos de los elementos Seleccionados
- [Ejemplo](http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_removeclass)
- [Documentación - .removeClass() en Jquery](https://api.jquery.com/removeClass/)

### Jquery: Usando nuestro primer plugin

**[TimeAgo](http://timeago.yarp.com/)**

- Debemos incluir la librería
```html
<script src="https://code.jquery.com/jquery-2.2.4.min.js" type="text/javascript"></script>
<script src="http://timeago.yarp.com/jquery.timeago.js" type="text/javascript"></script>
```

- Estructura del HTML
```html
<time class="timeago" datetime="2008-07-17T09:24:17Z">July 17, 2008</time>
```

- Estructura mínima de nuestro Script
```javascript
jQuery(document).ready(function() {
  jQuery("time.timeago").timeago();
});
```
- Efecto esperado
```html
<time class="timeago" datetime="2008-07-17T09:24:17Z" title="July 17, 2008">8 years ago</time>
```

- Avanzado
    - [Soporte para español](https://github.com/rmm5t/jquery-timeago/tree/master/locales)
    - [ISO 8601](https://www.wikiwand.com/en/ISO_8601)

### Ejercicios

**1 - Proyecto para el finde.** Realizar los estilos de la aplicación de terremotos e incluir funcionalidad adiccional.
- Retos:
    - Usar botones para filtrar los tipos de terremotos basandonos en la [Escala sismológica de Richter](https://www.wikiwand.com/es/Escala_sismol%C3%B3gica_de_Richter)
        - Significativos -> Mayores de 7 puntos
        - M4.5+ -> Mayores de 4.5
        - M2.5+ -> Mayores de 2.5
        - M1.0+ -> Mayores de 1.0
        - Todos -> Todos
All Earthquakes
    - Incluir Timeago para mostrar las fechas de una manera más amigable
- [Fuente de datos](http://earthquake.usgs.gov/earthquakes/feed/)
- [JSON con datos](http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson)
- Información disponible de todo terremoto:   
```
  -- Información General --
  total: 2
  status: 200
  hora: 17/5/2016 15:45:55

  -- Información Especifica --
  Título: M 0.6 - 7km NW of The Geysers, California
  Hora: 17/5/2016 15:25:48
  Magnitud: 0.56
  Lugar: 7km NW of The Geysers, California
  Tipo: earthquake
  Coordenadas: -122.8199997 , 38.8168335
  -URL: Google Maps
  -URL: Detalles en USGS
```

```html
  <!-- Tu solución -->
```

