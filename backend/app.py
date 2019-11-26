from flask import Flask
from flask import request
from flask import send_file
from flask_cors import CORS
from ImageProcessing.applyEffects import applyEffects

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/processImage', methods=['POST'])
def processImage():
    if request.method == 'POST':   
        newImage = applyEffects(request.json['image'], "", request.json['imageSize']['height'], request.json['imageSize']['width'], request.json['imageType'])
        return send_file(newImage, mimetype='image/'+request.json['imageType'])
        
    else:
        return 'NOT OK'