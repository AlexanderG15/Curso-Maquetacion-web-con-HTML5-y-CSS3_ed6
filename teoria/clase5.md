# Clase 5

### Tablas

```html
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>Tablas</title>
      <style>
          table {
              border: 1px solid black;
              border-collapse: collapse;
          }
          td {
              border: 1px solid black
          }
          th {
              border: 1px solid black
          }
          .bloque {
              background-color: #a4e7f2;
              
          }
          #importante {
              background-color: #f48f8b;
          }
      </style>
  </head>
  <body>
      <h3>Tabla: Básica</h3>
      <table>
          <tr>
              <td>uno</td>
              <td>dos</td>
              <td>tres</td>
          </tr>
          <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
          </tr>
      </table>
  
      <h3>Tabla: Fusión columnas</h3>
      <table>
          <tr>
              <td colspan="2" >Fusión (uno y dos)</td>
              <td>tres</td>
          </tr>
          <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
          </tr>
      </table>
  
      <h3>Tabla: Fusión filas</h3>
      <table>
          <tr>
              <td rowspan="2" >Fusión (uno y 4)</td>
              <td>dos</td>
              <td>tres</td>
          </tr>
          <tr>
              <td>5</td>
              <td>6</td>
          </tr>
      </table>
  
      <h3>Tabla: Encabezado</h3>
      <table>
          <tr>
              <th>C1</th>
              <th>C2</th>
              <th>C3</th>
          </tr>
          <tr>
              <td>uno</td>
              <td>dos</td>
              <td>tres</td>
          </tr>
          <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
          </tr>
      </table>
  
      <h3>Tabla: Leyenda</h3>
      
      <table>
          <caption>Leyenda de la tabla</caption>
          <tr>
              <td>uno</td>
              <td>dos</td>
              <td>tres</td>
          </tr>
          <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
          </tr>
      </table>
  
      <h3>Tabla: Estilos por columnas</h3>
      <table>
          <colgroup class="bloque" span="2"></colgroup>
          <colgroup id="importante" span="1"></colgroup>
          <tr>
              <td>uno</td>
              <td>dos</td>
              <td>tres</td>
          </tr>
          <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
          </tr>
      </table>
  
      <h3>Tabla: Semántica</h3>
      <table>
          <caption>Leyenda de la tabla</caption>
          <thead>
              <tr>
                  <th>C1</th>
                  <th>C2</th>
                  <th>C3</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>uno</td>
                  <td>dos</td>
                  <td>tres</td>
              </tr>
              <tr>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
              </tr>         
          </tbody>
          <tfoot>
              <tr>
                  <td colspan="3" >Pie de tabla</td>
              </tr>            
          </tfoot>
      </table>
  
      <h3>Tabla: Gestión de huecos</h3>
      <table>
          <tr>
              <td>uno</td>
              <td><!-- CORRECTO --></td>
              <td>tres</td>
          </tr>
          <tr>
              <td>4</td>
              <!-- INCORRECTO 
                  W3C Validator: "A table row was 2 columns wide, 
                  which is less than the column count established 
                  by the first row (3)."
              -->
              <td>6</td>
          </tr>
      </table>
  
  </body>
  </html>
```

- **Etiqueta &lt;table&gt;**
```html
    <table>
      <!-- contenido -->
    </table>
```
  - No es necesario determinar el numero de filas o celdas
  - Las tablas siempre estarán contenidas dentro de esta etiqueta

- **Etiqueta &lt;caption&gt;**
```html
    <table>
      <caption>Leyenda de la tabla</caption>
      <!-- contenido -->
    </table>
```
  - Muestra información adicional sobre la tabla
  - Solo puede usarse una vez dentro de la tabla
  - Debe ir justo después de la etiqueta &lt;table&gt;

- **Etiqueta &lt;th&gt;**
```html
    <table>
        <tr>
            <th>Columna 1</th>
            <th>Columna 2</th>
            <th>Columna 3</th>
        </tr>
      <!-- contenido -->
    </table>
```
  - Define la cabecera de una columna

- **Etiqueta &lt;tr&gt;**
```html
    <table>
        <tr>
            <td>uno</td>
            <td>dos</td>
            <td>tres</td>
        </tr>
        <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
        </tr>
    </table>
```
  - Define la fila
  
