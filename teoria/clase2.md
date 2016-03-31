# Clase 2

### Características del HTML
- Extensión *.html*
- El navegador lo lee como una sola línea (espacio, tabulación y líneas)
- Flexible (soporte a errores y nuevas funcionalidades).
- Cada navegador interpretará el contenido de manera "ligeramente" distinta
- Etiquetas/etiquetas como base
- Jerarquía de etiquetas

### Comentarios
```html
    <!-- COMENTARIO -->
```
- No se interpretan
- No se pueden anidar
- En ocasiones es necesario escapar los carácteres *<* y *>*
```html
    &lt;!-- imitación --&gt;
```
   
### Etiquetas y atributos
- **Estructura (completa)**
```html
  <nombre atributo="valor">contenido</nombre>
```
- **Tipos de etiquetas**
  - *open/empty tag*
    - minoría 
  - *container tag*
    - mayoría
    - acumulativas
  
- **Atributos comunes**
  - *class (clase/Agrupación)*
  - *id (identificador único)*
  - *contenteditable (editable o no)*
  - *dir (sentido del texto)*
  - *draggable (se peude mover dentro del documento)*
  - *lang (idioma)*
  - *style (asignación de estilos)*
  
### Codificación
- En el HTML
```html
  <meta charset="utf-8">
  <!-- Antes de HTML5
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  -->
```
- Más usadas
  - UTF-8, ISO-8859-1, ISO-8859-15, ASCII...
  - [Todas](http://www.iana.org/assignments/character-sets/character-sets.xhtml)

### La estructura del documento HTML
- **Ejemplo mínimo viable**
```html
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Título</title>
  </head>
  <body>
  </body>
  </html>
```
- **DocType (DTD)**
  - Es la primera línea de cualquier documento HTML 
  - HTML5:
  ```html
    <!DOCTYPE html>
  ```
  - [Versiones anteriores](http://www.htmlhelp.com/tools/validator/doctype.html)
- **Etiqueta &lt;html&gt;**
  - Abre y cierra el documento.
  - Todo se engloba dentro de esta etiqueta
  - HTML5:
  ```html
    <!DOCTYPE html>
    <html>
      <!-- CONTNEIDO -->
    </html>
  ```
- **Etiqueta &lt;head&gt;**
  -  Información sobre el documento, cabecera
  -  No es obligatorio, aunque si muy recomendado
  -  Etiquetas interiores:
    - Title
      - Define el título
      - Obligatorio
      ```html
        <!DOCTYPE html>
        <html>
          <head>
            <title>Título de nuestro documento</title>
          </head>
          <!-- CONTNEIDO -->
        </html>
      ```
    - Base
      - Define un directorio base para las urls ralativas
      - Se incluye antes que otras referencias a urls
      ```html
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <title>Fictizia - Nuestro curso</title>
            <base href='http://www.fictizia.com/formacion/'>
          </head>
            <body>
              <p><a href='curso_frontend_html5_css3'>¡Nuestro Curso!</a></p>
            </body>
        </html>
      ```
    - Link
      - Permite incluir recursos externos como hojas de estilo.
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
      - Atributos
        - rel (relación)
          - *alternate (contenido alternativo, otros idiomas, etc...)*
          - *StyleSheet (Hoja de estilos)*
          - *prefetch (pre-cargar elementos)*
        - href (ubicación)
        - type (MIME)
        - media (dispositivos concretos)
    - Meta
      - Metadatos (autor, descripción, robots, customizados, etc...)
      ```html        
          <head>
        		<meta name="description" content="Un ejemplo de metadatos">
        		<meta name="keywords" content="HTML,CSS,curso,prueba">
        		<meta name="author" content="Ulises Gascón">
         		<meta charset="UTF-8">
            <title>Fictizia - Curso Maquetación</title>
          </head>

      ```        
      - Comandos (HTTP)
      ```html        
          <head>
            <!-- Refrescar cada 30 segundos -->
            <meta http-equiv="refresh" content="30">
            <!-- redireccionamiento a Fictizia.com sin esperar (0 segundos) -->
            <META http-equiv="refresh" content="0;URL=http://www.fictizia.com/">

          </head>
      ```             
- **Etiqueta &lt;body&gt;**
  - Contenido del documento


### Validación del HTML

- **Online**
  - [W3C - Markup Validation Service](https://validator.w3.org)
    - [Ejemplo - Google](https://validator.w3.org/nu/?doc=http%3A%2F%2Fwww.google.com%2F) 
  - [html5 - validator](https://html5.validator.nu/)
    - [Ejemplo - Google](https://html5.validator.nu/?doc=http%3A%2F%2Fgoogle.com)
- **Extensiones/Plugins**
  - [Sublime - W3CValidators](https://packagecontrol.io/packages/W3CValidators)
  - [Chrome - HTML Validator](https://chrome.google.com/webstore/detail/html-validator/cgndfbhngibokieehnjhbjkkhbfmhojo/related)

### Cambios en HTML5

- **Características**
  - Enfoque práctico y no académico
  - No más etiquetas y atributos de representación
  - Más etiquetas semánticas
  - Menos plugins (audio, canvas, video)
  - Validación de formularios
  - Paginas web y ahora aplicaciones web
  - Influenciado por WhatWG
  - Orientado a multimedia
  - Se mantiene la base
  - Compatibildiad mejorada
  - Evolución (Adios al XHTML)
  - el DOM forma parte del standard
  - Acceso Universal

- **Nuevos elementos**
  - *Time, progress, meter, nav, section, footer, header, mark, article, aside, figure, figcaption, audios, canvas, video...*
  - [Lista completa](https://html-differences.whatwg.org/#new-elements)

- **Elementos que cambian**
  - Input
  - [Lista completa](https://html-differences.whatwg.org/#changed-elements)

- **Elementos obsoletos**
  - *frame, frameset, noframes, basefont, font, center, big, strike, s, tt, acronym, applet, dir, isindex...* 
  - [Lista completa](https://html-differences.whatwg.org/#obsolete-elements)

- **Atributos obsoletos**
  - *align (en cabeceras)*
  - *alink, link, text, vlink (en body)*
  - *clear (en br)*
  - *width (en hr, table, th, pre)*
  - *type (en li, ol, ul)*
  - *hspace y vspace (en img y object)*
  - *background (body)*

- **[Lista completa de cambios](https://html-differences.whatwg.org/)**
    

### Ejercicios
- **1 -** Sube el esqueleto de una web html5 a gist.

- [Solución](https://gist.github.com/UlisesGascon/583902e2b2e63b232d88)
    
- **2 -** Crea una página web con todos los metadatos que ayuden a que mejorar el posicionamiento SEO
```html
	<!DOCTYPE html>
        <html>
          <head>
			<meta name="description" content="Un ejemplo de metas">
			<!-- NO NECESARIO PARA SEO
			<meta name="keywords" content="HTML,CSS,curso,prueba">
			-->
			<meta name="author" content="Ulises Gascón">
			<meta charset="UTF-8">
            <title>Fictizia - Curso Maquetación</title>
          </head>
		  <body>
		  </body> 
        </html>
```
    
- **3 -** Crea una página web que se refresque cada 30 segundos.
```html
        <!DOCTYPE html>
        <html>
          <head>
			<meta http-equiv="refresh" content="30">
			<meta charset="UTF-8">
            <title>Entramos en un bucle...</title>
          </head>
		  <body>
		  </body> 
        </html>
```

- **4 -** Valida los ejercicios anteriores usando [W3C - Markup Validation Service](https://validator.w3.org)