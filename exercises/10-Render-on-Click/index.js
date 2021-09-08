let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	const divAmarillo = document.createElement('div');
	divAmarillo.style.background = "yellow";
	divAmarillo.innerHTML = "Hello World";
	document.querySelector('body').appendChild(divAmarillo);
});