# `07` Create DOM list of li

Una excelente manera de crear estructuras HTML para tu sitio web es concatenar varios strings de HTML en un solo string de HTML más grande, y luego, agregar ese string al `innerHTML` de cualquier elemento que ya sea parte del HTML. Por ejemplo:

```js
let htmlString = '<div>' + 'Hello World' + '</div>';
```

## 📝 Instrucciones:

1. Establece la variable `liststring` con el valor necesario para que el siguiente código HTML se imprima en el `body` usando innerHTML:

```html
<ul>
    <li>First Item</li>
    <li>Second Item</li>
    <li>Third Item</li>
</ul>
```

## 💡 Pista:

+ Recuerda que el intérprete del navegador ignora los espacios en blanco y la sangría.
