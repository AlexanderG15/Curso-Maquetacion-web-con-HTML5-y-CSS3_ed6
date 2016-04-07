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
            <meta charset="UTF-8">
            <title>Gifs y más gifs</title>
          </head>
          <body>
            <figure>
              <img src="https://45.media.tumblr.com/16dd14cdfe44aa04eff6631e77011526/tumblr_nllmvfQvgj1uqlfk4o1_500.gif" alt="Minions celebrando el éxito">
              <figcaption>Minions exaltados por el éxito de nuestro código Funcional.</figcaption>
            </figure>
          </body> 
        </html>
```
  - Valor semántico
  
### Ejercicios

**1 -** Partiendo del ejercicio que realizamos en la clase anterior. Actualiza el contenido de la web semántica de Genbeta Dev con imágenes e hipervinculos. 
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
              <hr>
      </header>
      <main>
          <article>
              <header>
                  <h3>Build 2016, Skynet está a la vuelta de la esquina</h3>
                  <p>por <strong>Juan Quijano</strong>. Hace <time datetime="2016-04-01">5 días</time></p>
              </header>
              <figure>
                  <a href="http://www.genbetadev.com/actualidad/build-2016-skynet-esta-a-la-vuelta-de-la-esquina" target="_blank" title="Genbeta Dev - Build 2016, Skynet está a la vuelta de la esquina">
                      <img src="http://i.blogs.es/0c56a0/1366_2000/650_1200.jpg" alt="Build 2016, Skynet está a la vuelta de la esquina">
                  </a>
                  <figcaption>Cartel Promocional del Build 2016</figcaption>
              </figure>
                  <p>Lo primero que te voy a aconsejar es que te leas entero el especial que los compañeros de Xataka han realizado sobre el evento y otro excelente sobre los Bots; ya que este artículo tiene un enfoque mucho más técnico y funcional.</p>
                  <p>En esta segunda parte voy <strong>a revisar la inesperada deriva hacia la inteligencia artificial</strong> que ha mostrado Microsoft en esta Build 2016, con múltiples anuncios de servicios relacionados con la interacción virtual.</p>
                  <a href="http://www.genbetadev.com/actualidad/build-2016-skynet-esta-a-la-vuelta-de-la-esquina" target="_blank" title="Genbeta Dev - Build 2016, Skynet está a la vuelta de la esquina">Leer más »</a>
                  <footer>
                      <p><em>Categoria: Actualidad</em></p>
                  </footer>
          </article>
          <hr>
          <article>
              <header>
                  <h3>Nueva Web de TypeScript 2</h3>
                  <p>por <strong>Juan Quijano</strong>. Hace <time datetime="2016-03-31">6 días</time></p>
              </header>
              <figure>
                  <a href="http://www.genbetadev.com/formacion/nueva-web-de-typescript-2" target="_blank" title="Genbeta Dev - Nueva Web de TypeScript 2">
                      <img src="http://i.blogs.es/2b815f/web_typescript2/650_1200.jpg" alt="Nueva Web de TypeScript 2">
                  </a>
                  <figcaption>Cartel Promocional de TypeScript 2</figcaption>
              </figure>
                  <p><strong>Type Script 2 es la segunda versión del conjunto de extensibilidad de JavaScript</strong> que permite realizar una programación tipada, orientada a objetos y que compila en EAMC 3 o superior.</p>
                  <p>Al principio se enfrento a resistencias en la comunidad, pero poco a poco ha ido ganando usuarios hasta recibir el espaldarazo final con el anuncio por parte del equipo de desarrollo de Angular JS, que su futura versión 2 se va a programar en Type Script.</p>
                  <a href="http://www.genbetadev.com/formacion/nueva-web-de-typescript-2" target="_blank" title="Genbeta Dev - Nueva Web de TypeScript 2">Leer más »</a>
                  <footer>
                      <p><em>Categoria: Actualidad</em></p>
                  </footer>
          </article>
          <hr>
      </main>
  </body>
  </html>
```

