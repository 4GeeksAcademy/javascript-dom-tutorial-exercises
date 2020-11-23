# `05` Crear el elemento DOM primero

Es posible crear un nuevo elemento DOM con Javascript con la función createElement.
```js
let elem = document.createElement("H1");
```

Después de crear cualquier elemento, debes agregarlo al DOM del sitio web si deseas mostrarlo. Dentro del sitio web, para agregar el elemento al DOM usamos la función appendChild.

```js
    let elem = document.createElement("H1");
    elem.innerHTML = "Hello World";
    document.body.appendChild(elem);
```

Nota: la propiedad innerHTML de cualquier elemento DOM se usa para establecer el contenido HTML que se establecerá dentro de esa etiqueta HTML.


## 📝 Instrucciones:

Usando la función createElement, crea un elemento Párrafo con fondo amarillo, establezca innerHTML en 'Hello World' y agregalo al final del documento.

### 💡 Pista:
- Crea un elemento P
- Establece el innerHTML
- Recuerda configurar el estilo amarillo
- Agrega el appendChild al documento