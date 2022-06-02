let imageIn
let image = null
let canvas
let imageorgnl = null
const grayImage = null
let outImage
let pixel
let red
let green
let blue
let avgColor

function loadImage () {
  imageIn = document.getElementById('img')
  image = new SimpleImage(imageIn)
  imageorgnl = new SimpleImage(image)
  canvas = document.getElementById('c1')
  image.drawTo(canvas)
}

function doReset () {
  outImage = new SimpleImage(image)
  outImage.drawTo(canvas)
}

function checkImageLoad () {
  if (image === null) {
    console.log('Image not loaded')
    return false
  } else {
    console.log('Image loaded')
    return true
  }
}
// Main function for Rainbow
function doRainbow () {
  if (checkImageLoad()) {
    drawRainbow()
    outImage.drawTo(canvas)
  } else {
    alert('Image Not Loaded')
  }
}

// Main function for Rainbow
function doAsexual () {
  if (checkImageLoad()) {
    drawAsexual()
    outImage.drawTo(canvas)
  } else {
    alert('Image Not Loaded')
  }
}

function doBisexual () {
  if (checkImageLoad()) {
    drawBisexual()
    outImage.drawTo(canvas)
  } else {
    alert('Image Not Loaded')
  }
}

function doPansexual () {
  if (checkImageLoad()) {
    drawPansexual()
    outImage.drawTo(canvas)
  } else {
    alert('Image Not Loaded')
  }
}

function doGay () {
  if (checkImageLoad()) {
    drawGay()
    outImage.drawTo(canvas)
  } else {
    alert('Image Not Loaded')
  }
}

function doLesbian () {
  if (checkImageLoad()) {
    drawLesbian()
    outImage.drawTo(canvas)
  } else {
    alert('Image Not Loaded')
  }
}

function doTransexual () {
  if (checkImageLoad()) {
    drawTransexual()
    outImage.drawTo(canvas)
  } else {
    alert('Image Not Loaded')
  }
}

// Draw Rainbow
function drawRainbow () {
  outImage = new SimpleImage(image)
  const rectHeight = outImage.getHeight()
  const rectSegment = parseInt(rectHeight) / 7
  let Y
  let X
  for (pixel of outImage.values()) {
    X = pixel.getX()
    Y = pixel.getY()
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3
    if (Y >= 6 * parseInt(rectSegment)) {
      doRed()
    } else if (Y >= 5 * parseInt(rectSegment)) {
      doOrange()
    } else if (Y >= 4 * parseInt(rectSegment)) {
      doYellow()
    } else if (Y >= 3 * parseInt(rectSegment)) {
      doGreen()
    } else if (Y >= 2 * parseInt(rectSegment)) {
      doBlue()
    } else if (Y >= parseInt(rectSegment)) {
      doIndigo()
    } else {
      doViolet()
    }
  }
}
// Draw asexual flag
function drawAsexual () {
  outImage = new SimpleImage(image)
  const rectHeight = outImage.getHeight()
  const rectSegment = parseInt(rectHeight) / 4
  let Y
  let X
  for (pixel of outImage.values()) {
    X = pixel.getX()
    Y = pixel.getY()
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3
    if (Y >= 3 * parseInt(rectSegment)) {
      doIndigo()
    } else if (Y >= 2 * parseInt(rectSegment)) {
      doWhite()
    } else if (Y >= parseInt(rectSegment)) {
      doGray()
    } else {
      doBlack()
    }
  }
}

function drawBisexual () {
  outImage = new SimpleImage(image)
  const rectHeight = outImage.getHeight()
  const rectSegment = parseInt(rectHeight) / 3
  let Y
  let X
  for (pixel of outImage.values()) {
    X = pixel.getX()
    Y = pixel.getY()
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3
    if (Y >= 2 * parseInt(rectSegment)) {
      doBlue()
    } else if (Y >= parseInt(rectSegment)) {
      doPurple()
    } else {
      doPink()
    }
  }
}

function drawPansexual () {
  outImage = new SimpleImage(image)
  const rectHeight = outImage.getHeight()
  const rectSegment = parseInt(rectHeight) / 3
  let Y
  let X
  for (pixel of outImage.values()) {
    X = pixel.getX()
    Y = pixel.getY()
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3
    if (Y >= 2 * parseInt(rectSegment)) {
      doSkyBlue()
    } else if (Y >= parseInt(rectSegment)) {
      doYellow()
    } else {
      doPink()
    }
  }
}

