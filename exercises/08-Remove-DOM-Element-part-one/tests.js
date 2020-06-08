
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

jest.dontMock('fs');


it('The function removeChild must have been called with the element #secondElement' , function () {
    document.documentElement.innerHTML = html.toString();
    let _document = document.cloneNode(true);
    
    document.querySelector = jest.fn((selector) => {
        return _document.querySelector(selector);
    });
    let elmId = null;
    HTMLUListElement.prototype.removeChild = jest.fn((_elm) => {
        elmId = _elm.id ;
    });
    
    //then I import the index.js (which should have the alert() call inside)
    const file = require("./index.js");
    expect(HTMLUListElement.prototype.removeChild).toHaveBeenCalled();
    expect(elmId).toBe("secondElement");
});

test('You should use the removeChild function', function () {
    document.documentElement.innerHTML = html.toString();
    const expected = 'parentNode.removeChild';
    // we can read from the source code
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();
});

test('The html code should contain a script tag', function () {
    document.documentElement.innerHTML = html.toString();
    // we can read from the source code
    
    expect(html.toString().indexOf(`<script src="./index.js"></script>`) > -1).toBeTruthy();

    //or use query selector to compare hoy mane scriptags do we have
    const scripts = document.querySelectorAll("script");
    expect(scripts.length).toBe(1);
});
