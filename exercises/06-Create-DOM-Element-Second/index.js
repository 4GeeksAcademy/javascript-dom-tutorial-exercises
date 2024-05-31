// Your code here

// 1.
document.body.innerHTML = `<img src="https://via.placeholder.com/350x150" alt="ImagenGris_350x150" id="img1">`;
//<label for="img1">Imagen agregada con innerHTML</label>

// 2.
/*let myLabel = document.createElement("label");
myLabel.for = "img2";
myLabel.innerHTML = "Imagen agregada con appendChild"
document.body.appendChild(myLabel);*/

let myIMG = document.createElement("img");

myIMG.src="https://via.placeholder.com/350x150";
myIMG.alt = "ImagenGris_350x150";
myIMG.id = "img2";
myIMG.style.cssFloat = "right";

document.body.appendChild(myIMG);


