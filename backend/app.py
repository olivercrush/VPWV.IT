from flask import Flask
from flask import request
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
        #print("HEIGHT : " + str(request.json['imageSize']['height']) + " / WIDTH : " + str(request.json['imageSize']['width']))
        #print(base64.b64decode(request.json['image']))
        #print(request.json['imageType'])
        return "data:image/" + request.json['imageType'] + ";base64," + str(newImage).replace("b'", "")
    else:
        return 'NOT OK'