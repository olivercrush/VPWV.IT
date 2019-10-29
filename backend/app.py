from flask import Flask
from flask import request
from flask_cors import CORS
import base64
app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/processImage', methods=['POST'])
def processImage():
    if request.method == 'POST':
        #print(base64.b64decode(request.json['image']))
        return 'OK'
    else:
        return 'NOT OK'