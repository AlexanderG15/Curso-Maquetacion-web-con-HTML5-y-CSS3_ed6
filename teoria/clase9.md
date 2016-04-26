# Clase 9

### Textos

**Gestión del espacio en blanco**
```css
  h3 { 
    white-space: nowrap;
  }
```
- nomal *Varios espacios seguidos se tratan como uno y se automatiza el salto de línea*
- nowrap *Varios espacios seguidos se tratan como uno y NO se automatiza el salto de línea*
- pre *Los multiples espacios serán respetados y NO se automatiza el salto de línea*
- pre-wrap *Los multiples espacios serán respetados y se automatiza el salto de línea*


**Sombreado**
```css
  h3 { 
    text-shadow: -1px 3px 6px #000;
  }
```
- Horizontal *Posición respecto al eje*
- Vertical *Posición respecto al eje*
- Difuminado *A mayor tamaño más suave*
- Color *Define el color (opcional)*
- [Soporte (IE11+)](http://caniuse.com/#feat=css-textshadow)


### Listas

**Marcadores en listas**
```css
ol {
  list-style-type: square;
}
```
- disc *Marcador disco*
- decimal *Marcador decimal (1, 2, 3, 4...)*
- circle *Marcador circular*
- decimal-leading-zero *Marcador decimal con cero a la izquierda (01, 02, 03, 04...)*
- lower-latin *Marcador letra en minúsculas (a, b, c, d...)**
- lower-roman *Marcador romano en minúsculas (i, ii, iii, iv...)*
- square *Marcador cuadrado*
- upper-latin *Marcador letra en mayusculas (A, B, C, D...)**
- upper-roman *Marcador romano en mayusculas (I, II, II, IV...)*
- none *Ningún marcador*

**Marcadores en listas: URL**
```css
ul {
  list-style-image: url(decoraciones.png);
}
```
- url() *url*
- none *sin url*

**Posición del marcador respecto al contenido**
```css
ol {
  list-style-position: outside;
}
```
- outside *Marcador fuera de la caja, valor por defecto*
- inside *Marcador dentro de la caja*

**Marcadores en listas: Simplificado**
```css
ul {
  list-style: url(decoraciones.png), outside;
}
```
- Orden:
  - *list-style-type*, *list-style-position*, *list-style-image*

### Tablas

**Unificar bordes**
```css
ul {
  border-collapse: collapse;
}
```
- separate *Valor por defecto. Borde doble (separado)*
- collapse *Borde simple (unificado)*

**posicionamiento del título**
```css
ul {
  caption-side: bottom;
}
```
- top *Valor por defecto. Arriba de la tabla*
- bottom *Debajo de la tabla*

### Cajas

![modelo_caja](http://www.tutosytips.com/wp-content/uploads/2014/08/modelo-de-caja-css.png)

**Borde: Estilo**
```css
div {
  border-style:dashed;
}
```
- none *Por defecto. Ninguno*
- dotted *Borde punteado*
- dashed *Borde con líneas intermitentes*
- solid *Borde sólido*
- double *Borde doble línea sólida*

**Borde: Ancho**
```css
div {
  border-width:2px;
}
```
**Borde: Color**
```css
div {
  border-color: red;
}
```

**Borde: Individual**
```css
div {
  border-top-width: 3px;
  border-top-style: dotted;
  border-top-color: #A31;
}
```
- border-top-x *Borde superior*
- border-bottom-x *Borde inferior*
- border-right-x *Borde derecho*
- border-left-x *Borde Izquierdo*

**Borde: Simplificado**
```css
div {
  border: 2px dotted red;
}
#individual {
  border-top: 2px #21D;
}
```
- Orden: *border-width*, *border-style*, *border-color*

**Margen Exterior**
```css
  div {
    margin: 20px;
  }
  article {
    margin: 2px, 4px, 10px, 5px;
  }
  body {
    margin: 4px, 10px;
  }
```
- 1 valor *Aplicamos la misma regla a todos los lados*
- 2 valores *Aplicamos el primer valor al alto (arriba-abajo) y el segundo al ancho (derecha-izquierda)*
- 4 valores *Aplicamos cada valor a cada lado en un orden concreto (arriba, derecha, abajo, izquierda)*


**Margen Exterior: Individuales**
```css
  div {
    margin-top: 14px;
  }
  article {
    margin-left: 200px;
  }
```
- margin-top *Borde superior*
- margin-bottom *Borde inferior*
- margin-right *Borde derecho*
- margin-left *Borde Izquierdo*


**Margen Interior**
```css
  div {
    padding: 20px;
  }
  article {
    padding: 2px, 4px, 10px, 5px;
  }
  body {
    padding: 4px, 10px;
  }
```
- 1 valor *Aplicamos la misma regla a todos los lados*
- 2 valores *Aplicamos el primer valor al alto (arriba-abajo) y el segundo al ancho (derecha-izquierda)*
- 4 valores *Aplicamos cada valor a cada lado en un orden concreto (arriba, derecha, abajo, izquierda)*


**Margen Interior: Individuales**
```css
  div {
    padding-top: 14px;
  }
  article {
    padding-left: 200px;
  }
```
- padding-top *Borde superior*
- padding-bottom *Borde inferior*
- padding-right *Borde derecho*
- padding-left *Borde Izquierdo*


**Dimensiones: Alto y Ancho (fijo)**
```css
  div {
    height: 600px;
    width: 400px;
  }
```
- height *Alto*
- width *Ancho*
- Nota:
  - Se pueden trabajar en múltiples medidas (px, %, cm...)
  - Además podemos usar el valor por defecto, *auto*

**Dimensiones: Alto y Ancho (relativo)**
```css
  div {
    max-height: 600px;
    max-width: 400px;
    min-height: 560px;
    min-width: 300px;
  }
```
- max-height *Alto máximo*
- max-width *Ancho máximo*
- min-height *Alto mínimo*
- min-width *Ancho mínimo*
- Nota:
  - Se pueden trabajar en múltiples medidas (px, %, cm...)
  - Además podemos usar el valor por defecto, *auto*



**Dimensiones: redimensión por el usuario**
```css
  div {
    resize: vertical;
  }
```
- none *Por defecto*
- both *Ancho y alto*
- horizontal *valor horizontal*
- vertical *valor vertical*


**Box-Sizing: Modificando los cálculos**

![box](http://www.tutosytips.com/wp-content/uploads/2014/08/calculo-modelo-de-caja-CSS.png)

```css
  div {
    box-sizing: inherit;
  }
```
- content-box *Por defecto. Ancho y alto solo define el contenido*
- padding-box *Incluyen el contenido y el padding pero no el borde ni el margen*
- border-box *Incluye contenido, padding y border pero no margin* 
- inherit *hereda de un elemento padre*


![box_2](http://www.tutosytips.com/wp-content/uploads/2014/08/box-sizing-border-box.png)

- [Más info](http://www.tutosytips.com/entendiendo-la-propiedad-box-sizing-de-css3/)


### Ejercicios

- Crrea un diseño atractivo para el [html de CSSGarden](http://www.csszengarden.com/examples/index) con lo aprendido hasta ahora.
- [Inspiración](http://www.mezzoblue.com/zengarden/alldesigns/)

```html
  <!-- Tu solución -->
```