# Clase 3

### Textos

- **Etiqueta &lt;p&gt;**
  ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Parrafos</title>
      </head>
      <body>
        <p>Empieza el texto y ahora terminamos con este párrafo...</p>
        <p>Para empezar con otro parrafo...</p>
      </body> 
    </html>
  ```   
  - Muy extendido

- **Etiqueta &lt;strong&gt; y &lt;b&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Texto destacado</title>
      </head>
      <body>
        Empieza el <b>texto destacado con &lt;b&gt;</b>. 
        Después usamos <strong>&lt;strong&gt;</strong> 
      </body> 
    </html>
``` 
  - Contenido que resalta (negrita)
  - &lt;strong&gt; es más semántica
  - &lt;b&gt; y &lt;strong&gt; son representadas igual por muchos navegadores

- **Etiqueta &lt;em&gt; e &lt;i&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Texto enfatizado</title>
      </head>
      <body>
        Empieza el <i>texto enfatizado con &lt;i&gt;</i>. 
        Después usamos <em>&lt;em&gt;</em> 
      </body> 
    </html>
``` 
  - Contenido que se enfatiza (cursiva)
  - &lt;em&gt; es más semántica
  - &lt;em&gt; e &lt;i&gt; son representadas igual por muchos navegadores

- **Etiqueta &lt;del&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Texto borrado</title>
      </head>
      <body>
        <p>
          El agua es insípida 
          <del>y húmeda.</del> 
        </p> 
      </body> 
    </html>
```
  - Muestra el texto eliminado (tachado) desde la ultima modificación

- **Etiqueta &lt;ins&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Texto borrado e insertado</title>
      </head>
      <body>
        <p>
          El agua es insípida 
          <del>y húmeda.</del> 
          <ins>y además inodora e incolora.</ins>
        </p> 
      </body> 
    </html>
```
  - Muestra el texto añadido desde la ultima modificación

- **Etiqueta &lt;sub&gt; y &lt;sup&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Subíndices y exponentes</title>
      </head>
      <body>
        <p>
          El agua es H<sub>2</sub>O.
        </p> 
        <p>
           E = mc<sup>2</sup>
        </p>
      </body> 
    </html>
```
  - &lt;sup&gt; nos permite representar exponentes
  - &lt;sub&gt; nos permite representar subíndices

- **Etiqueta &lt;pre&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Preformateado</title>
      </head>
      <body>
        <p><strong>Usando &lt;pre&gt;</strong></p>
        <pre>
             Nombre   Tiempo
          #1 Carlos   86
          #2 Luis     98
          #3 Oscar    73      - N/A-
        </pre>
        <p><strong>Usando &lt;p&gt;</strong></p>
        <p>
             Nombre   Tiempo
          #1 Carlos   86
          #2 Luis     98
          #3 Oscar    73      - N/A-  
        </p>
      </body> 
    </html>
```
   - Bloque de texto preformateado
   - El navegador lo representa "literalmente"

### Separadores

- **Etiqueta &lt;br&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Salto de línea</title>
      </head>
      <body>
        Empieza el texto y ahora tenemos un salto de línea.<br>
        Este texto está en otra línea
      </body> 
    </html>
``` 
  - Salto de línea
  - Uso poco extendido

- **Etiqueta &lt;hr&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Línea horizontal</title>
      </head>
      <body>
        Empieza el texto y ahora tenemos una separación.<hr>
        Este texto está en otra línea
      </body> 
    </html>
```
  - Separación horizontal
  - Dibuja una barra horizontal

### Secciones (Etiquetas semánticas)

- **Etiqueta &lt;nav&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>NAV</title>
      </head>
      <body>
        <nav>
          <p>
            Elemento 1 |
            Elemento 2 |
            Elemento 3 |
            Elemento 4 
          </p>
        </nav>
        <p>
          Más contenido...
        </p>
      </body> 
    </html>
```
  - Determina la información relacionada a la navegación 

- **Etiqueta &lt;article&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Article</title>
      </head>
      <body>
        <article>
          <p><strong>Curso de maquetación web con HTML5 y CSS3</strong><hr>
          Con este Curso especializado en maquetación web con HTML5 y CSS3 aprenderás desde cero a desarrollar con éxito cualquier proyecto web basado en tecnologías HTML5, incluyendo aquellos que requieren ser \"responsive\" para adaptarse eficazmente a cada dispositivo.
        En el curso los alumnos aprenderán, además…</p>
        </article>
      </body> 
    </html>