function drawGay () {
  outImage = new SimpleImage(image)
  const rectHeight = outImage.getHeight()
  const rectSegment = parseInt(rectHeight) / 5
  let Y
  let X
  for (pixel of outImage.values()) {
    X = pixel.getX()
    Y = pixel.getY()
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3
    if (Y >= 4 * parseInt(rectSegment)) {
      doIndigo()
    } else if (Y >= 3 * parseInt(rectSegment)) {
      doSkyThenBlue()
    } else if (Y >= 2 * parseInt(rectSegment)) {
      doWhite()
    } else if (Y >= parseInt(rectSegment)) {
      doLightinGreen()
    } else {
      doLightGreen()
    }
  }
}

function drawLesbian () {
  outImage = new SimpleImage(image)
  const rectHeight = outImage.getHeight()
  const rectSegment = parseInt(rectHeight) / 5
  let Y = 0
  let X = 0
  for (pixel of outImage.values()) {
    X = pixel.getX()
    Y = pixel.getY()
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3
    if (Y >= 4 * parseInt(rectSegment)) {
      doLightIndigo()
    } else if (Y >= 3 * parseInt(rectSegment)) {
      doPink()
    } else if (Y >= 2 * parseInt(rectSegment)) {
      doWhite()
    } else if (Y >= parseInt(rectSegment)) {
      doOrange()
    } else {
      doDarkOrange()
    }
  }
}

function drawTransexual () {
  outImage = new SimpleImage(image)
  const rectHeight = outImage.getHeight()
  const rectSegment = parseInt(rectHeight) / 5
  let Y = 0
  let X = 0
  for (pixel of outImage.values()) {
    X = pixel.getX()
    Y = pixel.getY()
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3
    if (Y >= 4 * parseInt(rectSegment)) {
      doSkyThenBlue()
    } else if (Y >= 3 * parseInt(rectSegment)) {
      doLightPink()
    } else if (Y >= 2 * parseInt(rectSegment)) {
      doWhite()
    } else if (Y >= parseInt(rectSegment)) {
      doLightPink()
    } else {
      doSkyThenBlue()
    }
  }
}

