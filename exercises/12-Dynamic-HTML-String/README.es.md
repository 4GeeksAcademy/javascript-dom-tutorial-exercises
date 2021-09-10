# `12` String dinámico HTML 

Una de las cosas interesantes de javascript es que te permite crear string dinámicas en HTML durante el tiempo de ejecución, lo que significa que puedes crear HTML automáticamente mientras duermes. ¡Si! Tranquilo, ahora entenderás cómo...

Por favor, dale un vistazo a la siguiente string:

```javascript 
    let myString = "<p>Hello!</p> <strong>My friend</strong>";
```

Como seres humanos, sabemos que este string tiene el formato como un HTML porque tiene una etiqueta `<p>` y una `<strong>` dentro. Pero javascript no sabe eso, javascript solo entiende un string como una serie de caracteres, no importa si los caracteres se configuran de manera similar a HTML.

Pero, ¿qué pasa si se escribe ese string en un documento HTML durante el tiempo de ejecución? El navegador interpretará ese string como HTML (es lo que hacen los navegadores) y la representará como HTML, eliminando las etiquetas y aplicando su formato respectivo en el texto restante.

Aquí está el código que necesitas para imprimir cualquier string en el documento HTML:

```js
    let myString = "<p>Hello!</p> <strong>My friend</strong>";
    document.write(myString);
```
## 📝 Instrucciones:

Usando la función getFullYear del objeto `Date()`, cambia el contenido del string de la variable `myString` para que imprima el año de la fecha actual en el HTML.

### Resultado esperado:

![](../../.learn/assets/12-1.png)

### :mag_right: Importante:

+ Imprime el año actual utilizando el objeto de fecha, no establezcas el string en un año en particular, agrega(`append`) el año actual al final.
