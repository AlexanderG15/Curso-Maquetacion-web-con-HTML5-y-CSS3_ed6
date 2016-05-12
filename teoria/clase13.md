# Clase 13

### Transformaciones
```css
div {
    -ms-transform: rotate(7deg); /* IE 9 */
    -webkit-transform: rotate(7deg); /* Chrome, Safari, Opera */
    transform: rotate(7deg);
}
```
- **Valores**
    - none	- *Elimina la transformación*
    - matrix(n,n,n,n,n,n)	- *Define una transformación 2D usando una matriz de 6 valores*
      - [Ejemplos](http://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_matrix) 
    - matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)	- *Define una transformación 2D usando una matriz de 16 valores (4x4)*
    - translate(x,y)	- *Define un desplazamiento en 2D*
      - [Ejemplos](http://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_translate) 
    - translate3d(x,y,z)	- *Define un desplazamiento en 3D*
    - translateX(x)	- *Define un desplazamiento en el eje X*
      - [Ejemplos](http://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_translatex) 
    - translateY(y)	- *Define un desplazamiento en el eje Y*
      - [Ejemplos](http://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_translatey) 
    - translateZ(z)	- *Define un desplazamiento en el eje Z*
    - scale(x,y)	- *Define una escala en 2D*
      - [Ejemplos](http://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_scale) 
    - scale3d(x,y,z)	- *Define una escala en 3D*
    - scaleX(x)	- *Define una escala en el eje X*
      - [Ejemplos](http://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_scalex) 
    - scaleY(y)	- *Define una escala en el eje Y*
      - [Ejemplos](http://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_scaley) 
    - scaleZ(z)	- *Define una escala en el eje Z*
    - rotate(angle)	- *Define una rotación en 2D, el ángulo se especifica en el parámetro*
      - [Ejemplos](http://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_rotate) 
    - rotate3d(x,y,z,angle)	- *Define una rotación en 3D*
    - rotateX(angle) -	*Define una rotación en el eje X*
      - [Ejemplos](http://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_rotatex) 
    - rotateY(angle) -	*Define una rotación en el eje Y*
      - [Ejemplos](http://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_rotatey) 
    - rotateZ(angle) -	*Define una rotación en el eje Z*
      - [Ejemplos](http://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_rotatez) 
    - skew(x-angle,y-angle) -	*Siesga el ángulo en 2D en ambos ejes*
      - [Ejemplos](http://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_skew) 
    - skewX(angle) -	*Siesga el ángulo en el ángulo del eje X*
      - [Ejemplos](http://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_skewx) 
    - skewY(angle) -	*Siesga el ángulo en el ángulo del eje Y*
      - [Ejemplos](http://www.w3schools.com/cssref/playit.asp?filename=playcss_transform_skewy) 
    - perspective(n) -	*Define la perspectiva en 3D*
- **2D**
  - [Soporte](http://caniuse.com/#feat=transforms2d)
- **3D**
  - [Soporte](http://caniuse.com/#feat=transforms3d)
  - [Intro to CSS 3D transforms By David DeSandro](http://desandro.github.io/3dtransforms/)
  - [Demo](http://thewebrocks.com/demos/3D-css-tester/)
 
  
### Animaciones
```css
div {
    width: 100px;
    height: 100px;
    background-color: red;
    position: relative;
    -webkit-animation-name: example; /* Chrome, Safari, Opera */
    -webkit-animation-duration: 4s; /* Chrome, Safari, Opera */
    animation-name: example;
    animation-duration: 4s;
}
@keyframes example {
    0%   {background-color:red; left:0px; top:0px;}
    25%  {background-color:yellow; left:200px; top:0px;}
    50%  {background-color:blue; left:200px; top:200px;}
    75%  {background-color:green; left:0px; top:200px;}
    100% {background-color:red; left:0px; top:0px;}
}
```
- **animation**
    - *Agrupador (orden)*
        1. animation-name: example;
        2. animation-duration: 5s;
        3. animation-timing-function: linear;
        4. animation-delay: 2s;
        5. animation-iteration-count: infinite;
        6. animation-direction 
- **animation-name**
    - Define el nombre de la animación 
- **animation-duration**
    - Valores
        - 4s - *El tiempo que dura la animación* 
- **animation-timing-function**
    - Valores: 
        - ease - *Empieza despacio, luego rápido y termina despacio. Valor por defecto*
        - linear - *Mantiene la misma velocidad*
        - ease-in - *Empieza despacio*
        - ease-out - *Termina despacio*
        - ease-in-out - *Empieza y termina despacio*
        - cubic-bezier(n,n,n,n) - *Define la curva de velocidad. [Generador](http://cubic-bezier.com/#.17,.67,.83,.67)*
        - [DEMO](http://www.w3schools.com/css/tryit.asp?filename=trycss3_animation_speed)
- **animation-delay**
    - Valores:
        - 1s - *Retrado al comenzar la animación en segundos* 
- **animation-iteration-count**
    - Valores
        - Numero entero
        - infinity - *Infinitamente*
- **animation-direction**
    - Valores:
        - alternate - *Primero hacia delante, luego hacia atras, etc...*
        - reverse - *Invierte la animación*
- **animation-play-state**
    - Valores:
        - paused - *detenida*
        - running - *reproduciendose*
- **@keyframes**
    - Valores:
        - animationname - *Nombre de la animación a la que hace referencia*
        - keyframes-selector - *from {} to {} o 0%{} - 100%{}*
        - css-styles - *Estilos*

### Ejercicios:

**1 -** Realiza una versión de esta portada con html y css
- Extra: las animaciones esta más que permitidas :-)

![Bauhaus_color_block](http://3.bp.blogspot.com/_5AO-vZRiTM4/TQpfb7LTYdI/AAAAAAAADus/65dlpkpQ1Dc/s1600/Bauhaus%2Bcolorblock.png)

```html
    <!-- Tu solución -->
```
