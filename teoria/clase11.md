#Clase 11

### Media Queries

>  Una media query consiste en un tipo de medio y al menos una consulta que limita las hojas de estilo utilizando características del medio como ancho, alto y color. Se entiende como un módulo CSS3 que permite adaptar la representación del contenido a características del dispositivo. Añadido en CSS3, las media queries dejan que la presentación del contenido se adapte a un rango específico de dispositivos de salida sin tener que cambiar el contenido en sí. - [MDN](https://developer.mozilla.org/es/docs/CSS/Media_queries)


**@media**
```css
@media screen and (min-width: 480px) {
    div {
        color: yellow;
    }
}
```
- Media Types
	- all (todos)
	- print (impresión)
	- screen (pantallas)
	- experimentales:
		- speech (voz)
	- depreciadas:
		- aural (sintetizadores de sonido)
		- braille (braile)
		- embossed (braile)
		- handheld (PDAs, etc...)
		- projection (slides, presentaciones, etc...)
		- tty (teletipos, etc..)
		- tv (televisiones, etc...)

- Media Features
	- width *Ancho del área de visualización*
	- device-width *Ancho visible del dispositivo*
	- min-device-width *Ancho mínimo del área visible del dispositivo*
	- max-device-width *Ancho máximo del área visible del dispositivo*
	- min-width *Ancho mínimo del área de visualización*
	- max-width *Ancho máximo del área de visualización*
	- height *Altura del área de visualización*
	- device-height *Altura visible del dispositivo*
	- min-device-height *Alto mínimo del área visible del dispositivo*
	- max-device-height *Alto máximo del área visible del dispositivo*
	- min-height *Alto mínimo del área de visualización*
	- max-height *Alto máximo del área de visualización*
	- orientation *horientación de la pantall (horizontal o vertical)*
	- aspect-ratio *Relación alto/ancho... 19/9, 4/3....*
	- device-aspect-ratio *Relación alto/ancho de la superficie visible*
	- max-aspect-ratio *Máxima relación alto/ancho*
	- min-aspect-ratio *Mínima relación alto/ancho*
- Operadores Lógicos *and* y *not*
```css
	@media screen and (min-width: 480px) {
	    div {
	        color: yellow;
	    }
	}
```
```css
	@media not screen and (min-width: 480px) {
	    div {
	        color: blue;
	    }
	}
```

**content**
```css
@media screen and (min-width: 480px) {
    div:after {
        color: yellow;
        content: "...";
    }
}
```
- normal *Valor por defecto*
- none *Si hay algún contenido lo elimina*
- string *Agrega un texto*
- open-quote *Quita el inicio del cita*
- close-quote *Agrega el cierre del cita*
- no-open-quote *Quita el inicio del cita*
- no-close-quote *Quita el cierre del cita*
- url(url) *Agrega un contenido multimedia cargado por url*


### [Ejemplo - Resposive concepts with LEGO](http://codepen.io/ulisesgascon/pen/PNyaBm)

### Ejercicios

**1 -** Con que hemos aprendido esta semana sobre CSS3 mejora el diseño del ejercicio de GenBeta:Dev incluyendo sobras, margenes y un fondo solido o imágen. Y además integra todo el contenido en una estructura a dos columnas.
```html
  <!-- Tu solución -->
```