```
  - Determina el contenido principal
  - Es una alternativa a &lt;div&gt;

- **Etiqueta &lt;section&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Section</title>
      </head>
      <body>
        <section>
          <h1>Título</h1>
          <p>Un montón de contenido impresionante.</p>
          <hr>
          <h1>Otro título</h1>
          <p>Con más contenido impresionante.</p>
        </section>
      </body> 
    </html>
```
  - Determina un área del documento
  - Nos permite distinguir áreas

- **Etiqueta &lt;header&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Header</title>
      </head>
      <body>
        <article>
          <h1>Usando &lt;header&gt;...</h1>
          <header>
            <h3>Datos Clave</h3>
            <p>Información imporante</p>
          </header>
          <p>Texto fuera de la cabecera....</p>
        </article>
      </body> 
    </html>
```
  - Determina la información clave sobre documento (titulos, metainformación...)  

- **Etiqueta &lt;footer&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Header y Footer</title>
      </head>
      <body>
        <article>
          <h1>Usando &lt;header&gt;...</h1>
          <header>
            <h3>Datos Clave</h3>
            <p><strong>Información importante</strong></p>
          </header>
          <p>Texto fuera de la cabecera....</p>
          <footer>
            <p>Creado por: Yo Mismo</p>
            <p><em>Hace 40 minutos<em></p>
          </footer>
        </article>
      </body> 
    </html>
```
  - Contiene información relativa a los autores, información legal, etc...

- **Etiqueta &lt;aside&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>aside</title>
      </head>
      <body>
        <p><strong>He visitado el Google Campus hace pocos días.</strong></p>

        <p>En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro hidalgo con los cincuenta años; era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza. Quieren decir que tenía el sobrenombre de Quijada, o Quesada, que en esto hay alguna diferencia en los autores que deste caso escriben; aunque, por conjeturas verosímiles, se deja entender que se llamaba Quejana. Pero esto importa poco a nuestro cuento; basta que en la narración dél no se salga un punto de la verdad. </p><hr>
        <aside>
          <h4>Sobre... Google Campus</h4>
          <p>Con conexión Wi-Fi gratis, una energía contagiosa y decenas de emprendedores, el Campus Café es el sitio ideal para trabajar, crear, tomar un café o colaborar con personas que comparten tus inquietudes. La cafetería de Campus ofrece café recién hecho y comida sana para alimentar las grandes ideas. Sólo tienes que registrarte como miembro (¡es gratis!). ¡Te esperamos!</p>
        </aside>
      </body> 
    </html>
```
  - Area de información adiccional que no forma parte del contenido principal 

- **Etiqueta &lt;address&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Address</title>
      </head>
      <body>
          <h1>Fictizia</h1>
          <p>En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.</p>
          <h3>¡Visitanos!</h3>
        <address>
            Esoacio de Formación<br>
            Calle Eduardo Benot, 2<br>
            28008<br> 
            Madrid<br>
            España<br>
        </address>
      </body> 
    </html>
```
  - Información de contacto



### Agrupadores

- **Etiqueta &lt;div&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Div</title>
      </head>
      <body>
          <div>
            <p>En un DIV</p>
          </div>
          <div>
            <p>En otro DIV</p>
          </div>
      </body> 
    </html>
```
  - División (Agrupador)

- **Etiquetas &lt;hx&gt;**
  ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Cabeceras</title>
      </head>
      <body>
        <h1>Cabecera H1</h1>
        <h2>Cabecera H2</h2>
        <h3>Cabecera H3</h3>
        <h4>Cabecera H4</h4>
        <h5>Cabecera H5</h5>
        <h6>Cabecera H6</h6>
        <p>Párrafo...</p>
      </body> 
    </html>
  ``` 
  - 6 Niveles de importancia

- **Etiqueta &lt;hgroup&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Agrupando Titulares</title>
      </head>
      <body>
        <hgroup>
          <h1>Quijotipsum</h1>
          <h4>¿Qué diantres es Quijotipsum?</h4>
        <hgroup>
        <p><strong>Quijotipsum</strong> (pronunciado kijotipsum) es un generador de texto basado en El Quijote (el de los molinos) al más puro estilo Lorem Ipsum (texto en una lengua que está algo deprecated). Con <strong>Quijotipsum</strong> obtendrás dos ventajas: texto entendible por ti, tus compañeros y tu familia y un texto fresco, novedoso y alegre en puro castellano, con tildes para probar la codificación (sí, esas cosas del UTF-8 que tanto gustito dan).</p>
      </body> 
    </html>
