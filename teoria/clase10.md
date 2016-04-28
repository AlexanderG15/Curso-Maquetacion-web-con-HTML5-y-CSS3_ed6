# Clase 10

### Cajas

**Sobras**
```css
  h3 {
  /*
    box-shadow:  none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ] ]#
  */
    box-shadow: 60px -16px teal;
  }
```
- none *Sin sombra*
- inset *Sobra por dentro*
- offset-x y offset-y *Definen el desplazamiento de la sombra. Valores negativos coloan la sombra a la izquierda*
- blur-radius *Por defecto 0. A mayor es el número mayor es la difuminación *
- spread-radius *Por defecto 0. A mayor sea el número más grande es la sombra*
- color *Define el color de la sombra*
- [Ejemplo de W3School](http://www.w3schools.com/cssref/playit.asp?filename=playcss_box-shadow&preval=initial)

### Posición

**Flotabilidad**
```css
  aside {
    float: right;
  }
```
- none *No flota*
- left *Flota a la izquierda*
- right *Flota a la derecha*
- inherit *hereda*
- [Ejemplo de W3School](http://www.w3schools.com/cssref/playit.asp?filename=playcss_float&preval=left)

**Posición**
```css
  aside {
    position: relative;
  }
```
- static *Valor por defecto*
- relative *Dispone todos los elementos como si el elemento no tuviera posición y luego ajusta la posición del elemento sin alterar la disposición (por tanto dejando un vacío donde sebería estar el elemento si no estuviera posicionado).*
- absolute *No deja espacio para el elemento. En su lugar, lo posiciona en unas coordenadas determinadas relativas a la posición más cercana de su elemento padre o del bloque contenedor inicial.* 
- fixed *No deja espacio para el elemento. En su lugar, lo posiciona en unas coordenadas determinadas relativas a la ventana de visualización, que no se mueve al moverse la página.*
- [Ejemplo de W3School](http://www.w3schools.com/cssref/playit.asp?filename=playcss_position&preval=initial)

**Display**
```css
  aside {
    display: none;
  }
```
- none *Este valor desactiva la presentación del elemento (no tiene efecto en el formato); todos los elementos hijo son escondidos de forma incondicional.*
- inline *Los elementos unos al lado de los otros*
- block *Los elementos uno debajo del otro*
- list-item *(para listas) situa unos elementos al lado de los otros.*
- [Ejemplo de W3School](http://www.w3schools.com/cssref/playit.asp?filename=playcss_display&preval=initial)


**Superposición**
```css
  aside {
    z-index: 999;
  }
  p {
    z-index: 78;
  }
```
- (número entero) *Siempre el número mayor se superpondrá a los demás*
- [Ejemplo de W3School](http://www.w3schools.com/cssref/playit.asp?filename=playcss_z-index&preval=initial)


**Excedente**

![CSS_MUG](http://rlv.zcache.com/cheap_css_is_awesome_mug-rf064a31396644e03a71994d72eece75d_x7jgr_8byvr_324.jpg)

Especifica si recortar contenido, dibujar barras de desplazamiento o mostrar el contenido excedente en un elemento a nivel de bloque
```css
  p {
    overflow: scroll;
  }
```
- visible *Valor por defecto, podría salirse del diseño*
- hidden *El contendo es recortado.*
- scroll *El contenido se recorta pero se puede ver usando barras de desplazamiento*
- auto *Varia según el navegador*
- inherit *hereda de un elemento padre*
- [Ejemplo de W3School](http://www.w3schools.com/cssref/playit.asp?filename=playcss_overflow&preval=initial)

**Depejado**
Determian si se veran elementos flotantes adyacentes.

```css
  /*
    clear: none|left|right|both|initial|inherit;
  */
  .clarificador {
    clear: both;
  }
```
- left *no se permiten elementos flotantes a la izquierda*
- right *no se permiten elementos flotantes a la derecha*
- both *No se permiten elementos flotantes a los lados*


### Visibilidad

**Tipo de representación**
```css
  .enLinea {
    display: inline;
  }
```
- none *No se muestra el elemento*
- inline *Hace que el elemento genere uno o más elementos en la misma línea*
- block *Hace que el elemento genere una caja de bloque*
- inline-block *Hace que un elemento se represente como una caja seguida de forma fluida, por un contenido, como si formase parte de la misma caja*
- list-item *Hace que un elemento genere una caja para el contenido del elemento y una caja separada en la misma línea para los elementos de la lista*
- [Ejemplo de W3School](http://www.w3schools.com/cssref/playit.asp?filename=playcss_display&preval=list-item)


**Visibilidad**
```css
  .cosa {
    visibility: hidden;
  }
```
- visible *Se muestra, por defecto*
- hidden *El elemento está escondido, pero los demás elementos se colocan como si ése elemento estuviera presente. Esto funciona como si el elemento fuera absolutamente transparente.*
- [Ejemplo de W3School](http://www.w3schools.com/cssref/playit.asp?filename=playcss_visibility&preval=initial)

**Opacidad**
```css
  .cosa {
    opacity: 0.5;
  }
```
- (número entero) *entre 0.0 y 1.0, el paso es de 0.1*
- [Ejemplo de W3School](http://www.w3schools.com/cssref/playit.asp?filename=playcss_opacity&preval=initial)

### CheatSheets

- [CSS Shorthand Cheat Sheet by Eddie Welker](http://www.eddiewelker.com/wp-content/uploads/2007/09/csscheatsheet.pdf)
- [(Compatibilidad) CSS Properties Index](http://meiert.com/en/indices/css-properties/)

### Ejercicios

**1 -** Crea un menu que permita cambiar dinámicamente el video de fondo.

- [Solución](http://codepen.io/ulisesgascon/pen/KzGWEq)


