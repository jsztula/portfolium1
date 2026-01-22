document.getElementsById("popis").innerHTML = "tento text"
let result = document.getElementsByTagName("p");

console.log(result)

//document.getElementById("popis").innerHTML = "Tento text jsem změnil pomocí DOM";

//let result = document.getElementsByTagName("p");

//console.log(result)

const box = document.getElementById("box");
console.log(box);

//Vlastnost textContent vloží text bez HTML značek
box.textContent = "Tady jsem vložil text pomocí <b>vlastnosti</b> text content...";
//Vlastnost innerHTML vloží a aplikuje i HTML značky
box.innerHTML = "<h1>Tady jsem vložil nadpis...</h1><p>Za nadpisem budu mít odstavec</>"


box.style.backgroundColor = "lightgrey";

box.style.border = "2px solid black";