
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

jest.dontMock('fs');

describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML = html.toString();
    });
    afterEach(() => { jest.resetModules(); });

    it('The liststring variable should contain 3 "LI" items.' , function () {
        // const expected = 'let liststring = "<li>First Item</li><li>Second Item</li><li>Third Item</li>";';
        // // we can read from the source code
        // expect(js.toString().indexOf(expected) > -1).toBeTruthy();
         let _document = document.cloneNode(true);

    document.querySelector = jest.fn((selector) => {
        return _document.querySelector(selector);
    });

    //then I import the index.js (which should have the alert() call inside)
    const file = require("./index.js");

    //and I expect the alert to be already called.
    //expect(document.querySelector("#myDiv").style.background.mock.calls.length).toBe(1);
    expect(document.querySelector("#myDiv").innerHTML).toBe("<ul><li>First Item</li><li>Second Item</li><li>Third Item</li></ul>");
    });
});


describe('All the html should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML = html.toString();
    });
    afterEach(() => { jest.resetModules(); });

    it('the html code should contain a script tag', function () {

        // we can read from the source code
        expect(html.toString().indexOf(`<script src="./index.js"></script>`) > -1).toBeTruthy();

        //or use query selector to compare hoy mane scriptags do we have
        const scripts = document.querySelectorAll("script");
        expect(scripts.length).toBe(1);
    });
});