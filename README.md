<!-- hide -->
<div align="center">

# Learn how to manipulate The DOM with JS

[![certified by 4Geeks Academy](https://img.shields.io/badge/certified%20by-4Geeks%20Academy-2563eb)](https://4geeks.com/en/interactive-exercise/the-dom-exercises)
[![autograded with LearnPack](https://img.shields.io/badge/autograded-LearnPack-2563eb)](https://github.com/learnpack/learnpack)
[![open in Codespaces](https://img.shields.io/badge/open%20in-Codespaces-fb5a1f)](https://codespaces.new/?repo=4GeeksAcademy/javascript-dom-tutorial-exercises)

![Cover image of the tutorial: the text "Learn The DOM interactive" next to the yellow JavaScript hexagon logo](https://raw.githubusercontent.com/4GeeksAcademy/javascript-dom-tutorial-exercises/HEAD/preview.png)

</div>

*These instructions are [also available in 🇪🇸 Spanish](https://github.com/4GeeksAcademy/javascript-dom-tutorial-exercises/blob/HEAD/README.es.md).*
<!-- endhide -->

This interactive tutorial teaches DOM manipulation with vanilla JavaScript across 15 exercise folders: one intro plus 14 auto-graded challenges. You practice `querySelector`, `createElement`, `appendChild`, `innerHTML`, `removeChild`, `childNodes` and `addEventListener`, finishing with a working to-do list. Every graded exercise ships an `index.html`, a `styles.css`, an `index.js`, a bilingual README and a Jest test file. Estimated time: 6 hours. Difficulty: easy.

<!-- hide -->
## 📋 About this tutorial

+ **Difficulty:** easy — it is the fourth step of the recommended path listed further down.

+ **Estimated duration:** 6 hours.

+ **Exercises:** 15 folders inside `exercises/` — `00-Welcome` (reading only) plus 14 exercises with automatic tests.

+ **Technologies:** vanilla JavaScript, HTML and CSS. No frameworks, no build step, no `npm install` inside the exercises.

+ **Grading:** `isolated` — each exercise is graded on its own with Jest running on jsdom.

+ **Languages:** every exercise has both `README.md` (English) and `README.es.md` (Spanish).

+ **Solutions:** each of the 14 graded exercises includes a `solution.hide.js` reference file.
<!-- endhide -->

## 🎯 What will you learn?

The DOM (Document Object Model) is the bridge between the HTML you write and the JavaScript that changes it while the page is running. By the end of these exercises you will be able to:

+ Select any element on a page with [`document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) and read its properties, such as `id`.

+ Change CSS from JavaScript through the `element.style` object (`background`, `float`, and any other property).

+ Create new tags with [`document.createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) and insert them with [`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild).

+ Build HTML as a string and inject it with [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) or `document.write`.

+ Delete elements with `removeChild`, and understand why `childNodes` and `children` do not return the same thing.

+ React to the user with [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) for `click`, `change` and keyboard events, updating the page without any refresh.

If you want the theory behind it first, read [What is the DOM: Document Object Model](https://4geeks.com/lesson/what-is-dom-define-dom).

## 👀 What will you build?

`exercises/00-Welcome` is a short introduction with no test. The other 14 folders are graded exercises, each one a tiny website you have to finish:

+ **`01` Hello World** — write the JavaScript that fires an `alert` saying `Hello World`.

+ **`02` Select DOM Element** — select the `<h1>` with `querySelector` and alert its `id`.

+ **`03` Change Div Background** — turn the background of `#myDiv` from green to `yellow`.

+ **`04` Move DOM Element** — move the `#wulu` div by setting its `float` CSS property to `right` from JavaScript.

+ **`05` Create DOM Element (1)** — create a `<p>` with a yellow background and the text "Hello World", then append it to the body.

+ **`06` Create DOM Element (2)** — insert an `<img>` into the `<body>` using the `innerHTML` property.

+ **`07` Create DOM list of li** — fill a variable so the body renders a `<ul>` with exactly three `<li>` items.

+ **`08.1` Remove DOM Element** — remove the second `<li>` by calling `removeChild` from its `parentNode`.

+ **`08.2` Remove DOM Element** — do the same, but reaching the item through the `childNodes` collection of `#parentLi`.

+ **`09` Render on Click** — create a yellow `<div>` with "Hello World" and append it to the body when `#superDuperButton` is clicked.

+ **`10` Add li on Click** — add a brand new `<li>` to `#myList` on every click of the button.

+ **`11` Dynamic HTML String** — concatenate the current year, taken from `new Date().getFullYear()`, into a string printed with `document.write`.

+ **`12` Add Options to the Select** — loop over an array of 7 countries, build one `<option>` per country, append them to `#mySelect` and alert the country the user picks on the `change` event.

+ **`13` Todo List** — the final project: the HTML and the CSS are already written, and you add the JavaScript that appends a task when the user presses Enter and removes a task when the trash icon is clicked.

The exercises run inside LearnPack, so you edit the file, press run, and see the result next to the instructions:

![Animated demo of the "Add Options to the Select" exercise running inside the LearnPack interface, showing the run button and the country dropdown that JavaScript fills in](https://raw.githubusercontent.com/4GeeksAcademy/javascript-dom-tutorial-exercises/HEAD/.learn/assets/13-1.gif)

## 🎓 What do you need before starting?

You do not need any previous DOM knowledge, but this tutorial assumes you already know:

+ **Basic HTML**: tags, attributes, and above all the `id` attribute, because almost every exercise selects elements by id.

+ **Basic CSS**: properties such as `background`, `float` and `color`, since you will be setting them from JavaScript instead of from a stylesheet.

+ **Basic JavaScript**: variables, strings, string concatenation, `for` loops and functions. Exercise `12` needs a loop and exercise `13` needs functions.

Events are introduced gently here, so exercises `09`, `10`, `12` and `13` are also a good first contact with `addEventListener`.

## ✅ How does the automatic grading work?

14 of the 15 folders contain a `tests.js` file, so you get instant feedback on almost everything you write. Grading is `isolated`: each exercise is checked on its own, with [Jest](https://jestjs.io/) running the page in a simulated browser (jsdom), and `@testing-library/dom` firing real clicks, `change` events and key presses in exercises `09`, `10`, `12` and `13`.

The tests check three different kinds of things, and it helps a lot to know which is which:

+ **The result in the DOM.** For example, exercise `07` counts that `ul > li` returns exactly 3 elements, and exercise `10` checks that `#myList` has 4 children after the click.

+ **The functions you called.** Several exercises mock `document.querySelector` or `document.createElement` and count the calls: exercise `12` requires exactly 7 calls to `createElement`, and exercises `09` and `10` require exactly one.

+ **Your source code, read as text.** Exercise `06` searches your file for the literal `body.innerHTML`, exercise `08.2` searches for `childNodes`, `removeChild` and the index `[3]`, and exercise `11` uses regular expressions to confirm you wrote `new Date()` and `.getFullYear()`.

Because of that third category, a solution that looks perfect in the browser can still fail. The tests are strict on purpose: treat a red test as a hint about the technique the exercise wants you to practice, not as a verdict on your code.

If you get stuck, every graded exercise ships a `solution.hide.js` file with a working reference solution.

## 💡 What mistakes should you avoid?

These are the traps that make people fail an exercise even when the page looks right on screen:

+ **Swapping `querySelector` for `getElementById` in exercise `02`.** That test replaces `document.querySelector` with a mock and asserts it was called once with `#theTitle`, so `getElementById` fails it. Note that exercises `09` and `10` are the opposite case: their starter code already uses `getElementById` for the button, and that is fine.

+ **Adding an extra `querySelector` call.** Exercises `03`, `04` and `08.2` assert that `document.querySelector` was called exactly once. In `03` and `04` the starter file already contains that call, so querying the element again turns the test red; in `08.2` you write that single call yourself.

+ **Using the wrong index in exercise `08.2`.** Removing `children[1]` gives the same visual result, but the test greps your code for `[3]`, which is the position of the second `<li>` inside `childNodes` once the whitespace text nodes are counted.

+ **Changing the code marked as untouchable.** In exercise `07` the last line is commented as "Do not modify after this line": you only assign the `listString` variable. In exercise `13` the hint is explicit — you edit `index.js` only, never the HTML or the CSS.

+ **Hardcoding the year in exercise `11`.** Writing `2026` passes visually but fails: the test requires `new Date()` and `.getFullYear()` in your source, exactly one `document.write(myString)` call, and the original text of `myString` kept at the front.

+ **Miscounting the options in exercise `12`.** The array has 7 countries, so `createElement` must run 7 times, but `#mySelect` ends up with 8 children because the "Select your country" `<option>` is already in the HTML.

+ **Creating the element outside the listener in exercises `09` and `10`.** `createElement` has to run when the click happens, not when the file loads, or the call count check fails.

## ❓ Frequently asked questions

### Do I need to know JavaScript before starting this DOM tutorial?

Yes, the basics. You should be comfortable with variables, strings, concatenation, functions and `for` loops before exercise `12`. If any of that sounds new, do the [JavaScript beginner tutorial](https://4geeks.com/en/interactive-exercise/javascript-beginner-exercises) first and come back.

### What is the difference between `createElement` and `innerHTML`?

Both add HTML to the page and this tutorial makes you practice both. `createElement` builds a real DOM node you can configure in JavaScript before inserting it with `appendChild`, which is what exercise `05` asks for. `innerHTML` replaces the whole content of an element with an HTML string, which is what exercises `06` and `07` ask for. Strings are quicker to write, nodes are safer and easier to keep a reference to.

### Why does my exercise fail if the website looks correct?

Because some tests read your source file as text instead of only looking at the result. Exercise `06` looks for the literal `body.innerHTML`, exercise `08.2` looks for `childNodes` and `[3]`, and exercises `11`, `12` and `13` use regular expressions on your code. Match the technique the instructions describe and the test will pass.

### How long does it take to finish the 14 exercises?

The tutorial is rated at about 6 hours in total and its difficulty is marked as easy. Since grading is isolated, you can stop after any exercise and pick it up later without losing progress.

### Can I run these exercises without installing anything?

Yes. Opening the repository in GitHub Codespaces gives you a ready container with Node.js 22, Jest and the LearnPack DOM plugin already installed, and LearnPack starts on its own. Installing locally is only worth it if you prefer working offline.

### Is this tutorial free, and who owns the code I write?

Getting access costs nothing and the JavaScript you write in the exercises is yours. The tutorial content itself is not open source: the [LICENSE.md](https://github.com/4GeeksAcademy/javascript-dom-tutorial-exercises/blob/HEAD/LICENSE.md) reserves all intellectual property rights and does not allow republishing, selling or redistributing the material.

<!-- hide -->
## 📚 Related tutorials

This tutorial is one step of a longer web development series. The recommended order is:

1. [Introduction to HTML](https://4geeks.com/en/interactive-exercise/html-exercises)
2. [Introduction to CSS](https://4geeks.com/en/interactive-exercise/css-exercises)
3. [Introduction to JavaScript](https://4geeks.com/en/interactive-exercise/javascript-beginner-exercises)
4. [Introduction to The DOM](https://4geeks.com/en/interactive-exercise/the-dom-exercises) ← you are here 🔥
5. [Using events and The DOM](https://4geeks.com/en/interactive-exercise/javascript-events-exercises)
6. [Object Oriented Programming in JavaScript](https://4geeks.com/en/interactive-exercise/object-oriented-programing-in-javascript)

## 🚀 How to start

The fastest way is the one-click option, no local setup required.

1. Open the repository in [GitHub Codespaces](https://codespaces.new/?repo=4GeeksAcademy/javascript-dom-tutorial-exercises) and wait for the container to build.

2. LearnPack should start by itself once VSCode is ready. If it does not, run it from the terminal:

    ```bash
    learnpack start
    ```

3. Read the instructions on the left, edit `index.js`, press the build button to preview the website, and press the test button to grade the exercise.

> 💡 The exercises are numbered on purpose. Doing them in order matters, because each one builds on the function introduced by the previous one.

## 💻 Local installation

If you prefer to work on your own machine:

1. Install Node.js 22 (the version used by the container and by the repository CI), and then LearnPack, Jest and the DOM plugin globally:

    ```bash
    npm i -g jest@29.7.0 jest-environment-jsdom@29.7.0 @learnpack/learnpack@5.0.348
    learnpack plugins:install @learnpack/dom@1.1.7
    ```

2. Clone the repository and move into the folder it creates:

    ```bash
    git clone https://github.com/4GeeksAcademy/javascript-dom-tutorial-exercises.git
    cd javascript-dom-tutorial-exercises
    ```

3. Start the tutorial from the root of the project:

    ```bash
    learnpack start
    ```

## 📚 How the exercises are organized

Every graded exercise lives in its own folder inside [`exercises/`](https://github.com/4GeeksAcademy/javascript-dom-tutorial-exercises/tree/HEAD/exercises) and is a small standalone website:

+ **`index.html`** — the HTML of the page. It already contains the elements you have to select, and the `<script>` tag that loads your JavaScript.

+ **`index.js`** — the file you edit. Some exercises give you a starter line that you should keep.

+ **`styles.css`** — the styles of the page, imported from the HTML.

+ **`README.md`** and **`README.es.md`** — the instructions, in English and Spanish.

+ **`tests.js`** — the grading script. You do not need to open it, but reading it is the fastest way to understand why an exercise is failing.

+ **`solution.hide.js`** — a reference solution, hidden by LearnPack until you want it.

Found a bug or something out of date? Open an issue at [learnpack/learnpack](https://github.com/learnpack/learnpack/issues/new).

## 🤝 Contributors

+ [Alejandro Sánchez (@alesanchezr)](https://github.com/alesanchezr) — code 💻, idea 🤔, tests ⚠️, tutorial 📖.

+ [Paolo (@plucodev)](https://github.com/plucodev) — bug reports 🐛, code 💻, translation 🌎.

Thanks to [everyone else who has contributed](https://github.com/4GeeksAcademy/javascript-dom-tutorial-exercises/graphs/contributors). This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification, and contributions of any kind are welcome.
<!-- endhide -->
