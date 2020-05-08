
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

jest.dontMock('fs');


beforeEach(() => {
    //here I import the HTML into the document
    document.documentElement.innerHTML = html.toString();
});
afterEach(() => { jest.resetModules(); });
it("The querySelector function should be called once (So don't delete the existing code!)", function () {
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
    expect(document.querySelector).toHaveBeenCalledWith("#myDiv");

});

it('The background color must be yellow', function () {
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
    expect(document.querySelector("#myDiv").style.background).toBe("yellow");

});


