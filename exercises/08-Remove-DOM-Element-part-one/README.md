# `08` Remove DOM Element Part One

If you want to remove an element from the DOM, you use the `removeChild` function.

The challenge behind this function, is that it needs to be called from the parent of the element that you want to remove. For example:

```html
    <ul>
        <li>First element</li>
        <li>Second element</li>
        <li>Third element</li>
    </ul>
```

In the previous code, to remove the second element, we need the function `removeChild` from the parent `<ul>`, but passing, as a parameter, the `<li>` that I want to remove.

Something like this:

```js
    let element = document.querySelector("#element-id");
    element.parentNode.removeChild(element);
```

## 📝 Instructions:

1. Remove the second `<li>` from the `<ul>` that is part of the HTML of this website.