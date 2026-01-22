function spustitCviceni() {
    let vystup = document.getElementById("vystup");
    vystup.textContent = "";

    vystup.textContent += "=== Block Scope (let) ===\n";

    if (true) {
        let x = 100;
        vystup.textContent += "Uvnitř bloku: x = " + x + "\n";
    }

    try {

        vystup.textContent += "Mimo blok: x = " + x + "\n";
    } catch (err) {
        vystup.textContent += "Mimo blok: " + err + "\n";
    }

    vystup.textContent += "\n";



    vystup.textContent += "=== Přetypování ===\n";

    let text = "42abc";

    let vysParseInt = parseInt(text);
    let vysNumber = Number(text);

    vystup.textContent += "parseInt('42abc') -> " + vysParseInt + "\n";
    vystup.textContent += "Number('42abc') -> " + vysNumber + "\n\n";

    vystup.textContent += "=== Funkce: spocitejObvod(polomer) ===\n";

    const PI = 3.14159;

    function spocitejObvod(polomer) {
        return 2 * PI * polomer;
    }

    let polomer = 5;
    let obvod = spocitejObvod(polomer);

    vystup.textContent += "Poloměr: " + polomer + "\n";
    vystup.textContent += "Obvod: " + obvod + "\n";
}
