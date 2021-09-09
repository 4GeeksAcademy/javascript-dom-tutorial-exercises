# `09` Eliminar elemento DOM: Parte dos

Es posible recuperar todos los elementos secundarios de un elemento DOM, para eso debes usar la propiedad `childNodes` del elemento. Por ejemplo:

```js
    let list = document.querySelector("#myList");
    let childs = list.childNodes;   
```

![image 9-1](../../.learn/assets/09-1.png) 

## 📝 Instrucciones:

1. Usando la propiedad `childNodes`, elimina el segundo LI de la lista `#parentLi`.

### 💡 Pista:

`childNodes` devuelve un arreglo de `li`, puedes acceder al segundo elemento de ese arreglo y eliminarlo del DOM.

### :mag:_right: Importante:

+ Si te preguntas por qué necesitas usar el 3 para eliminar el segundo `li` en lugar del índice 2, aquí está la respuesta: http://stackoverflow.com/questions/24589908/childnode-of-li-element-gives-text-ul-ul-text