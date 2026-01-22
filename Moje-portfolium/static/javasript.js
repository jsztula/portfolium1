alert ("Vítám z externího souboru")

var promt = 1;
var promt2 = 2;

var vysledek = promt2++ + promt;
console.log(vysledek)

let celsius = 25;

function toFahrenheit(c) {
  return c * 9/5 + 32;
}

function toKelvin(c) {
  return c + 273.15;
}

console.log("Fahrenheit:", toFahrenheit(celsius));
console.log("Kelvin:", toKelvin(celsius));
