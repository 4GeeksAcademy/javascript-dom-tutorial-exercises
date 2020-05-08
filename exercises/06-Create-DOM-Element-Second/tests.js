
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

jest.dontMock('fs');

    it('the js code should contain an assignment line using body.innerHTML', function () {
      document.documentElement.innerHTML = html.toString();
        const expected1 = 'body.innerHTML';
        // we can read from the source code
        expect(js.toString().indexOf(expected1) > -1).toBeTruthy();
    });

    it('the js code should contain an assignment line insert an IMG with innerHTML', function () {
      document.documentElement.innerHTML = html.toString();
        const expected2 = '<img'
        expect(js.toString().indexOf(expected2) > -1).toBeTruthy();
    });

    it('the js code should contain an assignment line insert an H1 with innerHTML', function () {
      document.documentElement.innerHTML = html.toString();
        const expected3 = '<h1'
        expect(js.toString().indexOf(expected3) > -1).toBeTruthy();
    });

    it('the html code should contain a script tag', function () {
document.documentElement.innerHTML = html.toString();
        // we can read from the source code
        //console.log(html.toString());
        expect(html.toString().indexOf(`<script src="./index.js"></script>`) > -1).toBeTruthy();

        //or use query selector to compare hoy mane scriptags do we have
        const scripts = document.querySelectorAll("script");
        expect(scripts.length).toBe(1);
    });
// it('the js code should contain an assignment line creating text node with value "Hello World"', function () {
//     document.documentElement.innerHTML = html.toString();
    
//     let _document = document.cloneNode(true);

//         document.querySelector = jest.fn((selector) => {
//     return _document.querySelector(selector);
// });

//     //then I import the index.js (which should have the alert() call inside)
//     const file = require("./index.js");

//     //and I expect the alert to be already called.
//     //expect(document.createElement.mock.calls.length).toBe(1);
//     expect(document.querySelector("body").innerHTML).toBe("<img src='http://placehold.it/350x150'></img>");

// });