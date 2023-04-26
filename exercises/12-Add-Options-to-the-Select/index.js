let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
let theId = document.querySelector("#mySelect");

for(let country of countries) {
    let option = document.createElement("option");
    option.text = country;
    theId.appendChild(option);
}

theId.addEventListener("change", function() {
    let theSelectedCountry = this.value;
    alert(theSelectedCountry)


})