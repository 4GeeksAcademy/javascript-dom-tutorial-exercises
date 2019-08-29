
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

jest.dontMock('fs');

describe('All the html should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML = html.toString();
    });
    afterEach(() => { jest.resetModules(); });

    it('the html code should contain a script tag', function () {

        // we can read from the source code
        console.log(html.toString());
        expect(html.toString().indexOf(`script`) > -1).toBeTruthy();

        //or use query selector to compare hoy mane scriptags do we have
        const scripts = document.querySelectorAll("script");
        expect(scripts.length).toBe(1);
    });

    it('the js code should contain an assignment line allow you instance a new object from Class Date', function () {
        const expected = 'new Date();';
        // we can read from the source code
        console.log(html.toString());
        expect(html.toString().indexOf(expected) > -1).toBeTruthy();
    });

    it('the js code should contain an assignment line allow you use a getFullYear() method', function () {
        const expected = 'getFullYear()';
        // we can read from the source code
        console.log(html.toString());
        expect(html.toString().indexOf(expected) > -1).toBeTruthy();
    });
});