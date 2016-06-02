# Clase 19

### Geolocalización 

- [Espeficicación](http://dev.w3.org/geo/api/spec-source.html)
- [Compatibildiad](http://caniuse.com/#feat=geolocation)

- Seguridad:
  - Necesario SSL
    - HTTPS
  - Confirmación del usuario

- Precisión:
    - Wi-fi (MAC)
    - Ethernet (IP)
    - Triangulación (3G y 4G)    
    - GPS (máxima precisión, pero tardará más en cargar)

- Métodos de *geolocation*
    - Posición actual
    - Posición recurrente
    - Cancelar la suscripción

- Propiedades de *geolocation*
    - Latitud (en base 10):
    - Longitud (en base 10):
    - Precisión en posicionamiento:
    - Altitud (metros por encima del nivel del mar):
    - Precisión de altitud:
    - Rumbo (Grados respectos al norte):
    - Velocidad (m/s):
    - Timestamp:



### Geolocalización con Jquery Plugins

**jQuery-Geolocation**
```javascript
$('#getPositionButton').on('click', function() {
    $.geolocation.get({win: mostrarPosicion, fail: errorPosicion});
});

function mostrarPosicion(position) {
    $('body').html("Your position is " + position.coords.latitude + ", " + position.coords.longitude);
}

function errorPosicion(error) {
    $('body').html("No location info available. Error code: " + error.code);
}


```
- [Ejemplo](https://www.manuel-bieh.de/publikationen/scripts/jquery/geolocation/)
- [Librería](https://github.com/manuelbieh/jQuery-Geolocation)


### Google Maps con Jquery

**gMap - google maps api with less pain and more fun**

- [Documentación](https://hpneo.github.io/gmaps/documentation.html)
- [Ejemplos](https://hpneo.github.io/gmaps/examples.html)


**maplacejs**

- [Código y ejemplos](http://maplacejs.com/)



### jQuery-Timelinr

Dando vida al tiempo / Giving life to time

![foto](https://camo.githubusercontent.com/1c8b407ee48f3707d6417b7f8557c07c02f6bc9e/687474703a2f2f7777772e6373736c61622e636c2f77702d636f6e74656e742f75706c6f6164732f323031312f30382f53637265656e2d53686f742d323031322d30382d30332d61742d31322e31392e33302d373030783334322e706e67)

```html
	<div id="timeline">
		<ul id="dates">
			<li><a href="#1900">1900</a></li>
			<li><a href="#1930">1930</a></li>
		</ul>
		<ul id="issues">
			<li id="1900">
				<img src="images/1.png" width="256" height="256" />
				<h1>1900</h1>
				<p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
			</li>
			<li id="1930">
				<img src="images/2.png" width="256" height="256" />
				<h1>1930</h1>
				<p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
			</li>
		</ul>
		<div id="grad_left"></div>
		<div id="grad_right"></div>
		<a href="#" id="next">+</a>
		<a href="#" id="prev">-</a>
	</div>
```

```javascript
		$(function(){
			$().timelinr({
				arrowKeys: 'true'
			})
		});
```

- [Código en GitHub](https://github.com/juanbrujo/jQuery-Timelinr)
- [Documentación](http://www.csslab.cl/2011/08/18/jquery-timelinr/)
- En funcionamiento
    - [Horizontal](http://www.csslab.cl/ejemplos/timelinr/latest/horizontal.html)
    - [Autoplay](http://www.csslab.cl/ejemplos/timelinr/latest/autoplay.html)
    - [Vertical](http://www.csslab.cl/ejemplos/timelinr/latest/vertical.html)


### Ejercicios

**1 -** Usaremos el plugin Timelinr para mostrar de una manera diferente la discografía de nuestro cantante.
```html
  <!-- Tu solución -->
```

**2 -** Puedes incluir gmap o maplacejs en tus proyectos                                        
```html
  <!-- Tu solución -->
```