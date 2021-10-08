jest.dontMock('fs');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');
document.documentElement.innerHTML = html.toString();

let _document = document.cloneNode(true);
document.querySelector = jest.fn((selector) => {
    return _document.querySelector(selector);
});

let li = _document.querySelector("ul li:nth-child(2)")
let _li = li.cloneNode(true);

li.parentNode.removeChild = jest.fn((elm) => null);

const file = require("./index.js");

test(`Please use the function querySelector to find the #secondElement`, function () {
    //then I import the index.js (which should have the alert() call inside)
    expect(document.querySelector).toHaveBeenCalledWith("#secondElement");
});

test(`Use the function removeChild and pass the second LI element to it`, function () {

    //then I import the index.js (which should have the alert() call inside)
    expect(li.parentNode.removeChild).toHaveBeenCalledWith(li);
});

