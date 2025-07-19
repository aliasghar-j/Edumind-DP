from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/navbar')
def navbar():
    return render_template('navbar.html')

@app.route('/hero')
def hero():
    return render_template('hero.html')

@app.route('/how-it-works')
def how_it_works():
    return render_template('how_it_works.html')

@app.route('/cta')
def cta():
    return render_template('cta.html')

@app.route('/footer')
def footer():
    return render_template('footer.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000) 