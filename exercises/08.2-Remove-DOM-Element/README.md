# `08.2` Remove DOM element

It is possible to retrieve all the children of a DOM element by using the `childNodes` property of that element. For example:

```js
    let list = document.querySelector("#myList");
    let childs = list.childNodes;   
```

![](../../.learn/assets/09-1.png) 

Notice that the children of an element are not necessarily only the html elements inside of it (like `<li></li>`) but it could be any item inside. To observe that, you can `console.log` the childlNodes of the `<ul>` element in this exercise. 

## 📝 Instructions:

1. With the above knowledge 'in hand' and using the `childNodes` property, delete the second LI from the `#parentLi` list.

## 💡 Hints:

Judging by the output of `childNodes`, you have to use the appropriate index of that array to remove the second `<li>` element from the DOM.

## :mag_right: Important:

+ Was that unexpected? If you wonder why you needed to use index 3 to remove the second `li` instead of index 1, here is the answer: http://stackoverflow.com/questions/24589908/childnode-of-li-element-gives-text-ul-ul-text

+ Now repeat the exercise by replacing `.childNodes` with `.children` - `console.log()` it, observe the result and remove the second `<li>`. What do you notice?
