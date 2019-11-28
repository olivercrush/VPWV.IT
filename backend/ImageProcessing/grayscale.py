def grayscale(pix):

    for i in range(len(pix)):
        gray = int(pix[i][0] * 0.33 + pix[i][1] * 0.33 + pix[i][2] * 0.33)
        pix[i] = (gray, gray, gray)

    return pix

# Average Grayscale : 0.33 ; 0.33 ; 0.33
# BT709 Grayscale : 0.2126 ; 0.7152 ; 0.0722
# BT601 Grayscale : 0.299 ; 0.587 ; 0.114

# Sources :
# https://www.htmlgoodies.com/html5/javascript/display-images-in-black-and-white-using-the-html5-canvas.html
# http://www.tannerhelland.com/3643/grayscale-image-algorithm-vb6/