```
  - Agrupa al menos dos etiquetas de tipo &lt;hx&gt;
  - Obsoleto

- **Etiqueta &lt;span&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>span - contenedor de línea</title>
      </head>
      <body>
        <p><strong>Quijotipsum</strong><span> (pronunciado kijotipsum)</span> es un generador de texto basado en El Quijote (el de los molinos) al más puro estilo Lorem Ipsum (texto en una lengua que está algo deprecated).</p>
      </body> 
    </html>
```
  - Contenedor de línea

- **Etiqueta &lt;blockquote&gt; y &lt;q&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>blockquote y Q</title>
      </head>
      <body>
        <h1>Richard Stallman</h1>
        <p>Sobre el Software Libre. <em>usando &lt;blockquote&gt;:</em></p>

        <blockquote cite="http://www.frasescitas.info/frase/3820/richard-stallman-beethoven-era-un-buen-compositor-porque">
        Beethoven era un buen compositor porque utilizaba ideas nuevas en combinación con ideas antiguas. Nadie, ni siquiera Beethoven podría inventar la música desde cero. Es igual con la informática.
        </blockquote>

        <p>Sobre el Software Libre. <em>usando &lt;q&gt;:</em>
        <q cite="http://www.frasescitas.info/frase/3820/richard-stallman-beethoven-era-un-buen-compositor-porque">Beethoven era un buen compositor porque utilizaba ideas nuevas en combinación con ideas antiguas. Nadie, ni siquiera Beethoven podría inventar la música desde cero. Es igual con la informática.</q>
        </p>

      </body> 
    </html>
```
  - Etiquetas que se usan para citas, notas, etc...
  - &lt;blockquote&gt; se utiliza para textos extendidos
  - &lt;q&gt; se utiliza para textos breves

- **Etiqueta &lt;abbr&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Abreviación</title>
      </head>
      <body>
        <p>Nosotros hacemos <abbr title="Hypertext Markup Language">HTML</abbr></p>
      </body> 
    </html>
```
  - Se usa para acrónimos y abreviaturas
  - Importante para dispositivos que dan soporte a internautas con limitaciones

- **Etiqueta &lt;cite&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Cita</title>
      </head>
      <body>
        <p><cite>A Game of Thrones</cite>, by George R. R. Martin</p>
      </body> 
    </html>
```
  - Se usa para citar obras

- **Etiqueta &lt;code&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Hola mundo con JavaScript</title>
      </head>
      <body>
        <h1>Hola mundo.js</h1>
        <code>
          console.info("Hola Mundo!");
        </code>
      </body> 
    </html>
```
  - Se usa para mostrar código (programación) 

- **Etiqueta &lt;dfn&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Definiciones</title>
      </head>
      <body>
        <p>
             <dfn>HTML</dfn> es un lenguaje de marcado para hipertextos.
        </p>
      </body> 
    </html>
```
  - Se usa para definiciones

- **Etiqueta &lt;kbd&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>kbd - teclas</title>
        <style>
        /*
          Estilos de MDN
        */
        kbd {
            background-color: #f4f7f8;
            border-radius: 3px;
            border: 1px solid #b4b4b4;
            box-shadow: 0 1px 1px rgba(0,0,0,.2),
                        0 2px 0 0 rgba(255,255,255,.7)inset;
            display: inline-block;
            font-family: Consolas,"Liberation Mono",Courier,monospace;
            font-size: .85em;
            font-weight: 700;
            line-height: inherit;
            padding: 2px 4px;
            white-space: nowrap;
        }
      </style>
      </head>
      <body>
        <p>
          En caso de emergencia... <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Supr</kbd>
        </p>
      </body> 
    </html>
```
  - Representa una tecla del teclado 

- **Etiqueta &lt;samp&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Samp</title>
      </head>
      <body>
        <h1>Hola mundo.js</h1>
        <p>
        Aparecerá una mensaje en la consola de Chrome: <samp>Hola mundo!</samp>
        </p>
        <code>
          console.info("Hola Mundo!");
        </code>
      </body> 
    </html>
