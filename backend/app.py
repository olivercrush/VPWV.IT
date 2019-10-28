from flask import Flask
from flask import request
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/processImage', methods=['POST'])
def processImage():
    if request.method == 'POST':
        return 'OK'
    else
        return 'NOT OK'