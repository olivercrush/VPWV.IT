from io import BytesIO
from PIL import Image
import base64
import re

def applyEffects(image, effectList):
    print("PROCESSING IMAGE")
    pix = decodeImage(image)
    #print(pix)

def decodeImage(b64Image):
    #decoded = base64.b64decode(b64Image)
    image_data = re.sub('^data:image/.+;base64,', '', b64Image)
    img = Image.open(BytesIO(base64.b64decode(image_data)))
    rgb = list(img.getdata())
    return rgb