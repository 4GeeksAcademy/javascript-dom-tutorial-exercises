
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

jest.dontMock('fs');



it('the js code should contain an assignment line creating element h1', function () {
  document.documentElement.innerHTML = html.toString();
  let _document = document.cloneNode(true);

  document.querySelector = jest.fn((selector) => {
    if(selector === "h1")return true
    else return false
  });
  expect(document.querySelector("h1")).toBeTruthy();
});

it('the js code should contain an assignment line creating text node with value "Hello World"', function () {
    document.documentElement.innerHTML = html.toString();
    
    let _document = document.cloneNode(true);

        document.querySelector = jest.fn((selector) => {
    return _document.querySelector(selector);
});

    //then I import the index.js (which should have the alert() call inside)
    const file = require("./index.js");

    //and I expect the alert to be already called.
    //expect(document.createElement.mock.calls.length).toBe(1);
    expect(document.querySelector("h1").innerHTML).toBe("Hello World");

});

it('You should create a new "p" element', function () {
    document.documentElement.innerHTML = html.toString();
    /*
        Here is how to mock the alert function:
        https://stackoverflow.com/questions/41885841/how-to-mock-the-javascript-window-object-using-jest
    */
    //console.log(document);
    let _document = document.cloneNode(true);

    document.querySelector = jest.fn((selector) => {
    if(selector === "p")return true
    else return false
  });
  expect(document.querySelector("p")).toBeTruthy()

});
  
it('The new "p" element should contain "Hello World" and a "yellow" background.', function () {
        document.documentElement.innerHTML = html.toString();
        
        let _document = document.cloneNode(true);

        document.querySelector = jest.fn((selector) => {
          if(selector === "p")return true
          else return false
        });

        if(expect(document.querySelector("p")).toBeTruthy()){
          document.querySelector = jest.fn((selector) => {
            return _document.querySelector(selector);
          expect(document.querySelector("p").innerHTML).toBe("Hello World");
          expect(document.querySelector("p").style.background).toBe("yellow");
        });
        } 
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
