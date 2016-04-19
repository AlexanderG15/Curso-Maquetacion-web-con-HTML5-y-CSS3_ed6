# Clase 7

**Herramientas**

[Validación](https://jigsaw.w3.org/css-validator/)

**Inclusión de estilos**
- Vinculación externa
```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title></title>
      <link rel="stylesheet" href="/style/style.css" type="text/css"> 
    </head>
    <body>
    </body>
  </html>
```
- Declaración interna
```html
      <!-- ... -->
      <head>
            <title>Título</title>
            <style>
                  /*
                        Mis estilos
                  */
            </style>
      </head>
      <!-- ... -->      
```
- En línea
```html
      <p style="color:red">hola!</p>    
```
**Declaración de estilos:**
```css
      selector {
        propiedad: valor;
      }
```
- Partes de la regla:
  - Selector *determina que elementos se veran afectados por la regla*
  - Propiedad *determina que parte del elemento se vera afectada*
  - Valor *cual será el valor de la nueva regla. Puede ser palabra reservada o una medida*

**Comentarios:**
```css
      /*
            Mi comentario...
      */
      
      /* Otro comentario */      
```

**Selectores:**
```html
      <div class="textos">
      <p id="texto"> Hola </p>
      </div>
```
- Etiquetas:
```css
      div {
        color: red;
      }
```
- Clases:
```css
      .textos {
        color: red;
      }
```
- IDs:
```css
      #texto {
        color: red;
      }
```



**Nombres validos:**

- No Validos
```html
  <div id="con espacios"></div>
  <div id="1columna"></div>
```

- Válidos:
```html
  <div id="con_guiones_bajos"></div>
  <div id="dame$"></div>
  <div id="otraOpcion"></div>
  <div id="opcionCon123123"></div>
```


**Unidades de medida**
- Absolutas:
      - in *Inches, pulgadas... 1 pulgada = 2,54cm*
      - cm *centímetros*
      - mm *milímetros*
      - pt *punto. 1pt = 1in/72 = 4.23mm*
      - pc *picas. 1pica = 12pt*
- Relativas:
      - em *relativa al tamaño de la letra 1em = M*
      - ex *relativa al tamaño de la x minúcula 1ex = x*
      - px *relativa a la resolución de la pantalla*
      - % *relativa al elemento padre (herencia)*
- Claves:
      - Las medidas absolutas no son flexibles.
      - Preferimos usar medidas relativas
      - Mezclamos unidades realtivas
      - Un enfoque moderno:
            - % y px para layout
            - em y % para los textos

**Colores**
- [Herramientas](http://www.colorzilla.com/)
- Palabras Clave:
      - aqua (#0000ff)
      - black (#000000)
      - blue (#0000ff)
      - fuchsia (#ff00ff)
      - gray (#808080)
      - green (#008000)
      - lime (#00ff00)
      - maroon (#800000)
      - navy (#000080)
      - olive (#808000)
      - orange (#ffA500)
      - purple (#800080)
      - red (#ff0000)
      - silver (#c0c0c0)
      - teal (#008080)
      - white (#ffffff)
      - yellow (#ffff00)
- RGB Decimal:
      - R (rojo), G (Verde), B (Azul)
      - rgb(176, 9, 123)
      - valores entre 0 y 255
- RGB Porcentual:
      - rgb (90%, 10%, 3%)
      - valores entre 0% y 100%
- RGB Hexadecimal:
      - Conversión (0-9 y de (A-F))
      - Es el más usado
- RGB Hexadecimal (Abreviado):
      - Blanco (#fff) -> #ffffff
      - Negro (#000) -> #000000
      - Púrpura (#A0F) -> #AA00FF
      - Azul (#369) -> #336699
- RGBA (Nuevo en css3)
      - Al clásico *rgb()* le añade la opacidad
      - rgba(198, 23, 0, 0.5)      
      - valores entre 0 y 1
      - [Soporte IE8+ ](http://caniuse.com/#feat=css3-colors)
- HSL (*Hue Saturation Luminance*, nuevo en css3)
      - Define tonalidad, saturación y luminosidad
      - La tonaldiad es la rueda cromática en grados (rojo 0°, amarillo 60°, etc...)
      - Saturación y luminosidad se miden en %
      - *hsl(240, 90%, 14%)*
      - [Soporte IE8+ ](http://caniuse.com/#feat=css3-colors)
- HSLA (Nuevo en css3)
      - Al *hsl()* le añade la opacidad 
      - valores entre 0 y 1
      - *hsla(240, 90%, 14%, 0.5)*
      - [Soporte IE8+ ](http://caniuse.com/#feat=css3-colors) 

**Importar CSS**
- Opción CSS:
```css
  /* @import url lista-de-media-queries; */
  @import url(https://fonts.googleapis.com/css?family=Oswald);
```
- Opción HTML:
```html
  <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
```

**Concepto Cascada**
- Orden de carga:
    - 1 - Estilos propios del navegador
    - 2 - Hojas de estilo externas
    - 3 - Hojas de estilo internas
    - 4 - Hojas de estilo en línea
- Modificadores
    - *!important*

**Herencia:**
![img](http://archive.oreilly.com/oreillyschool/courses/htmlcss/html5/images/css_inherit1.png)
- De padres a hijos 


**Colisiones**
```css
p { color: red; }
p#identificador { color: green; }
* { color: blue; }
```
```html
<p id="identificador">color...</p>
```
- [en CodePen](http://codepen.io/ulisesgascon/pen/BKVzXz)
- Cuanto más específico... más importante

### Tipografía
**Tipo de letra**
- Es necesario que el usuario cuente con las fuentes
- Se pueden incluir multiples opciones
- Si la fuente se compone de varias palabras es necesario usar "las comillas"
- Podemos definir la fuente (o varias)
```css
  p { 
    font-family: Arial, Helvetica, "Courrier New", "Lucida Console";
  }
```
- Podemos definir la familia
```css
  p { 
    font-family: serif;
  }
```
- serif *Times New Roman, Bodoni, etc...*
- sans-serif *Arial, Verdana, Helvetica, etc...*
- cursive *tipo manuscrita como Script, etc...*
- fantasy *tipo decorativas como Windings*
- monospace *tipo terminal como Courrier, Courrire New, etc....*

**Cursiva**
```css
  p { 
    font-style: italic;
  }
  .oblicuo { 
    font-style: oblique;
  }
```
- [En CodePen](http://codepen.io/ulisesgascon/pen/ZWRpzx)
- italic *Se utiliza la fuente en versión cursiva*
- oblique *El navegador realiza una inclinación de la fuente*

**Mayúsculas versales**
```css
  h3 { 
    font-varient: small-caps;
  }
```
- Se hace en mayúsculas pero en pequeño

**Negrita**
```css
  h3 { 
    font-weight: bold;
  }
```
- bold *negrita*
- bolder o lighter *más acentuado o menos que el valor de la negrita en el elemnto padre*
- 100 - 900 *Valores numéricos para determinar el grosor de la fuente (500 - normal, 700 negrita, etc...)*
  - Es necesario tener el grosor disponible

**Tamaño de letra**
```css
  h3 { 
    /*valor por defecto*/
    font-size: medium;
  }
```
- valor en pt
- valor en px
- valor en em
- valor en %
- xx-small, x-small, small, medium, large, x-large, xx-large *respecto al elemento padre*

**Sintaxis abreviada**
```css
  h3 { 
    font: italic bold 12px Arial;
  }
```
- podemos agrupar sin tener que mantener un orden específico


**Color**
```css
  body { 
    color: red;
  }
```
- Define el color de la letra, podemos usar todas las opciones de color

**Decorando...**
```css
  p {
    /*Valor por defecto*/
    text-decoration: none;
  }
```
- [En CodePen](http://codepen.io/ulisesgascon/pen/VadPaG)
- underline *línea por debajo*
- overline *línea por encima*
- line-through *efecto tachado*
- none *nada*


**Transformación**
```css
  p {
    /*Valor por defecto*/
    text-transform: none;
  }
```
- [En CodePen](http://codepen.io/ulisesgascon/pen/GZGNJO)
- capitalize *Primera letra de cada palabra en mayúscula*
- uppercase *Todo a mayúsculas*
- lowercase *Todo a minúsculas*
- none *dejar el texto como esta*


**Indentación**
```css
  p {
    text-indent: 10px;
  }
```
- [En CodePen](http://codepen.io/ulisesgascon/pen/PNabPQ)
- Soluciona malas prácticas como (&nbsp ;)


**Espacio**
- Entre letras
```css
  p {
    /*normal por defecto*/
    text-spacing: 10px;
  }
```
- Entre palabras
```css
  p {
    /*normal por defecto*/
    word-spacing: 10px;
  }
```
- [En CodePen](http://codepen.io/ulisesgascon/pen/RaJorZ)

**Interlineado**
```css
  p {
    /*normal por defecto*/
    line-height: 10px;
  }
```
- [En CodePen](http://codepen.io/ulisesgascon/pen/WwyoGY)
- valores como 2, 200% duplican el espacio... valores negativos lo reducen


**Alineación Horizontal**
```css
  p {
    /*auto por defecto*/
    text-align: justify;
  }
```
- [En CodePen](http://codepen.io/ulisesgascon/pen/NNzbKB)
- Acaba con muchas malas prácticas
- left *Izquierdo*
- right *Derecho*
- center *Centrado*
- justify *Justificado*
- auto *Por defecto*

**Alineación Vertical**
```css
  p {
    /*baseline por defecto*/
    vertical-align: super;
  }
```
- [En CodePen](http://codepen.io/ulisesgascon/pen/KzeNWY)
- Acaba con muchas malas prácticas
- baseline *valor por defecto*
- sub *Subíndice respecto a la línea base*
- super *Superíndice respecto a la línea base*
- top *Alineado en la parte superior del elemento padre*
- text-top *Alineado en el elemento más alto del elemento padre*
- middle *Alineado en la mitad del elemento padre* 
- bottom *Alineado en la base del elemento padre*
- text-bottom *Alineado en el elemento más bajo del elemento padre*
- % y px *Por encima o por debajo de la línea base*

**Ancho y alto**
```css
  p {
    /*auto por defecto*/
    height: 100%;
    width: 200px;
  }
```
Determinan el espacio que ocupa el elemento


### Fondos (Background)

**Color**
```css
  body {
    background-color: #fff;
  }
```
- [En CodePen](http://codepen.io/ulisesgascon/pen/aNKBEm)
- Se pueden usar los mismo colores que en el resto

**imagen de fondo**
```css
  body {
    background-image: url(Archivo/Web);
  }
```
- [En CodePen](http://codepen.io/ulisesgascon/pen/aNKBYB)
- Entensiones soportadas: .gif, .jpeg, .png
- [Soporte .svg](http://caniuse.com/#feat=svg-css)
- none *valor por defecto*

**imagen de fondo (repetición)**
```css
  body {
    /*no-repeat por defecto*/
    background-image: url(Archivo/Web);
    background-repeat: repeat; 
  }
```
- [En CodePen](http://codepen.io/ulisesgascon/pen/bpKBKZ)
- repeat *Repite en todos los ejes*
- repeat-x *Repite en el eje horizontal*
- repeat-y *Repite en el eje vertical*
- no-repeat *No repite*

**imagen de fondo (posición)**
```css
  body {
    /*no-repeat por defecto*/
    background-image: url(Archivo/Web);
    background-repeat: no-repeat;
    background-position: center center
  }
```
- [En CodePen](http://codepen.io/ulisesgascon/pen/KzeNxP)
- valor horizontal (x) y valor vertical (y)
- único valor se duplicará
- posición vertical con palabras: top, bottom, center
- posción horizontal con palabras: right, center, left
- % y px también son validos

**imagen de fondo (fijación)**
```css
  body {
    /*no-repeat por defecto*/
    background-image: url(Archivo/Web);
    background-repeat: no-repeat;
    background-position: center center
    background-attachment: scroll;
  }
```
- [En CodePen](http://codepen.io/ulisesgascon/pen/grKLZB)
- scroll *El fondo se desliza*
- fixed *El fondo NO se deslizará*

**imagen de fondo (tamaño)**
```css
  body {
    /*no-repeat por defecto*/
    background-image: url(Archivo/Web);
    background-repeat: no-repeat;
    background-position: center center
    background-size: 180px 25px;
    background-attachment: scroll;
  }
```
- [En CodePen](http://codepen.io/ulisesgascon/pen/WwyoPV)
- contain *Cubre solo el contenido*
- cover *Cubre todo el área y no solo el contenido*
- px *Alto y ancho en píxeles*

**imagen de fondo (origin)**
```css
  body {
    /*no-repeat por defecto*/
    background-image: url(Archivo/Web);
    background-repeat: no-repeat;
    background-position: center center
    background-size: 180px 25px;
    background-origin: content-box;
  }
```
- [En CodePen](http://codepen.io/ulisesgascon/pen/YqvNKj)
- content-box *desde el contenido*
- padding-box *desde el padding*
- border-box *desde el borde*
- Define la zona en la que se sitúa el origen de la posición del fondo

**imagen de fondo (clip)**
```css
  body {
    /*no-repeat por defecto*/
    background-image: url(Archivo/Web);
    background-repeat: no-repeat;
    background-position: center center
    background-size: 180px 25px;
    background-clip: content-box;
  }
```
- [En CodePen](http://codepen.io/ulisesgascon/pen/VadmOx)
- content-box *hasta el contenido*
- padding-box *hasta el padding*
- border-box *hasta el borde*
- Define la zona en la que aparece el fondo

**imagen de fondo (múltiples)**
```css
body {
    background-image: url(Archivo/Web), url(Archivo/Web);
    background-position: right bottom, center center;
    background-repeat: no-repeat, repeat;
}
```
```css
body {
    background: url(Archivo/Web) right bottom no-repeat, url(Archivo/Web) center center repeat;
}
```
- Podemos asignar múltiples imágenes y asignar múltiples valores.



### Ejercicios

**1 -** Crea una tabla de colores usando los colores con palabras reservadas y y otros 10 diseñados por ti.
Para los colores reservados usa una fuente del sistema, para los otros elige una de [Google Fonts](https://www.google.com/fonts#)

```html
  <!-- Tu solución -->
```

**2 -** Basandote en el ejercicios anterior crea un conjuntos de *párrafos* que contenga todos los colores.

```html
  <!-- Tu solución -->
```

**3 -** Con que hemos aprendido hoy sobre CSS3 mejora el diseño del ejercicio de GenBeta:Dev

```html
  <!-- Tu solución -->
```


