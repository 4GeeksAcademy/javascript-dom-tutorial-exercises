# `02` Select DOM Element

In this website, we have 2 elements: one `<h1>` with the `id` `#theTitle` and a paragraph with the `id` `#theParagraph`.

You can select any of the objects in the DOM with the `querySelector` function. 

For example: If we want to select the `<h1>` element, we can do the following:

```js
let aux = document.querySelector('#theTitle');
//The variable `aux now contains the H1 DOM element inside.
```

Now that we have our `h1` element stored on `aux`, we can access any of the `h1` properties, for example we can retrieve the `font-size` style property like this:

```js
let aux = document.querySelector('#theTitle');
console.log(aux.style.fontSize);
```

### Here you can read more about it: 

[read more](https://www.w3schools.com/jsref/prop_style_fontsize.asp)

## 📝 Instructions:

1. Prompt an alert with the `id` of the `h1`.
### 💡 Hint:

Here you can read more about the id property of any DOM element: http://www.w3schools.com/jsref/prop_html_id.asp
