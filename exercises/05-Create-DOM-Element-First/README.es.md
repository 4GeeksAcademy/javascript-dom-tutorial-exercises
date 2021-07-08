# `05` Crear el elemento DOM primero

Es posible crear un nuevo elemento DOM con Javascript con la función createElement.

```js
let elem = document.createElement("h1");
```

Después de crear cualquier elemento, debes agregarlo al DOM del sitio web si deseas mostrarlo dentro del sitio web. Ppara agregar el elemento al DOM usamos la función `appendChild`.

```js
    let elem = document.createElement("h1");
    elem.innerHTML = "Hello World";
    document.body.appendChild(elem);
```

### :mag_right: Importante:

La propiedad innerHTML de cualquier elemento DOM se usa para establecer el contenido HTML que se establecerá dentro de esa etiqueta HTML.

Don't worry you''ll get there!


## 📝 Instrucciones:

1. Usando la función `createElement`, crea un elemento Párrafo(`p`) con fondo (background) amarillo (`yellow`), establece el `innerHTML` en 'Hello World' y agrégalo al final del documento.

### 💡 Pista:

- Crea un elemento `p`.

- Establece el innerHTML.

- Recuerda configurar el estilo amarillo (`yellow`).

- Agrega el `appendChild` al documento.