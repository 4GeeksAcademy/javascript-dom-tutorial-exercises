<!-- hide -->
<div align="center">

# Aprende cómo manipular el DOM con JavaScript

[![certificado por 4Geeks Academy](https://img.shields.io/badge/certified%20by-4Geeks%20Academy-2563eb)](https://4geeks.com/es/interactive-exercise/the-dom-exercises-es)
[![autocorregido con LearnPack](https://img.shields.io/badge/autograded-LearnPack-2563eb)](https://github.com/learnpack/learnpack)
[![abrir en Codespaces](https://img.shields.io/badge/open%20in-Codespaces-fb5a1f)](https://codespaces.new/?repo=4GeeksAcademy/javascript-dom-tutorial-exercises)

![Imagen de portada del tutorial: el texto "Learn The DOM interactive" junto al logo hexagonal amarillo de JavaScript](https://raw.githubusercontent.com/4GeeksAcademy/javascript-dom-tutorial-exercises/HEAD/preview.png)

</div>

*Estas instrucciones [también están disponibles en 🇺🇸 inglés](https://github.com/4GeeksAcademy/javascript-dom-tutorial-exercises/blob/HEAD/README.md).*
<!-- endhide -->

Este tutorial interactivo enseña a manipular el DOM con JavaScript puro a lo largo de 15 carpetas de ejercicios: una introducción y 14 retos autocorregidos. Practicarás `querySelector`, `createElement`, `appendChild`, `innerHTML`, `removeChild`, `childNodes` y `addEventListener`, y terminarás construyendo una lista de tareas funcional. Cada ejercicio corregido trae su `index.html`, su `styles.css`, su `index.js`, un README bilingüe y un archivo de tests de Jest. Duración estimada: 6 horas. Dificultad: fácil.

<!-- hide -->
## 📋 Ficha del tutorial

+ **Dificultad:** fácil — es el cuarto paso de la ruta recomendada que aparece más abajo.

+ **Duración estimada:** 6 horas.

+ **Ejercicios:** 15 carpetas dentro de `exercises/` — `00-Welcome` (solo lectura) y 14 ejercicios con tests automáticos.

+ **Tecnologías:** JavaScript puro (sin frameworks), HTML y CSS. No hay build ni `npm install` dentro de los ejercicios.

+ **Corrección:** `isolated` — cada ejercicio se corrige por separado, con Jest ejecutándose sobre jsdom.

+ **Idiomas:** todos los ejercicios tienen `README.md` (inglés) y `README.es.md` (español).

+ **Soluciones:** los 14 ejercicios corregidos incluyen un archivo `solution.hide.js` de referencia.
<!-- endhide -->

## 🎯 ¿Qué vas a aprender?

El DOM (Document Object Model) es el puente entre el HTML que escribes y el JavaScript que lo modifica mientras la página está en marcha. Al terminar estos ejercicios sabrás:

+ Seleccionar cualquier elemento de la página con [`document.querySelector`](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector) y leer sus propiedades, como el `id`.

+ Cambiar el CSS desde JavaScript a través del objeto `element.style` (`background`, `float` y cualquier otra propiedad).

+ Crear etiquetas nuevas con [`document.createElement`](https://developer.mozilla.org/es/docs/Web/API/Document/createElement) e insertarlas con [`appendChild`](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild).

+ Montar HTML como texto e inyectarlo con [`innerHTML`](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML) o con `document.write`.

+ Borrar elementos con `removeChild` y entender por qué `childNodes` y `children` no devuelven lo mismo.

+ Responder al usuario con [`addEventListener`](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener) para eventos de `click`, `change` y teclado, actualizando la página sin recargarla.

## 👀 ¿Qué vas a construir?

`exercises/00-Welcome` es una introducción corta y sin test. Las otras 14 carpetas son ejercicios corregidos, cada uno una web diminuta que tienes que terminar:

+ **`01` Hello World** — escribe el JavaScript que lanza un `alert` con el texto `Hello World`.

+ **`02` Select DOM Element** — selecciona el `<h1>` con `querySelector` y muestra su `id` en un alert.

+ **`03` Change Div Background** — cambia el fondo de `#myDiv`, que empieza en verde, a `yellow`.

+ **`04` Move DOM Element** — mueve el div `#wulu` poniendo su propiedad CSS `float` en `right` desde JavaScript.

+ **`05` Create DOM Element (1)** — crea un `<p>` con fondo amarillo y el texto "Hello World", y añádelo al body.

+ **`06` Create DOM Element (2)** — mete una etiqueta `<img>` dentro del `<body>` usando la propiedad `innerHTML`.

+ **`07` Create DOM list of li** — rellena una variable para que el body muestre un `<ul>` con exactamente tres `<li>`.

+ **`08.1` Remove DOM Element** — elimina el segundo `<li>` llamando a `removeChild` desde su `parentNode`.

+ **`08.2` Remove DOM Element** — haz lo mismo, pero llegando al elemento a través de la colección `childNodes` de `#parentLi`.

+ **`09` Render on Click** — crea un `<div>` amarillo con "Hello World" y añádelo al body cuando se hace clic en `#superDuperButton`.

+ **`10` Add li on Click** — añade un `<li>` nuevo a `#myList` en cada clic del botón.

+ **`11` Dynamic HTML String** — concatena el año actual, sacado de `new Date().getFullYear()`, dentro del texto que se imprime con `document.write`.

+ **`12` Add Options to the Select** — recorre un array de 7 países, crea un `<option>` por cada uno, añádelos a `#mySelect` y muestra en un alert el país que elija el usuario en el evento `change`.

+ **`13` Todo List** — el proyecto final: el HTML y el CSS ya están hechos y tú escribes el JavaScript que añade una tarea al pulsar Enter y la borra al hacer clic en el icono de la papelera.

Los ejercicios corren dentro de LearnPack, así que editas el archivo, le das a ejecutar y ves el resultado al lado de las instrucciones:

![Demostración animada del ejercicio "Add Options to the Select" dentro de la interfaz de LearnPack, con el botón de ejecutar y el desplegable de países que rellena el JavaScript](https://raw.githubusercontent.com/4GeeksAcademy/javascript-dom-tutorial-exercises/HEAD/.learn/assets/13-1.gif)

## 🎓 ¿Qué necesitas saber antes de empezar?

No hace falta saber nada de DOM, pero sí se da por hecho que ya manejas:

+ **HTML básico**: etiquetas, atributos y sobre todo el atributo `id`, porque casi todos los ejercicios seleccionan elementos por su id.

+ **CSS básico**: propiedades como `background`, `float` o `color`, que aquí vas a aplicar desde JavaScript en vez de desde la hoja de estilos.

+ **JavaScript básico**: variables, strings, concatenación, bucles `for` y funciones. El ejercicio `12` necesita un bucle y el `13` necesita funciones.

Los eventos se introducen poco a poco, así que los ejercicios `09`, `10`, `12` y `13` te sirven también como primer contacto con `addEventListener`.

## ✅ ¿Cómo funciona la corrección automática?

14 de las 15 carpetas tienen un archivo `tests.js`, así que recibes feedback inmediato en casi todo lo que escribes. La corrección es `isolated`: cada ejercicio se evalúa por su cuenta con [Jest](https://jestjs.io/), que ejecuta la página en un navegador simulado (jsdom), y con `@testing-library/dom` disparando clics, eventos `change` y pulsaciones de tecla reales en los ejercicios `09`, `10`, `12` y `13`.

Los tests comprueban tres cosas distintas, y viene muy bien saber cuál es cuál:

+ **El resultado en el DOM.** Por ejemplo, el ejercicio `07` cuenta que `ul > li` devuelva exactamente 3 elementos, y el `10` comprueba que `#myList` tenga 4 hijos después del clic.

+ **Las funciones que llamaste.** Varios ejercicios sustituyen `document.querySelector` o `document.createElement` por un mock y cuentan las llamadas: el ejercicio `12` exige exactamente 7 llamadas a `createElement`, y el `09` y el `10` exigen exactamente una.

+ **Tu código fuente, leído como texto.** El ejercicio `06` busca en tu archivo el literal `body.innerHTML`, el `08.2` busca `childNodes`, `removeChild` y el índice `[3]`, y el `11` usa expresiones regulares para confirmar que escribiste `new Date()` y `.getFullYear()`.

Por culpa de esa tercera categoría, una solución que se ve perfecta en el navegador puede seguir fallando. Los tests son estrictos a propósito: toma un test en rojo como una pista sobre la técnica que el ejercicio quiere que practiques, no como una sentencia sobre tu código.

Si te atascas, cada ejercicio corregido incluye un `solution.hide.js` con una solución de referencia que funciona.

## 💡 ¿Qué errores conviene evitar?

Estas son las trampas que hacen fallar un ejercicio aunque la página se vea bien en pantalla:

+ **Cambiar `querySelector` por `getElementById` en el ejercicio `02`.** Ese test sustituye `document.querySelector` por un mock y comprueba que se llamó una vez con `#theTitle`, así que con `getElementById` no pasa. Ojo, los ejercicios `09` y `10` son el caso contrario: su código de partida ya usa `getElementById` para el botón, y ahí está bien.

+ **Añadir una llamada extra a `querySelector`.** Los ejercicios `03`, `04` y `08.2` comprueban que `document.querySelector` se llamó exactamente una vez. En el `03` y el `04` el archivo de partida ya trae esa llamada, así que si vuelves a buscar el elemento el test se pone en rojo; en el `08.2` esa única llamada la escribes tú.

+ **Usar el índice equivocado en el ejercicio `08.2`.** Borrar `children[1]` da el mismo resultado visual, pero el test busca `[3]` en tu código, que es la posición del segundo `<li>` dentro de `childNodes` cuando se cuentan también los nodos de texto de los espacios.

+ **Tocar el código marcado como intocable.** En el ejercicio `07` la última línea lleva el comentario "Do not modify after this line": tú solo asignas la variable `listString`. En el `13` la pista es explícita: se edita únicamente `index.js`, nunca el HTML ni el CSS.

+ **Escribir el año a mano en el ejercicio `11`.** Poner `2026` funciona a la vista pero falla: el test exige `new Date()` y `.getFullYear()` en tu código, exactamente una llamada a `document.write(myString)` y que se conserve el texto original de `myString` al principio.

+ **Contar mal las opciones del ejercicio `12`.** El array tiene 7 países, así que `createElement` debe ejecutarse 7 veces, pero `#mySelect` acaba con 8 hijos porque el `<option>` de "Select your country" ya venía en el HTML.

+ **Crear el elemento fuera del listener en los ejercicios `09` y `10`.** `createElement` tiene que ejecutarse cuando ocurre el clic, no cuando se carga el archivo, o el recuento de llamadas falla.

## ❓ Preguntas frecuentes

### ¿Necesito saber JavaScript antes de empezar con el DOM?

Sí, lo básico. Conviene que te muevas con soltura entre variables, strings, concatenación, funciones y bucles `for` antes de llegar al ejercicio `12`. Si algo de eso te suena a chino, haz primero el [tutorial de JavaScript para principiantes](https://4geeks.com/es/interactive-exercise/ejercicios-javascript-para-principiantes) y vuelve.

### ¿Cuál es la diferencia entre `createElement` e `innerHTML`?

Las dos añaden HTML a la página y aquí practicas ambas. `createElement` crea un nodo real del DOM que puedes configurar desde JavaScript antes de insertarlo con `appendChild`, que es lo que pide el ejercicio `05`. `innerHTML` reemplaza todo el contenido de un elemento con una cadena de texto HTML, que es lo que piden el `06` y el `07`. La cadena se escribe más rápido; el nodo es más seguro y más fácil de guardar en una variable.

### ¿Por qué falla mi ejercicio si la web se ve correcta?

Porque algunos tests leen tu archivo como texto, no solo el resultado. El ejercicio `06` busca el literal `body.innerHTML`, el `08.2` busca `childNodes` y `[3]`, y el `11`, el `12` y el `13` aplican expresiones regulares sobre tu código. Si usas la técnica que describen las instrucciones, el test pasa.

### ¿Cuánto se tarda en terminar los 14 ejercicios?

El tutorial está estimado en unas 6 horas en total y su dificultad está marcada como fácil. Como la corrección es aislada, puedes parar después de cualquier ejercicio y retomarlo más tarde sin perder lo avanzado.

### ¿Puedo hacer los ejercicios sin instalar nada?

Sí. Al abrir el repositorio en GitHub Codespaces te montas un contenedor con Node.js 22, Jest y el plugin DOM de LearnPack ya instalados, y LearnPack arranca solo. Instalarlo en local solo compensa si prefieres trabajar sin conexión.

### ¿Es gratis y de quién es el código que escribo?

Acceder no cuesta nada y el JavaScript que escribes en los ejercicios es tuyo. El contenido del tutorial, en cambio, no es de código abierto: el [LICENSE.md](https://github.com/4GeeksAcademy/javascript-dom-tutorial-exercises/blob/HEAD/LICENSE.md) se reserva todos los derechos de propiedad intelectual y no permite republicar, vender ni redistribuir el material.

<!-- hide -->
## 📚 Tutoriales relacionados

Este tutorial es un paso de una serie más larga de desarrollo web. El orden recomendado es:

1. [Introducción a HTML](https://4geeks.com/es/interactive-exercise/html-exercises-es)
2. [Introducción a CSS](https://4geeks.com/es/interactive-exercise/css-exercises-es)
3. [Introducción a JavaScript](https://4geeks.com/es/interactive-exercise/ejercicios-javascript-para-principiantes)
4. [Introducción al DOM](https://4geeks.com/es/interactive-exercise/the-dom-exercises-es) ← estás aquí 🔥
5. [Eventos y el DOM](https://4geeks.com/es/interactive-exercise/javascript-events-exercises-es)
6. [Programación Orientada a Objetos en JavaScript](https://4geeks.com/es/interactive-exercise/object-oriented-programing-in-javascript-es)

## 🚀 Cómo empezar

Lo más rápido es la opción de un clic, sin instalar nada en tu equipo.

1. Abre el repositorio en [GitHub Codespaces](https://codespaces.new/?repo=4GeeksAcademy/javascript-dom-tutorial-exercises) y espera a que se construya el contenedor.

2. LearnPack debería arrancar solo en cuanto VSCode esté listo. Si no lo hace, lánzalo desde la terminal:

    ```bash
    learnpack start
    ```

3. Lee las instrucciones de la izquierda, edita `index.js`, pulsa el botón de compilar para ver la web y pulsa el de test para corregir el ejercicio.

> 💡 Los ejercicios están numerados a propósito. Hacerlos en orden importa, porque cada uno se apoya en la función que introdujo el anterior.

## 💻 Instalación local

Si prefieres trabajar en tu propia máquina:

1. Instala Node.js 22 (la versión que usan el contenedor y la CI del repositorio) y después LearnPack, Jest y el plugin del DOM de forma global:

    ```bash
    npm i -g jest@29.7.0 jest-environment-jsdom@29.7.0 @learnpack/learnpack@5.0.348
    learnpack plugins:install @learnpack/dom@1.1.7
    ```

2. Clona el repositorio y entra en la carpeta que crea:

    ```bash
    git clone https://github.com/4GeeksAcademy/javascript-dom-tutorial-exercises.git
    cd javascript-dom-tutorial-exercises
    ```

3. Arranca el tutorial desde la raíz del proyecto:

    ```bash
    learnpack start
    ```

## 📚 Cómo están organizados los ejercicios

Cada ejercicio corregido vive en su propia carpeta dentro de [`exercises/`](https://github.com/4GeeksAcademy/javascript-dom-tutorial-exercises/tree/HEAD/exercises) y es una web pequeña e independiente:

+ **`index.html`** — el HTML de la página. Ya trae los elementos que tienes que seleccionar y la etiqueta `<script>` que carga tu JavaScript.

+ **`index.js`** — el archivo que editas. Algunos ejercicios te dan una línea de partida que conviene conservar.

+ **`styles.css`** — los estilos de la página, importados desde el HTML.

+ **`README.md`** y **`README.es.md`** — las instrucciones, en inglés y en español.

+ **`tests.js`** — el script de corrección. No necesitas abrirlo, pero leerlo es la forma más rápida de entender por qué falla un ejercicio.

+ **`solution.hide.js`** — una solución de referencia, que LearnPack mantiene oculta hasta que la pides.

¿Has encontrado un fallo o algo desactualizado? Abre un issue en [learnpack/learnpack](https://github.com/learnpack/learnpack/issues/new).

## 🤝 Colaboradores

+ [Alejandro Sánchez (@alesanchezr)](https://github.com/alesanchezr) — código 💻, idea 🤔, tests ⚠️, tutorial 📖.

+ [Paolo (@plucodev)](https://github.com/plucodev) — reporte de bugs 🐛, código 💻, traducción 🌎.

Gracias también a [todas las demás personas que han contribuido](https://github.com/4GeeksAcademy/javascript-dom-tutorial-exercises/graphs/contributors). Este proyecto sigue la especificación [all-contributors](https://github.com/kentcdodds/all-contributors) y toda contribución es bienvenida.
<!-- endhide -->
