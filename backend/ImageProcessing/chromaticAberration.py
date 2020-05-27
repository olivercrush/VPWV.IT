def chromaticAberration(pix):

    intensity = 5

    for i in range(len(pix)):
        if (i+intensity) < len(pix) and (i-intensity) >= 0:
            pix[i] = (pix[i+intensity][0], pix[i][1], pix[i-intensity][2])

    return pix