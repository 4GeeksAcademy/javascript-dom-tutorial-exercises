# `12` Dynamic HTML String

One of the cool things about javascript, is that it lets you create dynamic HTML strings during runtime, that means that you can create HTML automatically while you sleep! Yes! Bear with me and you will understand how....

Please take a look at the following string:

```javascript 
    let myString = "<p>Hello!</p> <strong>My friend</strong>";
```
As humans, we know that this string is formatted like an HTML because it has a `<p>` and a `<strong>` tag inside. But javascript doesn't know that,  javascript only understands a string as a series of characters, it does not matter if the characters are set in a way that looks like HTML.

But what if you write that string into an HTML document during runtime? The browser will interpret that string as HTML (its what browsers do) and it will render it as HTML, removing the tags and applying their respective format into the remaining text. 

Here is the code you need to print any string into the html document:

```js
    let myString = "<p>Hello!</p> <strong>My friend</strong>";
    document.write(myString);
```
## 📝 Instructions:

1. Using the `getFullYear` function from the `Date()` object, change the string content of the variable `myString` to make it print the current date's year into the HTML.

### Expected result:

![](../../.learn/assets/12-1.png)

### :mag_right: Important:

Please print the current year using the date object, don't set the string to a particular year, append the current year to de end of it.
