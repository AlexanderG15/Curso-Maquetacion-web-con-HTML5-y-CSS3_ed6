# Clase 8

### Ejercicios

**1 -** Basandote en el ejercicio anterior sustituye la tabla por un conjuntos de *párrafos* que contenga todos los colores.

```html
  <!-- Tu solución -->
```


### Librerías de fuentes

- [Cloud Typography](http://www.typography.com/)
- [Typekit](https://typekit.com/)
- [Fontdeck](http://fontdeck.com/)
- [Webtype](http://www.webtype.com/)
- [Fontspring](http://www.fontspring.com/)
- [Typotheque](https://www.typotheque.com/)
- [Fonts.com](http://www.fonts.com/)
- [Google Fonts](http://www.google.com/fonts)
- [Font Squirrel](http://www.fontsquirrel.com/)


### Fuentes de Iconos

**Librerías populares**
- [Glyphicons](http://glyphicons.com/)
- [Foundation Icons](http://zurb.com/playground/foundation-icons)
- [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
- [OpenIconic](https://useiconic.com/open/)
- [Octicons](https://octicons.github.com/)

**Especializados**
- [owfont - symbol font for Open Weather Map API](http://websygen.github.io/owfont/)

**Crear tus fuentes**
- [Iconmoon - Crea tus fuentes](https://icomoon.io/)
  - [Librerías creadas](https://icomoon.io/app/#/select/library)   

### Usar la fuente localmente

**font-face**
```css
	@font-face {
	  font-family: 'miFuente';
	  src: url('../fuentes/miFuente.woff2') format('woff2');
	}
```

- Reglas adicionales como font-stretch, font-style, font-weight deben definirse para variaciones de la fuente.
- [Soporte](http://caniuse.com/#feat=fontface)
  - [EOT - Embedded OpenType fonts](http://caniuse.com/#feat=eot)
  - [WOFF - Web Open Font Format](http://caniuse.com/#feat=woff)
  - [SVG fonts](http://caniuse.com/#feat=svg-fonts)
  - [TTF/OTF - TrueType and OpenType font support](http://caniuse.com/#feat=ttf)
  - [WOFF 2.0 - Web Open Font Format](http://caniuse.com/#feat=woff2)

**font-face (máxima compatibilidad)**
```css
	@font-face {
	  font-family: 'miFuente';
	  src: url('miFuente.eot'); /* IE9 */
	  src: url('miFuente.eot?#ie6') format('embedded-opentype'), /* IE6-IE8 */
	       url('miFuente.woff2') format('woff2'), /* Navegadores muy Modernos */
	       url('miFuente.woff') format('woff'), /* Navegadores Modernos */
	       url('miFuente.ttf')  format('truetype'), /* Safari, Android, iOS */
	       url('miFuente.svg#svgFontName') format('svg'); /* Viejo iOS */
	}

	body {
	  font-family: 'miFuente';
	}
```

**font-face (compatibilidad normal)**
```css
	@font-face {
	  font-family: 'miFuente';
	  src:  url('miFuente.woff2') format('woff2'),
	        url('miFuente.woff') format('woff');
	}

	body {
	  font-family: 'miFuente';
	}
```


### Selectores Avanzados (Relaciones)

- **A E**	
	- *Cualquier elemento E que es un descendiente de un elemento A (que es: un hijo o un hijo de un hijo etc.)*
- **A > E**	
	- *Cualquier elemento E que es un hijo de un elemento A*
- **E:first-child**
	- *Cualquier elemento E que es el primer hijo de su padre*
- **B + E**
	- *Cualquier elemento E que es el siguiente hermano de un elemento B (es decir: el próximo hijo del mismo padre)*
- [En CodePen](http://codepen.io/ulisesgascon/pen/PNadwZ)


### Selectores Avanzados (pseudo-classes)
Asocian estilos a estados determinados de un elemento
- **:link**
	- *Link que no ha sido visitado*
- **:visited**
	- *Link que ha sido visitado*
- **:active**
	- *Link que está siendo activado por el usuario*
- **:hover**
	- *Cuando el usuario coloca el puntero sobre algún elemento*
- **:focus**
	- *Cuando un elemento recibo el foco, o bien por que el usuario lo ha seleccionado mediante el uso del teclado o bien mediante el ratón*
- **:first-child**
	- *Cualquier elemento que sea el primer elemento hijo del elemento padre.*
- **:last-child**
	- *Cuando un elemento recibo el foco, o bien por que el usuario lo ha seleccionado mediante el uso del teclado o bien mediante el ratón*
- **:nth-child**
	- *Selecciona los elementos hermanos dentro del árbol del DOM, que coincidan con la condicion an+b-1, siendo n un numero natural, y teniendo un elemento padre.*
- **:nth-last-child**
	- *A efectos prácticos funciona igual que :nth-child excepto que selecciona los elementos empezando a contar por el final, en lugar de por el principio.*
- **:nth-of-type**
	- *Selecciona, en el árbol del documento, el elemento que tiene an+b-1 hermanos con el mismo nombre de elemento situados antes que él, para un n con valor positivo o cero, y que tiene un elemento padre.*
- **:first-of-type**
	- *Representa el primero de los hermanos de su tipo en la lista de hijos de su elemento padre.*
- **:last-of-type**
	- *Representa el último elemento hermano de un tipo dado en la lista del elemento hijo de su elemento padre.*
- **:empty**
	- *Corresponde a un elemento sin ningún nodo de hijo.*
- **:target**
	- *Representa el elemento único, si existe alguno, con un id coincidente con el identificador de fragmentos de la URI del documento.*
- **:checked**
	- *Representa cualquier radio, checkbox u option cunado son seleccionados*
- **:enabled**
	- *Representa cualquier elemento habilitado. Un elemento está habilitado si puede ser activado ( es decir seleccionado, se puede hacer click en él o acepta que se le introduzca texto) o si accepta el foco.*
- **:disabled**
	- *Representa a cualquier elemento deshabilitado. Un elemento se encuentra deshabilitado si no puede ser activado ( por ejemplo ser selecionado, hacer click en él o aceptar texto de entrada) ni aceptar el foco.*

- [En CodePen](http://codepen.io/ulisesgascon/pen/vGrVVd)



### Selectores Avanzados (Pseudoelementos)
Asiocian estilos a partes concretas de un elemento

- **::after**
	- *Crea un pseudo-elemento que sera el último hijo del elemento seleccionado*
- **::before**
	- *Crea un pseudo-elemento que sera el primer hijo del elemento seleccionado*
- **::first-letter**
	- *Selecciona solo la primera letra del elemento especificado por el selector*
- **::first-line**
	- *Selecciona solo la primera línea del elemento especificado por el selector*
- **::selection**
	- *No estándar*
- [En CodePen](http://codepen.io/ulisesgascon/pen/QNxJLL)


### Selectores Avanzados (Agrupación de selectores)
```css
	h1, h2, h3 {
		color: navy;
	}
```


### Cursores

- [Ejemplo Dinámico](http://www.w3schools.com/cssref/playit.asp?filename=playcss_cursor)


### Ejercicios

**2 -** Con que hemos aprendido hoy sobre CSS3 mejora el diseño del ejercicio de GenBeta:Dev
```html
  <!-- Tu solución -->
```

**3 -** Actualiza el proyecto del restaurante incorporando reglas de estilo usando selectores avanzados.
```html
  <!-- Tu solución -->
```

**4 -** Actualiza el proyecto de la empresa ficticia o portfolio personal incorporando reglas de estilo usando selectores avanzados.
```html
  <!-- Tu solución -->
```

**Extra -** Lectura recomendada para el fin de semana. [Los 30 selectores CSS que debes memorizar de envato-tuts](http://code.tutsplus.com/es/tutorials/the-30-css-selectors-you-must-memorize--net-16048)