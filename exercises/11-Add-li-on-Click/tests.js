
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

jest.dontMock('fs');


test("You should use the querySelector to select the element with #id myList", function () {
    document.documentElement.innerHTML = html.toString();
    const expected = 'document.querySelector("#myList")';
    // we can read from the source code
    console.log(js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();

});
test('the js code should contain an assignment line allow you create element li', function () {
    document.documentElement.innerHTML = html.toString();
    const expected = 'document.createElement';
    // we can read from the source code
    console.log(js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();
});

test('the js code should contain an assignment line allow you assign Fourth Element with innerHTML', function () {
    document.documentElement.innerHTML = html.toString();
    const expected = 'innerHTML = "Forth element";';
    // we can read from the source code
    console.log(js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();
});

test('the js code should contain an assignment line allow you add li to list', function () {
    document.documentElement.innerHTML = html.toString();
    const expected = 'appendChild';
    // we can read from the source code
    console.log(js.toString());
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
