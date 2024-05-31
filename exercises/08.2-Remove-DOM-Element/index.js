// Your code here
let myUL = document.querySelector("#parentLi");
let childs = myUL.childNodes;
let childrensUL = myUL.children;

myUL.removeChild(childs[3]);
//myUL.removeChild(childrensUL[1]);

console.log(childrensUL);
console.log(childs);