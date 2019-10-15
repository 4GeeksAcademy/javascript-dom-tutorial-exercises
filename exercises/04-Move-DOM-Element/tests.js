
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
    const expected = 'aux.style.float = "right";';
    it('querySelector function should be called once', function () {
        /*
            Here is how to mock the alert function:
            https://stackoverflow.com/questions/41885841/how-to-mock-the-javascript-window-object-using-jest
        */
        //console.log(document);
        let _document = document.cloneNode(true);

        document.querySelector = jest.fn((selector) => {
            return _document.querySelector(selector);
        });

        //then I import the index.js (which should have the alert() call inside)
        const file = require("./index.js");

        //and I expect the alert to be already called.
        expect(document.querySelector.mock.calls.length).toBe(1);
        expect(document.querySelector).toHaveBeenCalledWith("#wulu");

    });

    it('the position of div wulu must be right', function () {
        /*
            Here is how to mock the alert function:
            https://stackoverflow.com/questions/41885841/how-to-mock-the-javascript-window-object-using-jest
        */
        //console.log(document);
        let _document = document.cloneNode(true);

        document.querySelector = jest.fn((selector) => {
            return _document.querySelector(selector);
        });

        //then I import the index.js (which should have the alert() call inside)
        const file = require("./index.js");

        //and I expect the alert to be already called.
        //expect(document.querySelector("#myDiv").style.background.mock.calls.length).toBe(1);
        expect(document.querySelector("#wulu").style.float).toBe("right");

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
        //console.log(html.toString());
        expect(html.toString().indexOf(`<script src="./index.js"></script>`) > -1).toBeTruthy();

        //or use query selector to compare hoy mane scriptags do we have
        const scripts = document.querySelectorAll("script");
        expect(scripts.length).toBe(1);
    });
});