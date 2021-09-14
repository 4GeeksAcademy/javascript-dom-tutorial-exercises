# `05` Create DOM Element First

It is possible to create a new DOM element with Javascript with the function createElement.

```js
let elem = document.createElement("h1");
```

After you create any element, you have to add it to the website DOM if you want to display it inside of the website. To add the element to the DOM we use the function `appendChild`.

```js
    let elem = document.createElement("h1");
    elem.innerHTML = "Hello World";
    document.body.appendChild(elem);
```

### :mag_right: Important:

 The innerHTML property of any DOM element is used to set the HTML content that is going to be set inside of that HTML TAG.

Don't worry, it's not that complicated!


## 📝 Instructions:

1. Using the `createElement` function, create a Paragraph(`p`) element with `yellow` background, set the `innerHTML` to 'Hello World' and append it at the end of the document.

### 💡 Hint:

- Create a `p` element.

- Set the innerHTML.

- Remember to setup the `yellow` style.

- `appendChild` to the document.