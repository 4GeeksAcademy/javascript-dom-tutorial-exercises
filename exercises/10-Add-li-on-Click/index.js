let button = document.getElementById("superDuperButton");
let list = document.getElementById("myList");
let index = 3;

function ordinal_suffix_of(i) {
    let j = i % 10, k = i % 100;

    if (j === 1 && k !== 11) {return i + "st";}
    if (j === 2 && k !== 12) {return i + "nd";}
    if (j === 3 && k !== 13) {return i + "rd";}
    return i + "th";
}

button.addEventListener("click", function() {
	// Your code here
	let myLi = document.createElement("li");
	index += 1;
	myLi.innerHTML = ordinal_suffix_of(index);
	list.appendChild(myLi);
});
