# `06` Create DOM Element Second

In the last exercise we saw how to create a html DOM element using the `createElement` and `appendChild` functions. There is another way to add an element to the HTML of the website: `innerHTML`.

The `innerHTML` property is used to SET the html content inside of any current DOM element, for example if we want to add a new `h1` element to the website `body` we can do:

```js
    document.body.innerHTML = "<h1>Hello World</h1>";
```

## 📝 Instructions:

1. Insert an image with the source "http://placehold.it/350x150" into the `body`.

### 💡 Hint:

- Here is the documentation of the innerHTML property: http://www.w3schools.com/jsref/prop_html_innerhtml.asp