- **Etiqueta &lt;td&gt;**
```html
    <table>
        <tr>
            <td>uno</td>
            <!-- + contenido -->
        </tr>
    </table>
```
  - Atributos:
    - *colspan* fusiona columnas
    - *rowspan* fusiona filas
  - Determina una celda
  - Admite otras etiquetas en su interior. No solo texto.

- **Etiqueta &lt;colgroup&gt;**
```html
    <table>
        <colgroup class="bloque" span="2"></colgroup>
        <colgroup id="importante" span="1"></colgroup>
      <!-- contenido -->
    </table>
```
  - Permite la agrupación de contenido
  - Ideal para determinar el estilo de una o varias columnas
  - Atributos:
    - *span* agrupa cierto número de columnas

- **Etiqueta &lt;thead&gt;**
```html
    <table>
        <caption>Leyenda de la tabla</caption>
        <thead>
            <tr>
                <th>C1</th>
                <th>C2</th>
                <th>C3</th>
            </tr>
        </thead>
      <!-- contenido -->
    </table>
```
  - Valor semántico
  - Contenido cabecera (títulos, subtítulos, secciones, etc...)

- **Etiqueta &lt;tbody&gt;**
```html
    <table>
        <caption>Leyenda de la tabla</caption>
        <thead>
            <tr>
                <th>Columna 1</th>
                <th>Columna 2</th>
                <th>Columna 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>uno</td>
                <td>dos</td>
                <td>tres</td>
            </tr>
        </tbody>
      <!-- contenido -->
    </table>
```
  - Valor semántico 
  - Contenido Principal (celdas principales, etc...)

- **Etiqueta &lt;tfoot&gt;**
```html
    <table>
        <caption>Leyenda de la tabla</caption>
        <thead>
            <tr>
                <th>Columna 1</th>
                <th>Columna 2</th>
                <th>Columna 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>uno</td>
                <td>dos</td>
                <td>tres</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3" >Pie de tabla</td>
            </tr>            
        </tfoot>
    </table>
```
  - Valor semántico
  - Contenido secundario (fuente, celdas secundarias, etc..)

### Formularios

- **Etiqueta &lt;form&gt;**
```html
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>Formularios</title>
  </head>
  <body>
    <form action="http://www.fictizia.com/formulario" enctype="multipart/form-data" method="POST">
        <!-- CONTENIDO -->
    </form>
  </body>
  </html>
```
- El envio de datos puede requerir de JavaScript
- La recepción de los datos requiere de un procesamiento en el lado del servidor
- La validación de los datos se puede realizar desde el HTML
- Los formularios pueden usarse de multiples maneras
- Atributos:
  - *name*: Único para el elemento. Se usa como referencia al enviar los datos. No es lo mismo que *id* 
  - *action* Para el envio de los datos
    - `<form action="http://www.fictizia.com/formulario">` enviará los datos a *example.com/form* para su procesamiento
    - `<form action="mailto:info@fictizia.com">` enviará los datos a un email específico usando el protocolo *mailto*.
    - `<form action="">` será procesado internamente por javaScript.
  - *enctype* define la codificación MIME
    - `<form action="http://www.fictizia.com/formulario" enctype="application/x-www-form-urlencoded">` valor por defecto
    - `<form action="http://www.fictizia.com/formulario" enctype="multipart/form-data">` para poder enviar archivos
    - `<form action="mailto:info@fictizia.com" enctype="text/plain">` para poder enviar la información por email
    - Este atributo no es necesario cuando los datos se procesen internamente. 
  - *method* Define el método HTTP de transmisión de la información
    - `<form action="http://www.fictizia.com/formulario" method="GET">`menos popular, presenta ciertas limitaciones con la extensión de los datos y nos soporta archivos.
    - `<form action="http://www.fictizia.com/formulario" method="POST">` resulta más seguro y no tiene limitaciones en cuanto al volumen de datos.
    - Este atributo solo es necesario cuando los datos seran enviados a una url. 

