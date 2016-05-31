# Clase 18

### Multimedia

**Audio**
```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```
- [ejemplo](http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_audio)
- [Compatibilidad](http://caniuse.com/#feat=audio)
    - [Wav](http://caniuse.com/#feat=wav)
    - [mp3](http://caniuse.com/#feat=mp3)
    - [Opus](http://caniuse.com/#feat=opus)
    - [Ogg Vorbis](http://caniuse.com/#feat=ogg-vorbis)
    - [AAC](http://caniuse.com/#feat=aac)
- Opciones
    - autoplay	*Arranca automaticamente*
    - controls	*Muestra/oculta los controles*
    - loop	*En bucle... termina y empieza de nuevo*
    - muted	*Habilitar/Deshabilitar el sonido*
    - preload	*Precargado none | auto | metadata*
    - src	*URL del video*
- Librerías
    - [Buzz](http://buzz.jaysalvat.com/)
    - [soundmanager2](http://www.schillmania.com/projects/soundmanager2/)
        - [cassette-tape](http://www.schillmania.com/projects/soundmanager2/demo/cassette-tape/) 
    - [wavesurfer-js](http://wavesurfer-js.org/)
        - [ejemplos](http://wavesurfer-js.org/examples/)
    - [https://p5js.org/](https://p5js.org/) 
        - [Modulador](https://p5js.org/examples/examples/Sound_Amplitude_Modulation.php) 
    - [codebasehero - music player](http://www.codebasehero.com/2011/06/html-music-player/)
        - [Demo](http://www.codebasehero.com/files/music-player/demo/)

**Video**
```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```
- [Ejemplo](http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_video)
- [Compatibilidad](http://caniuse.com/#feat=video)
    - [WebM](http://caniuse.com/#feat=webm)
    - [MPEG-4/H.264](http://caniuse.com/#feat=mpeg4)
    - [Ogg/Theora](http://caniuse.com/#feat=ogv)
    - [WebVTT](http://caniuse.com/#feat=webvtt)
- Opciones
    - autoplay	*Arranca automaticamente*
    - controls	*Muestra/oculta los controles*
    - height	*Alto*
    - loop	*En bucle... termina y empieza de nuevo*
    - muted	*Habilitar/Deshabilitar el sonido*
    - poster	*Imagen que se muestra como carátula*
    - preload	*Precargado none | auto | metadata*
    - src	*URL del video*
    - width	*Ancho*
- Librerías
    - [JQPlayer](https://github.com/vebersol/jQPlayer)
    - [video.js](http://videojs.com/)
    - [popcornjs](http://popcornjs.org/)
    - [jplayer](http://jplayer.org/)
    - [mediaelementjs](http://mediaelementjs.com/)
    - [fitvidsjs](http://fitvidsjs.com/)
    - [amalia.js](https://ina-foss.github.io/amalia.js/)
        - [Ejemplo con plugin de diginpix](http://diginpix.ina.fr/en/documents/2305848667564670976/stade-2-emission-du-30-mai-2010.html)   


### Jquery: Modificando contenido
```javascript
    $("button").click(function(){
        $("p").html("Hello <b>world</b>!");
    });
```
- Remplaza el contenido de un elemento/s por otro
- [Ejemplo](http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_set)
- [Documentación - .html() en Jquery](http://api.jquery.com/html/)


### JQuery Plugins de Hoy

- **Background videos**
- Librerías
    - [Tabular](http://www.seanmccambridge.com/tubular/)
    - [BigVideo](http://dfcb.github.io/BigVideo.js/)
- Alternativas
    - [Should I use a video as a background?](https://css-tricks.com/should-i-use-a-video-as-a-background/)


### Ejercicios

1 - Realiza una web para promocionar a un artista musical. Incluye audios y/o videos. :-)
```html
  <!-- Tu solución -->
```

