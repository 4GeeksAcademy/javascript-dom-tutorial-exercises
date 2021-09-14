
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

jest.dontMock('fs');

test('the html code should contain a script tag', function () {
    document.documentElement.innerHTML = html.toString();
    // we can read from the source code
    console.log(html.toString());
    expect(html.toString().indexOf(`script`) > -1).toBeTruthy();

    //or use query selector to compare hoy mane scriptags do we have
    const scripts = document.querySelectorAll("script");
    expect(scripts.length).toBe(1);
});

test('the js code should contain an assignment line allow you instance a new object from Class Date', function () {
    document.documentElement.innerHTML = js.toString();
    const expected = 'new Date()';
    // we can read from the source code
    console.log(js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();
});

test('the js code should contain an assignment line allow you use a getFullYear() method', function () {
    document.documentElement.innerHTML = js.toString();
    const expected = 'getFullYear()';
    // we can read from the source code
    console.log(js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();
});
test('You should use the document.write method', function () {
    document.documentElement.innerHTML = js.toString();
    const expected = 'document.write';
    // we can read from the source code
    console.log(js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();
});
