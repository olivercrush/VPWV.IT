from io import BytesIO
from PIL import Image
import base64
import re

def applyEffects(image, effectList, height, width, imageType):
    print("PROCESSING IMAGE")
    pix = decodeImage(image)

    #print(width)
    #print(height)
    #print(len(pix))

    for i in range(len(pix)):
        pix[i] = (pix[i][0], 0, 0)

    return encodeImage(pix, height, width, imageType)

def encodeImage(pix, heigth, width, imageType):

    if imageType == 'png':
        img = Image.new("RGBA", (width, heigth))
    else:
        img = Image.new("RGB", (width, heigth))

    img.putdata(tuple(pix))
    buffered = BytesIO()
    img.save(buffered, imageType)
    img_str = base64.b64encode(buffered.getvalue())
    print("Size after : " + str(len(img_str)))
    return img_str


def decodeImage(b64Image):
    #decoded = base64.b64decode(b64Image)
    image_data = re.sub('^data:image/.+;base64,', '', b64Image)
    print("Size before : " + str(len(image_data)))
    img = Image.open(BytesIO(base64.b64decode(image_data)))
    rgb = list(img.getdata())
    return rgb