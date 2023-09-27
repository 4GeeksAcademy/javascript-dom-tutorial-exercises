let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
let selectElement = document.getElementById("mySelect");

for (let i = 0; i < countries.length; i++) {
  let option = document.createElement("option");
  option.value = countries[i];
  option.innerHTML = countries[i];
  selectElement.appendChild(option);
}

selectElement.addEventListener("change", function () {
  let selectedCountry = selectElement.value;
  alert(selectedCountry);
});
