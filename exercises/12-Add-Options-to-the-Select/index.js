let countries = ["Argentina", "USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
let sel = document.querySelector("#mySelect");

for (let i = 0; i < countries.length; i++) {
    let op = document.createElement("option");

    op.value = i;
    op.innerHTML = countries[i];

    sel.appendChild(op);
}

sel.addEventListener("change", function(event) {
    alert(countries[event.target.value]);
    //console.log(countries[event.target.value]);
})