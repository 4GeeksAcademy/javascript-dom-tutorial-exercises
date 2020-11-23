# `09` Eliminar elemento DOM Parte dos

Es posible recuperar todos los elementos secundarios de un elemento DOM, para eso debes usar la propiedad childNodes del elemento.
Ejemplo:
```js
    let list = document.querySelector("#myList");
    let childs = list.childNodes;   
```

![](http://i.imgur.com/LEyjPMW.png"") 

## 📝 Instrucciones:

Usando la propiedad childNodes, elimina el segundo LI de la lista `#parentLI`.

### 💡 Pista:

childNodes devuelve un arreglo de LI, puedes acceder al segundo elemento de ese arreglo y eliminarlo del DOM.

### Nota:
Si te preguntas por qué necesitas usar el 3 para eliminar el segundo LI en lugar del índice 2, aquí está la respuesta: http://stackoverflow.com/questions/24589908/childnode-of-li-element-gives-text-ul-ul-text