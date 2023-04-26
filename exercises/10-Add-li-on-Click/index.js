let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let list = document.createElement("li");
	let ul = document.querySelector("#myList");
	list.textContent = "Hello World";
	ul.appendChild(list);
});
