---
tutorial: "https://www.youtube.com/watch?v=8u2yrg_AQAM"
---


# `03` Change Div Background

En este sitio web HTML, dentro del `<body>` tenemos un `<div>` con el `id='myDiv'`

Intenta esto:

+ Usando JavaScript, cambia el fondo (background) de ese `div` a `yellow`.

+ Puedes configurar cualquier estilo CSS en cualquier elemento DOM utilizando la propiedad `element.style`.

Por ejemplo, Para cambiar el fondo de un elemento, necesitamos establecer la propiedad `element.style.background` con el color que queramos.

```js
// 1. Consulta (query) el elemento
let aux = document.querySelector('#anyElement');

// 2. Establece el color del fondo (background)
aux.style.background = "blue";
```

Aquí puedes leer sobre el [objeto style del DOM](http://www.w3schools.com/jsref/dom_obj_style.asp)

## 📝 Instrucciones:

1. El color de fondo de `myDiv` es verde por defecto. Cambia el color de fondo (`background`) a amarillo (`yellow`).
