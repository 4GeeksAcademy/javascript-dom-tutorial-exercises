
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

    /*it('the js code should contain an assignment line creating element P', function () {
        const expected = 'document.createElement("P")';
        // we can read from the source code
        console.log(js.toString());
        expect(js.toString().indexOf(expected) > -1).toBeTruthy();
    });*/

    it('the js code should contain an assignment line creating element H1', function () {
        /*
            Here is how to mock the alert function:
            https://stackoverflow.com/questions/41885841/how-to-mock-the-javascript-window-object-using-jest
        */
        //console.log(document);
        let _document = document.cloneNode(true);

        document.createElement = jest.fn((selector) => {
            return _document.createElement(selector);
        });

        //then I import the index.js (which should have the alert() call inside)
        const file = require("./index.js");

        //and I expect the alert to be already called.
        //expect(document.createElement.mock.calls.length).toBe(1);
        expect(document.createElement).toBeCalledWith("H1");

    });

    it('the js code should contain an assignment line creating text node with value "Hello World"', function () {
        /*
            Here is how to mock the alert function:
            https://stackoverflow.com/questions/41885841/how-to-mock-the-javascript-window-object-using-jest
        */
        //console.log(document);
        let _document = document.cloneNode(true);

        document.createTextNode = jest.fn((text) => {
            return _document.createTextNode(text);
        });

        //then I import the index.js (which should have the alert() call inside)
        const file = require("./index.js");

        //and I expect the alert to be already called.
        //expect(document.createElement.mock.calls.length).toBe(1);
        expect(document.createTextNode).toBeCalledWith("Hello World");

    });

    it('the js code should contain an assignment line creating element P with background yellow', function () {
        /*
            Here is how to mock the alert function:
            https://stackoverflow.com/questions/41885841/how-to-mock-the-javascript-window-object-using-jest
        */
        //console.log(document);
        let _document = document.cloneNode(true);

        document.createElement = jest.fn((selector) => {
            return _document.createElement(selector);
        });

        //then I import the index.js (which should have the alert() call inside)
        const file = require("./index.js");

        //and I expect the alert to be already called.
        //expect(document.createElement.mock.calls.length).toBe(1);
        expect(document.createElement).toBeCalledWith("P");
        expect(document.querySelector("P").style.background).toBe("yellow");
    });
    /*it('the js code should contain an assignment line adding element P at the bottom of document', function () {
        const expected = 'elembd.appendChild';
        // we can read from the source code
        console.log(js.toString());
        expect(js.toString().indexOf(expected) > -1).toBeTruthy();
    });*/
});


describe('All the html should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML = html.toString();
    });
    afterEach(() => { jest.resetModules(); });

    it('the html code should contain a script tag', function () {

        // we can read from the source code
        //console.log(html.toString());
        expect(html.toString().indexOf(`<script src="./index.js"></script>`) > -1).toBeTruthy();

        //or use query selector to compare hoy mane scriptags do we have
        const scripts = document.querySelectorAll("script");
        expect(scripts.length).toBe(1);
    });
});