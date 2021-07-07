# `06` Crea un elemento DOM en segundo lugar

En el ejercicio anterior vimos cómo crear un elemento DOM HTML usando las funciones `createElement` y `appendChild`. Hay otra forma de agregar un elemento al HTML del sitio web: `innerHTML`.

La propiedad `innerHTML` se usa para ESTABLECER el contenido html dentro de cualquier elemento DOM, por ejemplo, si queremos agregar un nuevo elemento `h1` al `body` del sitio web, podemos hacerlo:

```js
    document.body.innerHTML = "<h1>Hello World</h1>";
```

## 📝 Instrucciones:

1. Inserta una imagen con la fuente "http://placehold.it/350x150" en el `body`.

### 💡 Pista:

- Aquí está la documentación de la propiedad innerHTML: http://www.w3schools.com/jsref/prop_html_innerhtml.asp