```
  - Representa un ejemplo (Salida del programa) 

- **Etiqueta &lt;time&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Tiempo</title>
      </head>
      <body>
        <h1><time>Mañana</time> es Viernes!</h1>
        <p>El año empezo <time datetime="2016-01-01 00:00:01">El primer día del año</time>.</p>
      </body> 
    </html>
```
  - Representa el tiempo (fecha y hora)
  - Atributos:
    - datetime - *fecha y hora en formato ISO8601* 

- **Etiqueta &lt;mark&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Resaltando Textos</title>
      </head>
      <body>
        <p>Esto es un texto <mark>resaltado!</mark></p>
      </body> 
    </html>
```
  - Determina un texto marcado

- **Etiqueta &lt;var&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Var</title>
      </head>
      <body>
        <h1>Hola mundo.js</h1>
        <p>
        Aparecerá una mensaje en la consola de Chrome que contiene el valor de la variable <var>saludo</var>
        </p>
        <pre>
          <code>
            var saludo = "Hola Mundo!";
            console.info(saludo);
          </code>
        </pre>
      </body> 
    </html>
```
  - Apoyo semántico a variables del código que se encuentren en el texto 

- **Etiqueta &lt;meter&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Meter</title>
      </head>
      <body>
        <p>Mostremos los datos...</p>
        <strong>calificación:</strong>
        <meter value="2" min="0" max="5">2 de 5</meter><br>
        <strong>Fiabilidad:</strong>
        <meter value="0.6">60%</meter>
      </body> 
    </html>
```
  - [Soporte](http://caniuse.com/#search=meter)
  - Define una medida
  - Atributos:
    - value: *valor del dato*
    - min: *valor mínimo de la escala*
    - max: *valor máximo de la escala*

- **Etiqueta &lt;progress&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Progress</title>
      </head>
      <body>
        <p>Cargando...</p>
        <progress value="0.6" max="1">60%</progress>
      </body> 
    </html>
```
  - barra de progresión
  - Atributos:
    - value: *Valor del dato*
    - max: *el 100%*

- **Etiquetas &lt;details&gt; y &lt;summary&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Muestrame más...</title>
      </head>
      <body>
        <details>
          <summary>Algunos datos...</summary>
          <p>Datos.. extra!</p>
        </details>
      </body> 
    </html>
```
  - Contenido accesorio
  - El usuario puede ocultarlo

### Listas

- **Lista no ordenada (Tipo bullet)** 
  - **Etiqueta &lt;ul&gt;**
  ```html
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Lista no ordenada</title>
        </head>
        <body>
            <p>Paises</p>
            <ul>
             <li>España</li>
             <li>Francia</li>
             <li>China</li>
            </ul>
        </body> 
      </html>
  ```
    - Las más usadas
    - Casi siempre se modificará su aspecto usando CSS
    - &lt;li&gt; determina un elemento de la lista
    - Atributos:
      - type (Obsoleto) - *Nos permite determinar el tipo de marca (rendondo, cuadrado, etc...)*
      
- **Lista ordenada (Tipo numerada)** 
  - **Etiqueta &lt;ol&gt;**
  ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Lista ordenada</title>
      </head>
      <body>
          <p>Paises</p>
          <ol>
           <li>España</li>
           <li>Francia</li>
           <li>China</li>
          </ol>
      </body> 
    </html>
  ```
    - Cada elemento es numerado 
    - &lt;li&gt; determina un elemento de la lista
    - Atributos:
      - type (Obsoleto) - *Nos permite determinar el tipo de numeración (romana, clasica, etc...)*
      - start - *Determina el número por el que se empieza*
      - value - *Determina el valor numeral de ese elemento concreto de la lista*
      - reversed - *Determina si el orden es descendente o acendente*

- **Tipo Glossary** 
  - **Etiqueta &lt;dl&gt;**
  ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Glosario</title>
      </head>
      <body>
          <p><strong>Términos:</strong></p>
          <dl>
            <dt>HTML</dt>
            <dd>HyperText Markup Language</dd>
            <dt>CSS</dt>
            <dd>Cascading style sheets</dd>
          </dl>
      </body> 
    </html>
  ```
    - La etiqueta &lt;dt&gt; determina el título
    - La etiquetas &lt;dd&gt; determina la definición


### Malas Práticas

- **Usar &lt;p&gt; con espacios sin ruptura**
  ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Parrafos</title>
      </head>
      <body>
        <p>Empieza el texto y ahora terminamos con este párrafo...</p>
        <!-- Espacio sin ruptura -->
        <p>&nbsp;</p>
        <p>Para empezar con otro parrafo...</p>
      </body> 
    </html>
  ``` 

