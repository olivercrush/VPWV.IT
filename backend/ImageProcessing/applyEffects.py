from io import BytesIO
#from io import StringIO
from PIL import Image
import base64
import re

from ImageProcessing.grayscale import grayscale


def applyEffects(image, effectList, height, width, imageType):
    print("PROCESSING IMAGE")
    pix = decodeImage(image)

    pix = grayscale(pix)

    return encodeImage(pix, height, width, imageType)

def encodeImage(pix, heigth, width, imageType):

    if (imageType == 'png' or imageType == 'gif'):
        img = Image.new("RGBA", (width, heigth))
    else:
        img = Image.new("RGB", (width, heigth))

    img.putdata(tuple(pix))
    buffered = BytesIO()
    img.save(buffered, imageType)
    buffered.seek(0)
    return buffered


def decodeImage(b64Image):
    image_data = re.sub('^data:image/.+;base64,', '', b64Image)
    #print("Size before : " + str(len(image_data)))
    img = Image.open(BytesIO(base64.b64decode(image_data)))
    rgb = list(img.getdata())
    return rgb