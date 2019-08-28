Is possible to retrieve all the childs of a DOM element, for that you need to use the the childNodes property of the element. Example:

    let list = document.getElementById("myList");
    let childs = list.childNodes;   


![](img/LEyjPMW.png "") 

Instructions:
Using the childNodes property, delete the second LI from the #parentLI list.

Hint:
childNodes returns an array of LI, you can access the second element of that array and remove it from the DOM.

Note: If you wonder why you need to use the 3 to remove the second LI instead of the 2 index, here is the answer: http://stackoverflow.com/questions/24589908/childnode-of-li-element-gives-text-ul-ul-text