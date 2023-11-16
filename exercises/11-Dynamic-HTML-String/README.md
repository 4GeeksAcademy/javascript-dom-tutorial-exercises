# `11` Dynamic HTML String

One of the cool things about JavaScript, is that it lets you create dynamic HTML strings during runtime, which means that you can create HTML automatically while you sleep! Yes! Bear with me, and you will understand how...

Please take a look at the following string:

```js
let myString = "<p>Hello!</p> <strong>My friend</strong>";
```
As humans, we know that this string is formatted like HTML because it has a `<p>` and a `<strong>` tag inside. But JavaScript doesn't know that, JavaScript only understands a string as a series of characters, it does not matter if the characters are set in a way that looks like HTML.

What if you write that string into an HTML document during runtime? The browser will interpret that string as HTML (it's what browsers do), and it will render it as HTML, removing the tags and applying their respective format into the remaining text. 

Here is the code you need to print any string into the HTML document:

```js
let myString = "<p>Hello!</p> <strong>My friend</strong>";
document.write(myString);
```

## 📝 Instructions:

1. Using the `getFullYear()` function from the `Date()` object, change the string content of the variable `myString` to make it print the current date's year into the HTML.

## 💻 Expected result:

![Expected result](../../.learn/assets/12-1.png)

## 💡 Hint:

+ Please print the current year using the date object; don't set the string to a particular year, append the current year to the end of it.
