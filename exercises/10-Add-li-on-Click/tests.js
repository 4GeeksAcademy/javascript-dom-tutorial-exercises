jest.dontMock('fs');

const fs = require('fs');
const path = require('path');
const {
    queryByText,
    // Tip: all queries are also exposed on an object
    // called "queries" which you could import here as well
    fireEvent,
    waitFor,
  } = require('@testing-library/dom')
  
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

document.documentElement.innerHTML = html.toString();

let _document = document.cloneNode(true);

document.createElement = jest.fn((selector) => {
    return _document.createElement(selector);
});

require(path.resolve(__dirname, './index.js')) 

test('<button> tag must exist', () => {
    // Get form elements by their label text.   
    // An error will be thrown if one cannot be found (accessibility FTW!)
    const btn = queryByText(document, 'Click me');
    expect(btn).toBeTruthy();
})

test('<li> must be added into the <ul> after <button> is clicked', async () => {
    // Get form elements by their label text.   
    // An error will be thrown if one cannot be found (accessibility FTW!)
    const btn = queryByText(document, 'Click me')
    fireEvent.click(btn)

    let ul = document.querySelector('#myList')
    await waitFor(() => expect(ul.childElementCount).toBe(4))
})

test('The createElement function should have been called once', () => {
    expect(document.createElement.mock.calls.length).toBe(1)
})