- **Etiqueta &lt;input&gt;**
```html
  <form>
    Blog: <input type="url" name="blog" required>
    <input type="submit">
  </form>
```
  - Campo de texto para el usuario
  - Atributos:
    - *name*: Único para el elemento. Se usa como referencia al enviar los datos. No es lo mismo que *id* 
    - *size* Número de caracteres visibles en el campo. No limita al usuario, solo afecta a la visualización
    - *maxlength* Número máximo de caracteres permitidos.
    - *value* Valor por defecto en el campo de texto. El usuario puede modificarlo.
    - *readonly* No puede ser modificado por el usuario.
    - *placeholder* Muestra un texto de ayuda o sugerencia cuando el campo esta vacio.
    - *autofocus* Situa el foco directamente aquí.
    - *requiered* El usuario debera rellenar este campo para poder enviar el formulario
    - *pattern* Usa una expresión regular de JavaScript para validar el formulario
    - *type* Tipo de dato, incluye validación. 


- **Etiqueta &lt;textarea&gt;**
```html
  <form>
    <p>Comentarios:</p> 
    <textarea></textarea>
  </form>
```
  - Áreas de texto para el usuario
  - Ideales para sugerencias o comentarios
  - Atributos:
    - *cols* y *rows* obsoletos. La alternativa es css (*width* y *height*) 
    - *name* Único para el elemento. Se usa como referencia al enviar los datos. No es lo mismo que *id* 
    - *readonly* No puede ser modificado por el usuario.
    - *autofocus* Situa el foco directamente aquí.
    - *maxlength* Número máximo de caracteres permitidos.
    - *requiered* El usuario debera rellenar este campo para poder enviar el formulario
    - *placeholder* Muestra un texto de ayuda o sugerencia cuando el campo esta vacio.

- **Etiqueta &lt;select&gt;**
```html
  <form>
    <p>Tu serie favorita:</p> 
    <select>
      <option value="1">Lost</option>
      <option value="2">Breaking Bad</option>
      <option value="3">The Walking Dead</option>
    </select><br>
  
    <p>Tu serie favorita:</p> 
    <select multiple size="3">
      <option value="1">Lost</option>
      <option selected value="2">Breaking Bad</option>
      <option>The Walking Dead</option>
    </select>
  </form>
```
  - Nos permite hacer desplegables
  - Es necesario incluir la etiqueta *&lt;option&gt;* para representar las opciones
  - El atributo *value* de la etiqueta *&lt;option&gt;* nos permite códificar la opción elegida.
  - El atributo *selected* de la etiqueta *&lt;option&gt;* nos permite pre-determinadar esta opción. Por defecto es la primera
  - Atributos:
    - *multiple* permite al usuario hacer una selección multiple usando la tecla control
    - *size* permite mostrar la lista en un bloque


- **Etiqueta &lt;fieldset&gt;**
```html
  <form>
    <fieldset>
      <legend>Información personal</legend>
      Nombre: <input type="text"><br>
      Apellido: <input type="text"><br>
    </fieldset>
  </form>
```
  - Nos permite estructurar visualmente el formulario si es muy largo o complejo.
  - La etiqueta &lt;legend&gt; nos permite añadir un texto que defina el bloque de formulario donde nos encontramos


- **Etiqueta &lt;datalist&gt;**
```html
  <form>
  Serie Favorita: <input list="series">
  <datalist id="series">
      <option value="Lost">Lost</option>
      <option value="Breaking Bad">Breaking Bad</option>
      <option value="The Walking Dead">The Walking Dead</option>
      <option value="Modern Family">Modern Family</option>
      <option value="Doctor Mateo">Doctor Mateo</option>
  </datalist>
  </form>
```
  - Lista de sugerencias
  - Es necesario vincular la *id* de la etiqueta &lt;datalist&gt; con el atributo *list* de &lt;input&gt;
  
- **Etiqueta &lt;label&gt;**
```html
  <form>
    <label for="hombre">Hombre</label>
    <input type="radio" name="genero" id="hombre" value="hombre"><br>
        
    <label for="mujer">Mujer</label>
    <input type="radio" name="genero" id="mujer" value="mujer"><br>
        
    Otro (sin label)
    <input type="radio" name="genero" id="otro" value="otro"><br><br>
  </form>
```
  - Asocia un texto a un elemento del formulario 
  - Permite seleccionar un elemento desde el propio texto mejorando la usabilidad.
  - Es necesario vincular el *id* de la etiqueta &lt;input&gt; con el atributo *for* de &lt;label&gt;

### Formularios Avanzados

