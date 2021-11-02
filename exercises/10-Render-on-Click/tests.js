
jest.dontMock('fs');

const fs = require('fs');
const path = require('path');
const {
    queryByText,
    // Tip: all queries are also exposed on an object
    // called "queries" which you could import here as well
    fireEvent,
    waitFor,
  } = require('@testing-library/dom')
  
  const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');
  
  // inject HTML into the document
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();

//import js file after loading the HTML
require(path.resolve(__dirname, './index.js')) 

test('<button> tag must exist', () => {
    
    // Get form elements by their label text.   
    // An error will be thrown if one cannot be found (accessibility FTW!)
    const btn = queryByText(document, 'Click me');
    expect(btn).toBeTruthy();
})


test('<div> with "Hello World" must be added into the document after <button> is clicked', async () => {
    
    // Get form elements by their label text.   
    // An error will be thrown if one cannot be found (accessibility FTW!)
    const btn = queryByText(document, 'Click me')
    fireEvent.click(btn)

    await waitFor(() =>
        expect(queryByText(document, 'Hello World')).toBeTruthy(),
    )

})