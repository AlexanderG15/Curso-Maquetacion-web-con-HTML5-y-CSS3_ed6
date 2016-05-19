# Clase 14

### Bordes redondeados
```css
div {
  border: 2px solid;
  border-radius: 50%;
}

article {
  border-top-left-radius: 9px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 3px;
}
```
- [Soporte](http://caniuse.com/#feat=border-radius)
- **Valores**
    - px, %, etc...	- *Define la curva*


### Degradados
- [Soporte](http://caniuse.com/#feat=css-gradients)
- [Generador](http://www.cssmatic.com/es/gradient-generator)
- Tipos:
  - Lineal
  - Circular
  - Repetitivo

### Degradado Lineal
![img](https://developer.mozilla.org/files/3537/linear-gradient.png)
```css
.arcoiris { 
  background: linear-gradient(to right,red,orange,yellow, green, blue,indigo,violet); 
}

.arcoirisPorcentajes { 
  background: linear-gradient(to right, red, orange 60%, yellow, green, blue 75%, indigo, violet); 
}
.transparente-degradado{
  background-image: linear-gradient(to bottom right, red, rgba(255,0,0,0));
  width:300px;
  height:300px;
}
```
- Sintaxis:
  -  dirección *Arriba -> abajo por defecto*
    - usando direcciones: *to right, to left top, to xxx*
    - usando ángulos: *45deg*
    - colores: *inicial -> (intermedios) -> final*


### Degradado Radial
![img_radial](https://developer.mozilla.org/files/3795/radial%20gradient.png)
```css
.radial {
  background: radial-gradient(red, yellow, rgb(30, 144, 255));
}
```
- Sintaxis:
  - Forma: *circle, ellipse, nada*
  - radio/forma *ellipse x-axis y-axis, circle radius*
  - colores: *inicial -> (intermedios) -> final*

### Degradado Repetitivo
```css
.repetido {
  background: repeating-linear-gradient(to top left, red, red 5px, white 5px, white 10px);
}
```

### Degradado Ejemplos
- [Ángulos](http://www.w3schools.com/css/tryit.asp?filename=trycss3_gradient-linear_angles)
- [Colores y porcentajes](http://www.w3schools.com/css/tryit.asp?filename=trycss3_gradient-linear_cs)
- [Repeticiones lineales](http://www.w3schools.com/css/tryit.asp?filename=trycss3_gradient-linear_repeating)
- [Repeticiones radiales](http://www.w3schools.com/css/tryit.asp?filename=trycss3_gradient-radial_repeating)
- [Degradado radial](http://www.w3schools.com/css/tryit.asp?filename=trycss3_gradient-radial_shape)
- [Degradado radial con porcentajes](http://www.w3schools.com/css/tryit.asp?filename=trycss3_gradient-radial2)


### Ejercicios

Desarrolla una clase general para poder incluir un ribbon en tu diseño, y algunas clases secundarias para poder determianr el color (rojo, verde, azul, amarillo, negro) 

- [Base](http://codepen.io/ulisesgascon/pen/02b04db29746a656c5f2ae077008b9b8/)

```html
<!-- Solución -->
```