El atributo *type* de la etiqueta &lt;input&gt; ha sufrido una enorme ampliación con HTML5. Veamos algunos ejemplos clave:

- **Selección única**
```html
  <form>
    <fieldset>
      <legend>Información personal</legend>
      <label for="hombre">Hombre</label>
      <input type="radio" name="genero" id="hombre" value="hombre"><br>
              
      <label for="mujer">Mujer</label>
      <input type="radio" name="genero" id="mujer" value="mujer"><br>
  
      <label for="otro">Otro</label>
      <input type="radio" name="genero" id="otro" value="otro"><br><br>
    </fieldset><br>
    <fieldset>
      <legend>Forma de pago</legend>
      <label for="tarjeta">Tarjeta</label>
      <input type="radio" name="pago" id="tarjeta" value="tarjeta"><br>
              
      <label for="efectivo">Efectivo</label>
      <input type="radio" name="pago" id="efectivo" value="efectivo"><br>
  
      <label for="transferencia">Transferencia</label>
      input type="radio" name="pago" id="transferencia" value="transferencia"><br><br>
    </fieldset>        
  </form>
```
  - Se utiliza con `<input type="radio">`

- **Selección múltiple**
```html
  <form>
    Series Favoritas: <br>
    <input type="checkbox" name="series" value="Lost">Lost<br>
    <input type="checkbox" name="series" value="Breaking Bad">Breaking Bad<br>
    <input type="checkbox" name="series" value="The Walking Dead">The Walking Dead<br>
    <input type="checkbox" name="series" value="Modern Family">Modern Family<br>
    <input type="checkbox" name="series" value="Doctor Mateo">Doctor Mateo
  </form>
```
  - Se utiliza con `<input type="checkbox">`

- **Botón de RESET**
```html
  <form>    
    <fieldset>
      <legend>Información personal</legend>
        Nombre: <input type="text"><br>
        Apellido: <input type="text"><br>
    </fieldset><br>
    <button type="submit" value="Submit">Enviar</button>
    <button type="reset" value="Reset">Borrar!</button>
  </form>
```
  - Se utiliza con `<input type="reset">`

- **Campo oculto** 
```html
  <form>    
    Nombre: <input type="text"><br>
    <input type="hidden" name="secreto" value="shhh!">
  </form>

```
  - Se utiliza con `<input type="hidden">`

