// Agregar
let input = document.querySelector("#addToDo");
let ul = document.querySelector("#listToDo");

function addTask(event) {
    let iTag = document.createElement("i");
    let spanTag = document.createElement("span");
    let liTag = document.createElement("li");

    iTag.class = "fa fa-trash";
    liTag.innerHTML = this.value;

    spanTag.appendChild(iTag);
    liTag.appendChild(spanTag);
    ul.appendChild(liTag);

    this.value = "";
}

input.addEventListener('change', addTask);


// Eliminar
let allLi = document.querySelectorAll("li");

function deleteTask(event) {
    let tagName = event.srcElement.localName;

    //solo voy a eliminar, si el clic lo da en el ícono
    if (tagName == 'i') {
        let selectLi = (event.target.parentNode).parentNode;
        selectLi.parentNode.removeChild(selectLi);
    }
}
  
allLi.forEach(li => li.addEventListener('click', deleteTask));
