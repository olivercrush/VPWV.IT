from flask import Flask
from flask import request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/processImage', methods=['POST'])
def processImage():
    if request.method == 'POST':
        print(request.json['effects'])
        return 'OK'
    else:
        return 'NOT OK'