- **Archivos**
```html
  <form>    
    <fieldset>
      <legend>Avatar (max. 1 mb):</legend>     
      <input type="file" accept="image/*">
    </fieldset><br>
    <fieldset>
      <legend>CV (.pdf/.html):</legend>
       <input type="file" accept=".html, .pdf">
    </fieldset>
  </form>
```
  - Requiere de código adiccional 
  - Se utiliza con `<input type="file">`
  - Atributos: 
    - *accept* Determina el formato del archivo
      -  extensión de los archivos (.gif, .jpg, .png, .doc)
      -  categorias basadas en [media types](http://www.iana.org/assignments/media-types/media-types.xhtml) (audio/*, test/plain, etc...)

- **Contraseñas**
```html
  <form>    
    <fieldset>
      <legend>Bienvenido!</legend>     
      Usuario: <input type="text">
      Contraseña: <input type="password">           
    </fieldset><br>
  </form>
```
  - Se utiliza con `<input type="password">`
  - Este campo tiene caracteristicas de seguridad como evitar la copia, codificación de lo que escribimos, etc...
  - imprescindible para gestión de sesiones y usuarios

- **email**
```html
  <form>    
    <fieldset>
      <legend>Bienvenido!</legend>     
      Email: <input type="email" required>
      Contraseña: <input type="password" required>           
    </fieldset><br>
    <button type="submit" value="Submit">Entrar!</button>
  </form>

```
  - Se utiliza con `<input type="email">`
  - [soporte IE11+](http://caniuse.com/#feat=input-email-tel-url)

- **url**
```html
  <form>    
    <fieldset>
      <legend>Bienvenido!</legend>     
        Email: <input type="email" >
        Contraseña: <input type="password" >
        Web Personal: <input type="url" required>         
    </fieldset><br>
    <button type="submit" value="Submit">Guardar cambios!</button>
  </form>

```
  - Se utiliza con `<input type="url">`
  - [soporte IE11+](http://caniuse.com/#feat=input-email-tel-url)

- **Formato numérico**
```html
  <form>       
    Cantidad: <input type="number" name="cantidad" min="0" max="100">        
  </form>
```
  - Se utiliza con `<input type="number">`
  - Atributos:
  - *min* valor mínimo
  - *max* valor máximo
  - *step* valor del paso

- **Fechas**
```html
  <form>       
    Fecha completa: <input type="date"><br>
    Mes: <input type="month"><br>
    Semana: <input type="week"><br>    
  </form>
```
  - Se utiliza con `<input type="date">`,  `<input type="month">`, `<input type="week">`
  - [Soporte limitado](http://caniuse.com/#feat=input-datetime)

- **Horas**
```html
  <form>       
    Hora: <input type="time"><br>
    Hora y fecha(local): <input type="datetime"><br>
    Hora y fecha (local): <input type="datetime-local">
  </form>
```
  - Se utiliza con `<input type="datetime">`, `<input type="datetime-local">`
  - [Soporte limitado](http://caniuse.com/#feat=input-datetime)

- **Busquedas**
```html
  <form>       
    Buscar: <input type="search"><br>
  </form>
```
  - Se utiliza con `<input type="search">`
  - [soporte IE11+](http://caniuse.com/#search=search)

- **Colores**
```html
  <form>       
    colores! <input type="color"><br>
  </form>
```
  - Se utiliza con `<input type="color">`

- **Teléfono**
```html
  <form>       
    Teléfono <input type="tel">
  </form>
```
  - Se utiliza con `<input type="tel">`
  - [soporte IE11+](http://caniuse.com/#feat=input-email-tel-url)

- **Cursores/Rangos**
```html
  <form>       
    Rango <input type=range min=0 max=30 value=10 step=1>
  </form>
``` 
  - Se utiliza con `<input type="range">`
  - [soporte IE11+](http://caniuse.com/#feat=input-range)  
  - Atributos:
    - *min* valor mínimo
    - *max* valor máximo
    - *step* valor del paso
    - *value* valor por defecto

- **[Todos los tipos permitidos](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)**


### Malas Prácticas

**Maquetación usando tablas**
- [Demo - Ejemplo de Desarrollo web](http://www.desarrolloweb.com/articulos/ejemplos/tallerhtml/maquetatablas/)
- [DesarrolloWeb - Maquetar una página web con tablas (2006)](http://www.desarrolloweb.com/articulos/maquetacion-tablas-html.html)

### Ejercicios

**1 -** Crea una tabla para explicar todas las etiquetas que utilizamos para trabajar con tablas en html.
Objetivos:
- Escapar las etiquetas.
- Incluir una columna para explicar lo que hacer cada etiqueta.
- Incluir una columna para la documentación.
- incluir el link a la documentación de cada etiqueta.
- Incluir en &lt;tfoot&gt; el link a las [recomendaciones del W3C](https://www.w3.org/TR/html-markup/table.html).
- Incluir estos estilos en un archivo vinculado.
```css
    table {
      width: 600px;
      border: 1px solid black;
      border-collapse: collapse;
    }
    td {
      border: 1px solid black
    }
    th {
      border: 1px solid black
    }
    tfoot {
      text-align: center;
    }
```


```html
    <!-- Tu solución -->
```

**2 -** Vamos a construir la web de un restaurante inventado. 
- Navegación:
    - *index.html* Bienvenida y explicación de las especialidades de la casa, ofertas, incentivos, etc...
    - *contacto.html* Mostrar nuestra información de contacto, mapa (usando iframes), etc...
    - *carta.html* Menú realizado en una o diversas tablas con los platos, descripciones, alergenos y precios.
    - *adomicilio.html* Formulario completo para pedir para llevar la comida.
        - Datos del usuario ()
        - Elegir los platos
        - Botón de enviar / resetear

- Objetivos:
    - Menu de navegación común
    - Utilizar la imagenes como links
    - Utilizar etiquetas semánticas
    - Divertirnos haciendolo y compartiendo las dudas en los [issues de nuestro repositorio](https://github.com/Fictizia/Curso-Maquetacion-web-con-HTML5-y-CSS3_ed6/issues) 

```html
    <!-- Tu solución -->
```

