from flask import Flask, render_template
from  data import users, nazev_webu, popis, technologie, titulek_webu
from generator import generator
app = Flask(__name__)

@app.route('/')
def index():

    return render_template('index.htm', technologie = technologie)

@app.route('/contacts')
def contacts():
    return render_template('contacts.htm' , users = users)

if __name__ == '__main__':
    app.run(debug=True)


app = Flask(__name__)

@app.route('/generator')
def show_generator():
    number = generator()
    return render_template('generator.html', number=number)

if __name__ == '__main__':
    app.run(debug=True)


from flask import Flask, render_template, request
app = Flask(__name__)

produkty = [
    {"id": 1, "nazev": "Klávesnice", "cena": 499},
    {"id": 2, "nazev": "Myš", "cena": 299},
    {"id": 3, "nazev": "Monitor", "cena": 3499},
]

@app.route("/", methods=["GET", "POST"])
def eshop():
    nalezeny, zprava = None, None

    if request.method == "POST":
        try:
            produkty.append({
                "id": int(request.form["id"]),
                "nazev": request.form["nazev"],
                "cena": float(request.form["cena"])
            })
            zprava = "Produkt přidán."
        except:
            zprava = "Chyba při přidávání!"

    q = request.args.get("q", "").strip()
    if q:
        if q.isdigit():
            nalezeny = next((p for p in produkty if p["id"] == int(q)), None)
        if not nalezeny:
            nalezeny = next((p for p in produkty if q.lower() in p["nazev"].lower()), None)

    return render_template("eshop.html", produkty=produkty, nalezeny=nalezeny, zprava=zprava)

if __name__ == "__main__":
    app.run(debug=True)
