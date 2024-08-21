---
tutorial: "https://www.youtube.com/watch?v=ZUATl2g00Uk"
---


# `11` Dynamic HTML String

Una de las cosas interesantes de JavaScript es que te permite crear string dinámicas en HTML durante el tiempo de ejecución, lo que significa que puedes crear HTML automáticamente mientras duermes. ¡Sí! Tranquilo, ahora entenderás cómo...

Por favor, dale un vistazo al siguiente string:

```js
let myString = "<p>Hello!</p> <strong>My friend</strong>";
```

Como seres humanos, sabemos que este string tiene el formato como un HTML porque tiene una etiqueta `<p>` y una `<strong>` dentro. Pero JavaScript no sabe eso, JavaScript solo entiende un string como una serie de caracteres, no importa si los caracteres se configuran de manera similar a HTML.

¿Qué pasa si se escribe ese string en un documento HTML durante el tiempo de ejecución? El navegador interpretará ese string como HTML (es lo que hacen los navegadores) y la representará como HTML, eliminando las etiquetas y aplicando su formato respectivo en el texto restante.

Aquí está el código que necesitas para imprimir cualquier string en el documento HTML:

```js
let myString = "<p>Hello!</p> <strong>My friend</strong>";
document.write(myString);
```
## 📝 Instrucciones:

1. Usando la función `getFullYear()` del objeto `Date()`, cambia el contenido del string de la variable `myString` para que imprima el año de la fecha actual en el HTML.

## 💻 Resultado esperado:

![Resultado esperado](../../.learn/assets/12-1.png)

## 💡 Pista:

+ Imprime el año actual utilizando el objeto `Date()`, no establezcas el string en un año en particular, agrega el año actual al final del string.
