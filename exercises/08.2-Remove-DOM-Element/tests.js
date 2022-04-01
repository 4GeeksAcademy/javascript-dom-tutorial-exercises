
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

jest.dontMock('fs');

test("You should use the querySelector to select the element with #id parentLi", function () {
    document.documentElement.innerHTML = html.toString();
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
    expect(document.querySelector).toHaveBeenCalledWith("#parentLi");

});
test('You have to use the childNodes property.', function () {
    document.documentElement.innerHTML = html.toString();
    const expected = 'childNodes';
    // we can read from the source code
    console.log("*****",js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();
});
test('You have to use the removeChild property.', function () {
    document.documentElement.innerHTML = html.toString();
    const expected = 'removeChild';
    // we can read from the source code
    console.log("*****",js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();
});
test('You need to delete the correct element.', function () {
    document.documentElement.innerHTML = html.toString();
    const expected = '[3]';
    // we can read from the source code
    console.log("*****",js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();
});



test('the html code should contain a script tag', function () {
    document.documentElement.innerHTML = html.toString();

    // we can read from the source code
    console.log(html.toString());
    expect(html.toString().indexOf(`<script src="./index.js"></script>`) > -1).toBeTruthy();

    //or use query selector to compare hoy mane scriptags do we have
    const scripts = document.querySelectorAll("script");
    expect(scripts.length).toBe(1);
});

