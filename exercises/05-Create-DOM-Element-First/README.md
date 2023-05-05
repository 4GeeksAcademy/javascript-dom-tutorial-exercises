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

## 📝 Instructions:

1. Using the `createElement` function, create a Paragraph (`p`) element
2. Set the `p` element's background to `yellow`.
3. Set the `innerHTML` to 'Hello World'.
4. Append the `p` element to the end of the document.

## Expected output:

+ At the end your website should look like this:

![exercise 5 expected preview](../../.learn/assets/05.png)

## 💡 Hints:

+ Create a `p` element.

+ Set the innerHTML.

+ Remember to setup the `yellow` style.

+ `appendChild` to the document.

## 🔎 Important:

+ The innerHTML property of any DOM element is used to set the HTML content that is going to be set inside of that HTML TAG. Don't worry, it's not that complicated!
