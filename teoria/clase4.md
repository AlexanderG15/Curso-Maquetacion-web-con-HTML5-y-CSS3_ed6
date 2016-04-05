# Clase 4

### Eventos Próximamente

**Masterclass de Marcos Vidal: "Diseñando interfaces con Sketch: Procesos, plugins y trucos"**

![Marcos_Vidal](http://www.fictizia.com/assets/imgs/blog/articles/26/sketch-masterclass-Marcos-Vidal.jpg)

- El sábado 16 de Abril a las 10:30
- [Detalles](http://www.fictizia.com/actualidad/sketch-masterclass-Marcos-Vidal)
- [Reserva y desayuno](http://entradium.com/entradas/masterclass-disenando-interfaces-con-sketch-procesos-plugins-y-trucos)


**Seminario Internet de las Cosas (IoT) - Huelva Inteligente**

![iot_Huelva](http://blog.huelvainteligente.es/wp-content/uploads/2016/03/blog-articulo.jpg)

- El jueves 14 de Abril de 10:00 a 14:00
- [Construyendo *Internet de las Cosa* en el *#ArduinoDay2016*](http://www.fictizia.com/actualidad/arduino-day-2016-calidad-del-aire)
- [Detalles](http://blog.huelvainteligente.es/noticias/internet-de-las-cosas-iot/)
- [Inscripciones gratuitas](http://www.diphuelva.es/servicios/inscripciones/busqueda/?idIns=80078048)


### Hipertexto

- **Etiqueta &lt;a&gt;**
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Enlaces</title>
      </head>
      <body>
        <p><a href='curso_frontend_html5_css3'>¡Nuestro Curso!</a></p>
      </body> 
    </html>
```
  - Atributos:
    - *href* url de destino
    - *title* tooltip descriptivo
    - *ping* Notifica a esta URL que el usuario sigue el enlace
    - *rel* similar a la etiqueta &lt;link&gt;
    - *type* MIME
    - *hreflang* Lenguaje del recurso
    - *target* 
      - *_self* Carga el documento o recurso en la ventana
      - *_blank* Abre el documento o recurso en una nueva ventana
      - *_top* y *_parent* ya no estan soportados
- **URLs Relativas**
  ```html
    <!-- Nuestro HTML esta en C:/Usuario/fictizia/escritorio/clase4/index.html-->
    
    <!-- se incluye ... C:/Usuario/fictizia/escritorio/clase4/teoria.html -->
    <a href='teoria.html'>Teoría</a>
    
    <!-- se incluye ... C:/Usuario/fictizia/escritorio/index.html -->
    <a href='../index.html'>Principal</a>
    
    <!-- se incluye ... C:/Usuario/fictizia/escritorio/clase4/recursos -->
    <a href='recursos/clase4.html'>Recursos</a>
  ```
  - Muy útil para recursos locales
  - Se puede usar &lt;base&gt; para modificar su comportamiento

- **URLs Absolutas**
  ```html
    
    <!-- Formato de URL
    [Protocolo]://[subdominio].[dominio].[TLD]:[Puerto]/[Carpeta]/[Documento].[Extensión]#[marca]?[Query]
    -->
    <a href='http://google.com'>Google!</a>

  ```
  - Enlaces y recursos externos
  - &lt;base&gt; no altera su comportamiento

- **Anclas - Enlaces Internos**
  ```html
        <!DOCTYPE html>
        <html>
          <head>
            <meta http-equiv="refresh" content="30">
            <meta charset="UTF-8">
            <title>Links Internos</title>
          </head>
          <body>
            <a href="#lorem">Link Directo!</a>
            <p id="lorem">
              Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte dellas.Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no
            </p>
          </body> 
        </html>
  ```
- Es necesario usar el atributo *id* para declararlos
- Es necesario usar *#id* para enlazar 

### Imágenes
- **Etiqueta &lt;img&gt;**
  ```html
          <!DOCTYPE html>
          <html>
            <head>
              <meta http-equiv="refresh" content="30">
              <meta charset="UTF-8">
              <title>Gifs y más gifs</title>
            </head>
            <body>
              <img src="https://45.media.tumblr.com/16dd14cdfe44aa04eff6631e77011526/tumblr_nllmvfQvgj1uqlfk4o1_500.gif">
            </body> 
          </html>
  ```
  - Atributos:
    - *alt* texto explicativo que resume la imagen 
    - *width* define el ancho en píxeles
    - *height* define el alto en píxeles
  - Los formatos más comunes son *.gif, .jpg, .png* y *.svg* para vectorial
  - Otros formatos en expansión [WebP](https://es.wikipedia.org/wiki/WebP)
  - Cosas a tener en cuenta:
    - Usar capas transparentes
    - Soporte de color mayor (24 bits) en *.jpg* frente a *.gif* (256 colores)
    - Usar *.jpg* para fotografías y *.png* para gráficos e imágenes sintéticas
    - Recomendable usar compresión

- **Etiqueta &lt;map&gt; y &lt;area&gt;**
```html
<img src="planets.gif" alt="Planets"
usemap="#planetmap">

<map name="planetmap">
  <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun">
  <area shape="circle" coords="90,58,3" href="mercur.htm" alt="Mercury">
  <area shape="circle" coords="124,58,8" href="venus.htm" alt="Venus">
</map>
```
- &lt;area&gt; define las formas partiendo de coordenadas dentro la imagen.
- Uso poco común
- [DEMO](http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_areamap)

- **Etiqueta &lt;figure&gt; y &lt;figcaption&gt;****
```html
        <!DOCTYPE html>
        <html>
          <head>
            <meta http-equiv="refresh" content="30">
            <meta charset="UTF-8">
            <title>Gifs y más gifs</title>
          </head>
          <body>
            <figure>
              <img src="https://45.media.tumblr.com/16dd14cdfe44aa04eff6631e77011526/tumblr_nllmvfQvgj1uqlfk4o1_500.gif" alt="Minions celebrando el éxito">
              <figcaption>Minions exaltados por el éxito de nuestro código Funcional.</figcaption>
            </figure>
            <img src="">
          </body> 
        </html>
```
  - Valor semántico
  
### Ejercicios

**1 -** Partiendo del ejercicio que realizamos en la clase anterior. Actualiza el contenido de la web semántica de Genbeta Dev con imágenes e hipervinculos. 
```html
    <!-- Tu solución -->
```

**2 -** Crea una pequeña lista con hipervinculos que funcione como índice para poder llegar más rápidamente a los distintos artículos. 
Nota: Mínimo incluye 6 artículos de Genbeta Dev.
```html
    <!-- Tu solución -->
```

**3 -** Haz una página típica de una empresa fictícia con imágenes y navegación entre distintos documentos.
- Datos mínimos:
    - Index
    - Quiénes somos
    - Servicios
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
