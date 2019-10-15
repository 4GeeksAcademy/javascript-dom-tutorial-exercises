A great way to create HTML structures for your website is to concatenate several HTML strings in a single, bigger html string, then append that string to the innerHTML of any element that is already a part of the HTML. For example:

    let htmlString = '<div>' + 'Hello World' + '</div>';

Instructions

SET the "liststring" variable with the value needed to have the following HTML as the body's innerHTML:

    <ul>
        <li>First Item</li>
        <li>Second Item</li>
        <li>Third Item</li>
    </ul>

Hint
Remember that the white spaces and indentation are ignored by the browser's interpreter.