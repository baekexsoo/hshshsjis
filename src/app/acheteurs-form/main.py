from flask import Flask, jsonify, request, redirect, url_for, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/login.html', methods=['GET', 'POST'])
def product():
    if request.method == "POST":
        user = request.form["Arachide"]
        return redirect(url_for("login", usr=user))

@app.route("/<usr>")


if __name__ == '__main__':
    app.run(debug=True)