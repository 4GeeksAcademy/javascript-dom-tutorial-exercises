
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

    it('the js code should contain an assignment line using body.innerHTML', function () {
        const expected1 = 'body.innerHTML';
        // we can read from the source code
        expect(js.toString().indexOf(expected1) > -1).toBeTruthy();
    });

    it('the js code should contain an assignment line insert an IMG with innerHTML', function () {
        const expected2 = '<img'
        expect(js.toString().indexOf(expected2) > -1).toBeTruthy();
    });

    it('the js code should contain an assignment line insert an H1 with innerHTML', function () {
        const expected3 = '<h1'
        expect(js.toString().indexOf(expected3) > -1).toBeTruthy();
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