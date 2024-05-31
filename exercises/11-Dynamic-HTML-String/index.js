const d = new Date();
let year = d.getFullYear();

let myString = `<p>Hello!</p> <strong>My friend</strong>, <span>we are in the year ${year}</span>`;
//myString = myString + `<h5>we are in the year ${Date.getFullYear()} </h5>`;

//console.log(year);
document.write(myString);