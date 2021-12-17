const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');

jest.dontMock('fs');

document.documentElement.innerHTML = html.toString();

let _document = document.cloneNode(true);

document.write = jest.fn((arg) => {
    return _document.write(arg);
})

require(path.resolve(__dirname, './index.js')) 

test('The html code should contain a script tag', function () {
    let script = document.querySelector("script")
    expect(script).toBeTruthy();
});

test('The js code should contain an assignment line allow you instance a new object from Class Date', function () {
    document.documentElement.innerHTML = js.toString();
    const expected = /new\s+Date\s*\(\s*\)/gm;
    expect(expected.test(js.toString())).toBeTruthy();
});

test('The getFullYear() method should have been called once', function () {
    document.documentElement.innerHTML = js.toString();
    const expected = /\.\s*getFullYear\s*\(\s*\)/gm;
    expect(expected.test(js.toString())).toBeTruthy();
});

test('You should use the document.write method', function () {
    expect(document.write.mock.calls.length).toBe(1)
});
