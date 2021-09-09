# `09` Remove DOM Element: Part Two

It is possible to retrieve all the childs of a DOM element, for that you need to use the the `childNodes` property of the element. For example:

```js
    let list = document.querySelector("#myList");
    let childs = list.childNodes;   
```

![](../../.learn/assets/09-1.png) 

## 📝 Instructions:

1. Using the `childNodes` property, delete the second LI from the `#parentLi` list.

### 💡 Hint:

`childNodes` returns an array of `li`, you can access the second element of that array and remove it from the DOM.

### :mag_right: Important:

+ If you wonder why you need to use the 3 to remove the second `li` instead of the 2 index, here is the answer: http://stackoverflow.com/questions/24589908/childnode-of-li-element-gives-text-ul-ul-text