- **Usar &lt;h5&gt; y &lt;h6&gt; como delimitadores de texto marginal**
  ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Cabeceras</title>
      </head>
      <body>
        <h1>Título importante</h1>
        <p>Empieza el texto principal...</p>
        <!-- texto menos relevante -->
        <h6>Texto complementario...</h6>
        <p>Para seguir con otro parrafo muy relevante...</p>
      </body> 
    </html>
  ``` 

- **Usar listas (&lt;dl&gt;, &lt;ul&gt;, &lt;ol&gt;) para forzar margenes**
  ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Frozando Márgenes</title>
      </head>
      <body>
        <p>Empieza el texto principal con un margen normal...</p>
        <!-- Forzando -->
        <ul> Empezamos a ganar margen...
          <ul>...Incluso un poco  más...
            <ul> ... y más...</ul></ul></ul>
        <p> ... y volvemos a la normalidad</p>
      </body> 
    </html>
  ``` 

### Ejercicios

- **1 -** Crea un documento HTML que contenga cinco o más shortcuts para sublime que consideres útiles, además incluye una lista con editores alternativos e incluye en un archivo .css los estilos necesarios para la etiqueta &lt;kbd&gt;
  - Etiquetas obligatorias:
    -  &lt;dl&gt;
    -  &lt;kbd&gt;
  - [Fuente](http://docs.sublimetext.info/en/latest/reference/keyboard_shortcuts_osx.html)
  - *Nota: Puedes encontrar los editores alternativos en la primera clase.*
  - [Solución](../otros/clase3/ex1) 

- **2 - ¡Hagamos una web más semantica!** Partiendo del contenido de [Genbeta Dev](http://www.genbetadev.com/) y lo apredido hasta ahora en cuanto a semántica realiaza un documento HTML
  - *Nota: Omite los hipervinculos, hojas de estilos e imágenes. Trabaja solo con los textos*
  

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Una historia semántica">
    <meta name="author" content="Genbeta:Dev">
    <meta charset="UTF-8">
    <title>Genbeta:Dev</title>
</head>
<body>
    <header>
            <h1>Genbeta:Dev</h1>
            <h2>Una historia semántica</h2>
            <br>
    </header>
    <main>
<!-- 1 -->    
        <article>
            <header>
                <h3>Build 2016, Skynet está a la vuelta de la esquina</h3>
                <p>por <strong>Juan Quijano</strong>. Hace <time datetime="2016-04-01">5 días</time></p>
            </header>
                <p>Lo primero que te voy a aconsejar es que te leas entero el especial que los compañeros de Xataka han realizado sobre el evento y otro excelente sobre los Bots; ya que este artículo tiene un enfoque mucho más técnico y funcional.</p>
                <p>En esta segunda parte voy <strong>a revisar la inesperada deriva hacia la inteligencia artificial</strong> que ha mostrado Microsoft en esta Build 2016, con múltiples anuncios de servicios relacionados con la interacción virtual.</p>
                    <p><em>Categoria: Actualidad</em></p>
                </footer>
        </article>
        <hr>
<!-- 2 -->        
        <article>
            <header>
                <h3>Nueva Web de TypeScript 2</h3>
                <p>por <strong>Juan Quijano</strong>. Hace <time datetime="2016-03-31">6 días</time></p>
            </header>
                <p><strong>Type Script 2 es la segunda versión del conjunto de extensibilidad de JavaScript</strong> que permite realizar una programación tipada, orientada a objetos y que compila en EAMC 3 o superior.</p>
                <p>Al principio se enfrento a resistencias en la comunidad, pero poco a poco ha ido ganando usuarios hasta recibir el espaldarazo final con el anuncio por parte del equipo de desarrollo de Angular JS, que su futura versión 2 se va a programar en Type Script.</p>
                <footer>
                    <p><em>Categoria: Actualidad</em></p>
                </footer>
        </article>
        <hr>
    </main>
</body>
</html>
``` 
