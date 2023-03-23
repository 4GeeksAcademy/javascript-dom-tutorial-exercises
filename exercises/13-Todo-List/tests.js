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

require(path.resolve(__dirname, './index.js'))

test('The createElement function should have been called with li to create the li tag', () => {
    // We test it with regex because toHaveBeenCalledWith is case sensitive.
    let expected = /document.\s*createElement\s*\(\s*(("li"|'li')|("LI"|'LI'))\s*\)/gm;
    expect(expected.test(js.toString())).toBeTruthy();
})

test('You should use addEventListener', function () {
    let expected = /.\s*addEventListener\s*\(/gm
    expect(expected.test(js.toString())).toBeTruthy();
});

test('You should create an element when you press enter on the input.', async () => {
    let input = document.querySelector("#addToDo")
    fireEvent.keyDown(input, { key: "Enter", keyCode: 13 })
    await waitFor(() => expect(document.createElement.mock.calls.length).toBe(1))
});

test('You should append an element to the ul when you press enter on the input.', async () => {
    let input = document.querySelector("#addToDo")
    let ul = document.querySelector("ul")
    fireEvent.keyDown(input, { key: "Enter", keyCode: 13 })
    await waitFor(() => expect(ul.children.length).toBe(5))
});

test('You should remove an element from the ul when you click the trash icon.', async () => {
    let input = document.querySelector("#addToDo")
    let ul = document.querySelector("ul")
    let trash = ul.children

    let icon = trash[1].querySelector("span").querySelector(".fa-trash")
    fireEvent.click(icon)
    await waitFor(() => expect(ul.children.length).toBe(4))

});
