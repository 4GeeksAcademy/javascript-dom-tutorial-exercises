// Your code here

let input = document.getElementById("addToDo");
let ul = document.getElementsByTagName("UL");

input.addEventListener("keypress", function(e) {
	if (e.keyCode == 13) {
		addTaskEvent();
	}
});

deleteTaskEvent();

function addTask() {
	let li = document.createElement("LI");
	li.innerHTML = '<span><i class="fa fa-trash"></i></span> ' + input.value;
	li.addEventListener("click", function() {
		this.parentNode.removeChild(this);
	});
	ul[0].appendChild(li);
	input.value = "";
}

function deleteTaskEvent() {
	const lis = document.getElementsByTagName("li");
	for (const li of lis) {
		li.addEventListener("click", function() {
			this.parentNode.removeChild(this);
		});
	}
}
