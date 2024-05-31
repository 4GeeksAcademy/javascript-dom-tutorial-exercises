let button = document.getElementById("superDuperButton");

button.addEventListener("click", function() {
	// Your code here
	let myDiv = document.createElement("div");
	myDiv.innerHTML = "Hello World";
	myDiv.style.background="yellow";
	document.body.appendChild(myDiv);
});
