from flask import Flask, jsonify, request, redirect, url_for, render_template

app = Flask(__name__)

@app.route('/')
def acheteurs():
    return render_template("acheteurs.component.html")

@app.route('/acheteurs.component.html', methods=['GET', 'POST'])
def product():
    if request.method == "POST":
        user = request.form["Arachide"]
        return redirect(url_for("user", usr=user))



if __name__ == '__main__':
    app.run(debug=True)