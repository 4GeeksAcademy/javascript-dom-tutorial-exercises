
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

jest.dontMock('fs');

test("You should use the querySelector to select the element with #id mySelect", function () {
    document.documentElement.innerHTML = html.toString();
    const expected = 'document.querySelector("#mySelect")';
    // we can read from the source code
    console.log(js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();

});
test('You should create an element ("option")', function () {
    document.documentElement.innerHTML = html.toString();
    const expected = 'document.createElement("option")';
    // we can read from the source code
    console.log(js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();
});

test('You should append all the countries you created, to #mySelect element', function () {
    document.documentElement.innerHTML = html.toString();
    const expected = 'document.querySelector("#mySelect").appendChild';
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
test('You should use addEventListener', function () {
    document.documentElement.innerHTML = html.toString();
    const expected = 'addEventListener';
    // we can read from the source code
    console.log(js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();
});
test('You should use an alert to print the selected country.', function () {
    document.documentElement.innerHTML = html.toString();
    const expected = 'alert';
    // we can read from the source code
    console.log(js.toString());
    expect(js.toString().indexOf(expected) > -1).toBeTruthy();
});

