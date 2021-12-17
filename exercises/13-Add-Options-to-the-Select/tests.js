const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
const { getByTitle, fireEvent, waitFor } = require('@testing-library/dom')

jest.dontMock('fs');

document.documentElement.innerHTML = html.toString();

let _document = document.cloneNode(true);

document.createElement = jest.fn((selector) => {
    return _document.createElement(selector);
});

global.alert = jest.fn((text) => text);

//import js file after loading the HTML
require(path.resolve(__dirname, './index.js'))

test('The createElement function should have been called with option to create the option tag', () => {
    // We test it with regex because toHaveBeenCalledWith is case sensitive.
    let expected = /document.\s*createElement\s*\(\s*(("option"|'option')|("OPTION"|'OPTION'))\s*\)/gm;
    expect(expected.test(js.toString())).toBeTruthy();
})

test('The createElement function should have been called seven times', () => {
    expect(document.createElement.mock.calls.length).toBe(7)
})

test('You should append all the countries you created, to #mySelect element', function () {
    let children = document.querySelector("#mySelect").children
    expect(children.length).toBe(8)
});

test('You should use the appendChild() method in order to add the elements into the <select> tag', function () {
    let expected = /.\s*appendChild\s*\(\s*[a-zA-Z0-9\-\_]+\s*\)/gm;
    expect(expected.test(js.toString())).toBeTruthy();
});

test('You should use addEventListener', function () {
    let expected = /.\s*addEventListener\s*\(/gm
    expect(expected.test(js.toString())).toBeTruthy();
});

test('You should use an alert when the select value changes.',  async () => {
    let select = document.querySelector("#mySelect")
    fireEvent.change(select)
    await waitFor(() => expect(alert.mock.calls.length).toBe(1))
});

test('You should use an alert to print the selected country.',  async () => {
    let select = document.querySelector("#mySelect")
    fireEvent.change(select)
    await waitFor(() => expect(alert).toHaveBeenCalledWith(select.value))
    
});