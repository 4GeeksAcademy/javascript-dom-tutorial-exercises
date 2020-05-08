
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

jest.dontMock('fs');



it('The liststring variable should contain 3 "LI" items.' , function () {
  document.documentElement.innerHTML = html.toString();
      let _document = document.cloneNode(true);

  document.querySelector = jest.fn((selector) => {
    return _document.querySelector(selector);
  });

//then I import the index.js (which should have the alert() call inside)
const file = require("./index.js");

//and I expect the alert to be already called.
//expect(document.querySelector("#myDiv").style.background.mock.calls.length).toBe(1);
expect(document.querySelector("#myDiv").innerHTML).toBe("<ul><li>First Item</li><li>Second Item</li><li>Third Item</li></ul>");
});

it('the html code should contain a script tag', function () {
    document.documentElement.innerHTML = html.toString();
    // we can read from the source code
    expect(html.toString().indexOf(`<script src="./index.js"></script>`) > -1).toBeTruthy();

    //or use query selector to compare hoy mane scriptags do we have
    const scripts = document.querySelectorAll("script");
    expect(scripts.length).toBe(1);
});