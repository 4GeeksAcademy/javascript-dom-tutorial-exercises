---
tutorial: "https://www.youtube.com/watch?v=w2WfYQ8TYUo"
---


# `08.2` Remove DOM element

Es posible recuperar todos los elementos hijos de un elemento del DOM, para eso debes usar la propiedad `childNodes` del elemento. Por ejemplo:

```js
let list = document.querySelector("#myList");
let childs = list.childNodes;   
```

![image 9-1](../../.learn/assets/09-1.png) 

Observa que los elementos hijos de un elemento no necesariamente son solo los elementos HTML que están dentro de él (como `<li></li>`), sino que pueden ser cualquier elemento que esté dentro. Para comprobarlo, puedes utilizar `console.log` con los `childNodes` del elemento `<ul>` en este ejercicio.

## 📝 Instrucciones:

1. Con la información que acabamos de leer, usando la propiedad `childNodes`, elimina el segundo `<li>` de la lista `#parentLi`.

## 💡 Pistas:

+ `childNodes` devuelve un array de `<li>`, puedes acceder al segundo elemento de ese array con el index y eliminarlo del DOM.

## 🔎 Importante:

+ Si te preguntas por qué necesitas usar el index 3 para eliminar el segundo `<li>` en lugar del index 1, aquí está la respuesta: http://stackoverflow.com/questions/24589908/childnode-of-li-element-gives-text-ul-ul-text

+ Ahora repite el ejercicio reemplazando `childNodes` con `children` y haz un `console.log()`, observa el resultado y elimina el segundo `<li>`. ¿Te das cuenta de algo?