**2 -** Crea una pequeña lista con hipervinculos que funcione como índice para poder llegar más rápidamente a los distintos artículos. 
Nota: Mínimo incluye 6 artículos de Genbeta Dev.
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
      <aside>
          <h2>índice</h2>
          <nav>
              <ol>
                  <li><a href="#articulo1" title="Build 2016...">Build 2016, Skynet está a la vuelta de la esquina</a></li>
                  <li><a href="#articulo2" title="Nueva Web de...">Nueva Web de TypeScript 2</a></li>
                  <li><a href="#articulo3" title="Oracle le pide...">Oracle le pide 9 mil millones a Google, por licencias de Java</a></li>
                  <li><a href="#articulo4" title="Encuesta Stack...">Encuesta Stack Overflow 2016 (III)</a></li>
                  <li><a href="#articulo5" title="Portal del est...">Portal del estudiante de Microsoft España, una pasada</a></li>
                  <li><a href="#articulo6" title="Pull Request #64">Pull Request #64</a></li>             
              </ol>
          </nav>
          <hr>
      </aside>
      <main>
  <!-- 1 -->    
          <article id="articulo1">
              <header>
                  <h3>Build 2016, Skynet está a la vuelta de la esquina</h3>
                  <p>por <strong>Juan Quijano</strong>. Hace <time datetime="2016-04-01">5 días</time></p>
              </header>
              <figure>
                  <a href="http://www.genbetadev.com/actualidad/build-2016-skynet-esta-a-la-vuelta-de-la-esquina" target="_blank" title="Genbeta Dev - Build 2016, Skynet está a la vuelta de la esquina">
                      <img src="http://i.blogs.es/0c56a0/1366_2000/650_1200.jpg" alt="Build 2016, Skynet está a la vuelta de la esquina">
                  </a>
                  <figcaption>Cartel Promocional del Build 2016</figcaption>
              </figure>
                  <p>Lo primero que te voy a aconsejar es que te leas entero el especial que los compañeros de Xataka han realizado sobre el evento y otro excelente sobre los Bots; ya que este artículo tiene un enfoque mucho más técnico y funcional.</p>
                  <p>En esta segunda parte voy <strong>a revisar la inesperada deriva hacia la inteligencia artificial</strong> que ha mostrado Microsoft en esta Build 2016, con múltiples anuncios de servicios relacionados con la interacción virtual.</p>
                  <a href="http://www.genbetadev.com/actualidad/build-2016-skynet-esta-a-la-vuelta-de-la-esquina" target="_blank" title="Genbeta Dev - Build 2016, Skynet está a la vuelta de la esquina">Leer más »</a>
                      <p><em>Categoria: Actualidad</em></p>
          </article>
          <hr>
  <!-- 2 -->        
          <article id="articulo2">
              <header>
                  <h3>Nueva Web de TypeScript 2</h3>
                  <p>por <strong>Juan Quijano</strong>. Hace <time datetime="2016-03-31">6 días</time></p>
              </header>
              <figure>
                  <a href="http://www.genbetadev.com/formacion/nueva-web-de-typescript-2" target="_blank" title="Genbeta Dev - Nueva Web de TypeScript 2">
                      <img src="http://i.blogs.es/2b815f/web_typescript2/650_1200.jpg" alt="Nueva Web de TypeScript 2">
                  </a>
                  <figcaption>Cartel Promocional de TypeScript 2</figcaption>
              </figure>
                  <p><strong>Type Script 2 es la segunda versión del conjunto de extensibilidad de JavaScript</strong> que permite realizar una programación tipada, orientada a objetos y que compila en EAMC 3 o superior.</p>
                  <p>Al principio se enfrento a resistencias en la comunidad, pero poco a poco ha ido ganando usuarios hasta recibir el espaldarazo final con el anuncio por parte del equipo de desarrollo de Angular JS, que su futura versión 2 se va a programar en Type Script.</p>
                  <a href="http://www.genbetadev.com/formacion/nueva-web-de-typescript-2" target="_blank" title="Genbeta Dev - Nueva Web de TypeScript 2">Leer más »</a>
                  <footer>
                      <p><em>Categoria: Actualidad</em></p>
                  </footer>
          </article>
          <hr>
  <!-- 3 -->        
          <article id="articulo3">
              <header>
                  <h3>Oracle le pide 9 mil millones a Google, por licencias de Java</h3>
                  <p>por <strong>Juan Quijano</strong>. Hace <time datetime="2016-03-30">7 días</time></p>
              </header>
              <figure>
                  <a href="http://www.genbetadev.com/software-libre-y-licencias/oracle-le-pide-9-mil-millones-a-google-por-licencias-de-java" target="_blank" title="Genbeta Dev - Oracle le pide 9 mil millones a Google, por licencias de Java">
                      <img src="http://i.blogs.es/e2901c/oracle/650_1200.jpg" alt="Oracle le pide 9 mil millones a Google, por licencias de Java">
                  </a>
                  <figcaption>Avión Promocional de Oracle en San Francísco</figcaption>
              </figure>
                  <p><strong>Oracle y Google andan enredados en una incruenta batalla legal desde el 2012,</strong> por el uso por parte de esta última de 37 APIS de Java que se utilizan dentro del sistema operativo Android.</p>
                  <p>Es más, el problema no viene tanto del uso, si no del modo en que las utiliza. Ya que Google defiende que ha realizado un "uso razonable", como permite la licencia de forma gratuita. Mientras que <strong>Oracle defiende que debería estar recibiendo millones de dolares</strong> a causa del copyright.</p>
                  <a href="http://www.genbetadev.com/software-libre-y-licencias/oracle-le-pide-9-mil-millones-a-google-por-licencias-de-java" target="_blank" title="Genbeta Dev - Oracle le pide 9 mil millones a Google, por licencias de Java">Leer más »</a>
                  <footer>
                      <p><em>Categoria: Software Libre y Licencias</em></p>
                  </footer>
          </article>
          <hr>
  <!-- 4 -->
          <article id="articulo4">
              <header>
                  <h3>Encuesta Stack Overflow 2016 (III)</h3>
                  <p>por <strong>Juan Quijano</strong>. Hace <time datetime="2016-03-30">7 días</time></p>
              </header>
              <figure>
                  <a href="http://www.genbetadev.com/trabajar-como-desarrollador/encuesta-stack-overflow-2016-iii" target="_blank" title="Genbeta Dev - Encuesta Stack Overflow 2016 (III)">
                      <img src="http://i.blogs.es/f8564a/650_1200/650_1200.jpg" alt="Encuesta Stack Overflow 2016 (III)">
                  </a>
                  <figcaption lang="en">Stackoverflow - Developer Survey Results</figcaption>
              </figure>
                  <p>Continuo con el análisis de <strong>la encuesta 2016 de Stack Overflow</strong> en donde, la verdad, estoy sacando conclusiones que no me esperaba del todo. Que el rey es JavaScript o que de lo que más abunda son desarrolladores Web, son realidades que puedo percibir en cualquiera de los proyectos en los que trabajo o colaboro.</p>
                  <p>Sin embargo, <strong>hay otras que no tenía tan claras o, incluso que pensé que eran totalmente diferentes</strong>; y las cuales quiero compartir en este tercer artículo de la serie.</p>
                  <a href="http://www.genbetadev.com/trabajar-como-desarrollador/encuesta-stack-overflow-2016-iii" target="_blank" title="Genbeta Dev - Encuesta Stack Overflow 2016 (III)">Leer más »</a>
                  <footer>
                      <p><em>Categoria: Trabajar como desarrollador</em></p>
                  </footer>
          </article>
          <hr>
  <!-- 5 -->
          <article id="articulo5">
              <header>
                  <h3>Portal del estudiante de Microsoft España, una pasada</h3>
                  <p>por <strong>Juan Quijano</strong>. Hace <time datetime="2016-03-29">8 días</time></p>
              </header>
              <figure>
                  <a href="http://www.genbetadev.com/trabajar-como-desarrollador/portal-del-estudiante-de-microsoft-espana-una-pasada" target="_blank" title="Genbeta Dev - Portal del estudiante de Microsoft España, una pasada">
                      <img src="http://i.blogs.es/52f1f0/estudiantes_msdndev_espana/650_1200.jpg" alt="Portal del estudiante de Microsoft España, una pasada">
                  </a>
                  <figcaption>Portal del estudiante de Microsoft España</figcaption>
              </figure>
                  <p>Microsoft siempre se ha distinguido por el apoyo continuado a todo lo que sea desarrollo. Pero también tiene <strong>una vocación muy especial entorno a todo lo relacionado con los estudiantes</strong>, al ser plenamente consciente que los profesionales del futuro salen justamente de las aulas.</p>
                  <p>Esto les parecerá bien a unos, mal a otros y a la mayoría le dará exactamente igual. Pero no me puedo resistir a compartir la web específica para este colectivo, que ha publicado Microsoft España.</p>
                  <a href="http://www.genbetadev.com/trabajar-como-desarrollador/portal-del-estudiante-de-microsoft-espana-una-pasada" target="_blank" title="Genbeta Dev - Portal del estudiante de Microsoft España, una pasada">Leer más »</a>
                  <footer>
                      <p><em>Categoria: Trabajar como desarrollador</em></p>
                  </footer>
          </article>
          <hr>
  <!-- 6 -->
          <article id="articulo6">
              <header>
                  <h3>Consejos para ingenieros, Elche Valley, big data y F1, el santo hacker, Ghibli open source... Pull Request #64</h3>
                  <p>por <strong>Fernando Siles</strong>. Hace <time datetime="2016-03-28">9 días</time></p>
              </header>
              <figure>
                  <a href="http://www.genbetadev.com/actualidad/consejos-para-ingenieros-elche-valley-big-data-y-f1-el-santo-hacker-ghibli-open-source-pull-request-64" target="_blank" title="Genbeta Dev - Pull Request #64">
                      <img src="http://i.blogs.es/180d3c/mononoke-critica-10/650_1200.jpg" alt="Pull Request #64">
                  </a>
                  <figcaption>Portal del estudiante de Microsoft España</figcaption>
              </figure>
                  <p>Domingo de Resurrección. Así que, después de la ausencia de la semana pasada, resucitamos el <strong>Pull Request de Genbeta Dev</strong>, nuestra sección más clásica. Y para compensar lo vamos a hacer con extra de enlaces developeros ricos, ricos. ¡A la torrija!</p>
                  <a href="http://www.genbetadev.com/actualidad/consejos-para-ingenieros-elche-valley-big-data-y-f1-el-santo-hacker-ghibli-open-source-pull-request-64" target="_blank" title="Genbeta Dev - Pull Request #64">Leer más »</a>
                  <footer>
                      <p><em>Categoria: Actualidad</em></p>
                  </footer>
          </article>
          <hr>
          <br>
      </main>
      <footer>
          Versión semántica de Genbeta:Dev. Todo el contenido e imágenes son propiedad de <a href="https://www.weblogssl.com/" target="_blank" title="WeblogSL - El principal grupo de
  medios digitales especializados
  en español">WSL</a>
      </footer>
  </body>
  </html>
```
