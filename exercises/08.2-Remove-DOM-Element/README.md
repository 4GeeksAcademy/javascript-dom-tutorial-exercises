# `08.2` Remove DOM Element

It is possible to retrieve all the children of a DOM element by using the `childrenNodes` property of that element. For example:

```js
let list = document.querySelector("#myList");
let children = list.childrenNodes;   
```

![](../../.learn/assets/09-1.png) 

Notice that the children of an element are not necessarily only the HTML elements inside of it (like `<li></li>`) but it could be any item inside. To observe that, you can `console.log` the `childrenNodes` of the `<ul>` element in this exercise. 

## 📝 Instructions:

1. With the above knowledge 'in hand' and using the `childrenNodes` property, delete the second `<li>` from the `#parentLi` list.

## 💡 Hints:

+ Judging by the output of `childrenNodes`, you have to use the appropriate index of that array to remove the second `<li>` element from the DOM.

## 🔎 Important:

+ Was that unexpected? If you wonder why you needed to use index 3 to remove the second `<li>` instead of index 1, here is the answer: http://stackoverflow.com/questions/24589908/childnode-of-li-element-gives-text-ul-ul-text

+ Now repeat the exercise by replacing `childrenNodes` with `children` - `console.log()` it, observe the result and remove the second `<li>`. What do you notice?
