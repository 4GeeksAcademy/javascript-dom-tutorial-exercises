
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

jest.dontMock('fs');

document.documentElement.innerHTML = html.toString();
let _d = document.cloneNode(true);
let fakeP = {
  innerHTML: "",
  style: {
    background: ""
  }
}
document.createElement = jest.fn((arg) => fakeP);
document.body.appendChild = jest.fn((arg) => null);
const file = require("./index.js");

// it('use the function createElement to create a p tag', function () {
//   expect(document.createElement).toHaveBeenCalledWith("p");
// });

it('The new "p" element should contain "Hello World" ', function () {
      expect(fakeP.innerHTML.toLocaleLowerCase()).toBe("hello world");
});

it('The new "p" element should have a "yellow" background.', function () {
      expect(fakeP.style.background.toLocaleLowerCase()).toBe("yellow");
});

it('Use the appendChile function to add the <P> into the document.body', function () {
      expect(document.body.appendChild).toHaveBeenCalledWith(fakeP);
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
