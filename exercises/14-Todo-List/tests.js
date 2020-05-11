
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

jest.dontMock('fs');

test("When you add a new task you should select the ul element!", function () {
    document.documentElement.innerHTML = html.toString();
    const expected = 'document.querySelector("ul")';
    // we can read from the source code
    console.log(js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();

});
test("When you add a new task you should use innerHTML!", function () {
    document.documentElement.innerHTML = html.toString();
    const expected = '.innerHTML';
    // we can read from the source code
    console.log(js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();

});

test('When you remove a task you should first select all of them using querySelectorAll', function () {
    document.documentElement.innerHTML = html.toString();
    const expected = 'document.querySelectorAll(".fa-trash")';
    // we can read from the source code
    console.log(js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();
});
test('Once you selected all, remember to add an event listener with click event', function () {
    document.documentElement.innerHTML = html.toString();
    const expected = 'addEventListener("click"';
    // we can read from the source code
    console.log(js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();
});
test('You should remove the selected child.', function () {
    document.documentElement.innerHTML = html.toString();
    const expected = '.removeChild';
    // we can read from the source code
    console.log(js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();
});

test('the html code should contain a script tag', function () {

    // we can read from the source code
    console.log(html.toString());
    expect(html.toString().indexOf(`<script src="./index.js"></script>`) > -1).toBeTruthy();

    //or use query selector to compare hoy mane scriptags do we have
    const scripts = document.querySelectorAll("script");
    expect(scripts.length).toBe(1);
});
