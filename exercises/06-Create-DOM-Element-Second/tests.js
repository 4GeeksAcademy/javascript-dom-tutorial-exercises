
jest.dontMock('fs');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();

const js = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

const file = require("./index.js");

it('Please use the innerHTML property to add an element to the <body>', function () {
    const expected1 = 'body.innerHTML';
    // we can read from the source code
    expect(js.indexOf(expected1) > -1).toBeTruthy();
});

it('Make sure to update the <body> innerHTML to include an <img> tag', function () {
    
    expect(document.querySelector("img")).toBeTruthy();
});
