---
tutorial: "https://www.youtube.com/watch?v=RTeT-w81vlc"
---


# `05` Create DOM Element (1)

Es posible crear un nuevo elemento del DOM desde JavaScript con la función `createElement()`.

```js
let elem = document.createElement("h1");
```

Después de crear cualquier elemento, debes agregarlo al DOM del sitio web si deseas mostrarlo dentro del sitio web. Para agregar el elemento al DOM usamos la función `appendChild()`.

```js
let elem = document.createElement("h1");
elem.innerHTML = "Hello World";
document.body.appendChild(elem);
```

## 📝 Instrucciones:

1. Usando la función `createElement()`, crea un elemento párrafo (`p`) con fondo (background) amarillo (`yellow`), establece el `innerHTML` como 'Hello World' y finalmente agregalo al documento (`appendChild()`).

## 💻 Resultado esperado:

+ Al final tu website debería verse así:

![exercise 5 expected preview](../../.learn/assets/05.png)

## 💡 Pistas:

+ Crea un elemento `p`.

+ Establece el `innerHTML`.

+ Recuerda configurar el estilo amarillo (`yellow`).

+ Agrega el elemento al documento utilizando la función `appendChild()`.

## 🔎 Importante:

+ La propiedad `innerHTML` de cualquier elemento DOM se usa para establecer el contenido HTML que se establecerá dentro de esa etiqueta HTML ¡No te preocupes, no es tan complicado!