function doViolet () {
  if (avgColor < 128) {
    red = Math.round(1.6 * avgColor)
    green = 0
    blue = Math.round(1.6 * avgColor)
  } else {
    red = Math.round(0.4 * avgColor + 153)
    green = Math.round(2 * avgColor - 255)
    blue = Math.round(0.4 * avgColor + 153)
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}

function doPurple () {
  if (avgColor < 128) {
    red = Math.round(1.6 * avgColor)
    green = 0
    blue = Math.round(1.6 * avgColor)
  } else {
    red = Math.round(0.4 * avgColor + 153)
    green = Math.round(2 * avgColor - 255)
    blue = Math.round(0.4 * avgColor + 153)
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}

function doPink () {
  if (avgColor < 128) {
    red = Math.round(2.5 * avgColor)
    green = 0
    blue = Math.round(2.5 * avgColor)
  } else {
    red = 255
    green = Math.round(2 * avgColor - 255)
    blue = 255
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}

function doLightPink () {
  if (avgColor < 128) {
    red = Math.round(2 * avgColor)
    green = Math.round(1.1 * avgColor)
    blue = Math.round(0.8 * avgColor)
  } else {
    red = Math.round(1.5 * avgColor)
    green = Math.round(0.9 * avgColor)
    blue = Math.round(1 * avgColor)
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}

function doSkyBlue () {
  if (avgColor < 128) {
    red = Math.round(0.7 * avgColor)
    green = Math.round(0.7 * avgColor)
    blue = Math.round(1.6 * avgColor)
  } else {
    red = Math.round(2 * avgColor - 255)
    green = Math.round(2 * avgColor - 255)
    blue = 255
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}

function doSkyThenBlue () {
  if (avgColor < 128) {
    red = Math.round(0.9 * avgColor)
    green = Math.round(1.3 * avgColor)
    blue = Math.round(1.8 * avgColor)
  } else {
    red = Math.round(0.8 * avgColor)
    green = Math.round(1.1 * avgColor)
    blue = Math.round(1.8 * avgColor)
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}

function doIndigo () {
  if (avgColor < 128) {
    red = Math.round(0.8 * avgColor)
    green = 0
    blue = Math.round(2 * avgColor)
  } else {
    red = Math.round(1.2 * avgColor - 51)
    green = Math.round(2 * avgColor - 255)
    blue = 255
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}

function doLightIndigo () {
  if (avgColor < 128) {
    red = Math.round(1.1 * avgColor)
    green = 0
    blue = Math.round(2.3 * avgColor)
  } else {
    red = Math.round(1.5 * avgColor - 51)
    green = Math.round(2.3 * avgColor - 255)
    blue = 255
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}

function doBlack () {
  // If the color of the pixel is white o black do nothing
  if (avgColor < 128) {
    red = Math.round(0.5 * avgColor)
    green = Math.round(0.5 * avgColor)
    blue = Math.round(0.5 * avgColor)
  } else {
    red = Math.round(0.2 * avgColor)
    green = Math.round(0.2 * avgColor)
    blue = Math.round(0.2 * avgColor)
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}

function doWhite () {
  if (avgColor < 128) {
    red = Math.round(2.5 * avgColor)
    green = Math.round(2.5 * avgColor)
    blue = Math.round(2.5 * avgColor)
  } else {
    red = 255
    green = 255
    blue = 255
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}

function doGray () {
  if (avgColor < 128) {
    red = Math.round(2 * avgColor)
    green = Math.round(2 * avgColor)
    blue = Math.round(2 * avgColor)
  } else {
    red = Math.round(2 * avgColor - 255)
    green = Math.round(2 * avgColor - 255)
    blue = Math.round(2 * avgColor - 255)
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}

function doBlue () {
  if (avgColor < 128) {
    red = 0
    green = 0
    blue = Math.round(2 * avgColor)
  } else {
    red = Math.round(2 * avgColor - 255)
    green = Math.round(2 * avgColor - 255)
    blue = 255
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}
function doGreen () {
  if (avgColor < 128) {
    red = 0
    green = Math.round(2 * avgColor)
    blue = 0
  } else {
    red = Math.round(2 * avgColor - 255)
    green = 255
    blue = Math.round(2 * avgColor - 255)
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}

function doLightGreen () {
  if (avgColor < 128) {
    red = Math.round(0.1 * avgColor)
    green = Math.round(2.2 * avgColor)
    blue = Math.round(0.9 * avgColor)
  } else {
    red = Math.round(0.1 * avgColor)
    green = Math.round(0.9 * avgColor)
    blue = Math.round(0.8 * avgColor)
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}

function doLightinGreen () {
  if (avgColor < 128) {
    red = Math.round(1.1 * avgColor)
    green = Math.round(2.2 * avgColor)
    blue = Math.round(1.4 * avgColor)
  } else {
    red = Math.round(0.8 * avgColor)
    green = Math.round(1.6 * avgColor)
    blue = Math.round(1.4 * avgColor)
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}

function doYellow () {
  if (avgColor < 128) {
    red = Math.round(2 * avgColor)
    green = Math.round(2 * avgColor)
    blue = 0
  } else {
    red = 255
    green = 255
    blue = Math.round(2 * avgColor - 255)
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}

function doOrange () {
  if (avgColor < 128) {
    red = Math.round(2 * avgColor)
    green = Math.round(0.8 * avgColor)
    blue = 0
  } else {
    red = 255
    green = Math.round(1.2 * avgColor - 51)
    blue = Math.round(2 * avgColor - 255)
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}

function doDarkOrange () {
  if (avgColor < 128) {
    red = Math.round(1.8 * avgColor)
    green = Math.round(0.7 * avgColor)
    blue = 0
  } else {
    red = 255
    green = Math.round(1 * avgColor - 51)
    blue = Math.round(1.8 * avgColor - 255)
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}

function doRed () {
  if (avgColor < 128) {
    red = Math.round(2 * avgColor)
    green = 0
    blue = 0
  } else {
    red = 255
    green = Math.round(2 * avgColor - 255)
    blue = Math.round(2 * avgColor - 255)
  }
  pixel.setRed(red)
  pixel.setGreen(green)
  pixel.setBlue(blue)
}
