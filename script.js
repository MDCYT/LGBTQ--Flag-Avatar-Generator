var imageIn;
var image;
var canvas;
var imageorgnl = null;
var grayImage = null;
var outImage;
var pixel;
var red;
var green;
var blue;
var avgColor;

function loadImage() {
  imageIn = document.getElementById("img");
  image = new SimpleImage(imageIn);
  imageorgnl = new SimpleImage(image);
  canvas = document.getElementById("c1");
  image.drawTo(canvas);
}

function doReset() {
  outImage = new SimpleImage(image);
  outImage.drawTo(canvas);
}

function checkImageLoad() {
  if (image === null || !image.complete()) {
    return false;
  } else {
    return true;
  }
}
// Main function for Rainbow
function doRainbow() {
  if (checkImageLoad()) {
    drawRainbow();
    outImage.drawTo(canvas);
  } else {
    alert("Image Not Loaded");
  }
}

// Main function for Rainbow
function doAsexual() {
  if (checkImageLoad()) {
    drawAsexual();
    outImage.drawTo(canvas);
  } else {
    alert("Image Not Loaded");
  }
}

function doBisexual() {
  if (checkImageLoad()) {
    drawBisexual();
    outImage.drawTo(canvas);
  } else {
    alert("Image Not Loaded");
  }
}
//Draw Rainbow
function drawRainbow() {
  outImage = new SimpleImage(image);
  var rectHeight = outImage.getHeight();
  var rectSegment = parseInt(rectHeight) / 7;
  var Y;
  var X;
  for (pixel of outImage.values()) {
    X = pixel.getX();
    Y = pixel.getY();
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (Y >= 6 * parseInt(rectSegment)) {
      doRed();
    } else if (Y >= 5 * parseInt(rectSegment)) {
      doOrange();
    } else if (Y >= 4 * parseInt(rectSegment)) {
      doYellow();
    } else if (Y >= 3 * parseInt(rectSegment)) {
      doGreen();
    } else if (Y >= 2 * parseInt(rectSegment)) {
      doBlue();
    } else if (Y >= parseInt(rectSegment)) {
      doIndigo();
    } else {
      doViolet();
    }
  }
}
//Draw asexual flag
function drawAsexual() {
  outImage = new SimpleImage(image);
  var rectHeight = outImage.getHeight();
  var rectSegment = parseInt(rectHeight) / 4;
  var Y;
  var X;
  for (pixel of outImage.values()) {
    X = pixel.getX();
    Y = pixel.getY();
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (Y >= 3 * parseInt(rectSegment)) {
      doIndigo();
    } else if (Y >= 2 * parseInt(rectSegment)) {
      doWhite();
    } else if (Y >= parseInt(rectSegment)) {
      doGray();
    } else {
      doBlack();
    }
  }
}

function drawBisexual() {
  outImage = new SimpleImage(image);
  var rectHeight = outImage.getHeight();
  var rectSegment = parseInt(rectHeight) / 3;
  var Y;
  var X;
  for (pixel of outImage.values()) {
    X = pixel.getX();
    Y = pixel.getY();
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (Y >= 2 * parseInt(rectSegment)) {
      doBlue();
    } else if (Y >= parseInt(rectSegment)) {
      doPurple();
    } else {
      doPink();
    }
  }
}

function doViolet() {
  if (avgColor < 128) {
    red = Math.round(1.6 * avgColor);
    green = 0;
    blue = Math.round(1.6 * avgColor);
  } else {
    red = Math.round(0.4 * ºavgColor + 153);
    green = Math.round(2 * avgColor - 255);
    blue = Math.round(0.4 * avgColor + 153);
  }
  pixel.setRed(red);
  pixel.setGreen(green);
  pixel.setBlue(blue);
}

function doPurple() {
  if (avgColor < 128) {
    red = Math.round(1.6 * avgColor);
    green = 0;
    blue = Math.round(1.6 * avgColor);
  } else {
    red = Math.round(0.4 * avgColor + 153);
    green = Math.round(2 * avgColor - 255);
    blue = Math.round(0.4 * avgColor + 153);
  }
  pixel.setRed(red);
  pixel.setGreen(green);
  pixel.setBlue(blue);
}

function doPink() {
  if (avgColor < 128) {
    red = Math.round(2.5 * avgColor);
    green = 0;
    blue = Math.round(2.5 * avgColor);
  } else {
    red = 255;
    green = Math.round(2 * avgColor - 255);
    blue = 255;
  }
  pixel.setRed(red);
  pixel.setGreen(green);
  pixel.setBlue(blue);
}

function doIndigo() {
  if (avgColor < 128) {
    red = Math.round(0.8 * avgColor);
    green = 0;
    blue = Math.round(2 * avgColor);
  } else {
    red = Math.round(1.2 * avgColor - 51);
    green = Math.round(2 * avgColor - 255);
    blue = 255;
  }
  pixel.setRed(red);
  pixel.setGreen(green);
  pixel.setBlue(blue);
}

function doBlack() {
  //If the color of the pixel is white o black do nothing
  if (avgColor != 0 && avgColor != 255) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
  }
}

function doWhite() {
  if (avgColor < 128) {
    red = Math.round(2.5 * avgColor);
    green = Math.round(2.5 * avgColor);
    blue = Math.round(2.5 * avgColor);
  } else {
    red = 255;
    green = 255;
    blue = 255;
  }
  pixel.setRed(red);
  pixel.setGreen(green);
  pixel.setBlue(blue);
}

function doGray() {
  if (avgColor < 128) {
    red = Math.round(2 * avgColor);
    green = Math.round(2 * avgColor);
    blue = Math.round(2 * avgColor);
  } else {
    red = Math.round(2 * avgColor - 255);
    green = Math.round(2 * avgColor - 255);
    blue = Math.round(2 * avgColor - 255);
  }
  pixel.setRed(red);
  pixel.setGreen(green);
  pixel.setBlue(blue);
}

function doBlue() {
  if (avgColor < 128) {
    red = 0;
    green = 0;
    blue = Math.round(2 * avgColor);
  } else {
    red = Math.round(2 * avgColor - 255);
    green = Math.round(2 * avgColor - 255);
    blue = 255;
  }
  pixel.setRed(red);
  pixel.setGreen(green);
  pixel.setBlue(blue);
}
function doGreen() {
  if (avgColor < 128) {
    red = 0;
    green = Math.round(2 * avgColor);
    blue = 0;
  } else {
    red = Math.round(2 * avgColor - 255);
    green = 255;
    blue = Math.round(2 * avgColor - 255);
  }
  pixel.setRed(red);
  pixel.setGreen(green);
  pixel.setBlue(blue);
}

function doYellow() {
  if (avgColor < 128) {
    red = Math.round(2 * avgColor);
    green = Math.round(2 * avgColor);
    blue = 0;
  } else {
    red = 255;
    green = 255;
    blue = Math.round(2 * avgColor - 255);
  }
  pixel.setRed(red);
  pixel.setGreen(green);
  pixel.setBlue(blue);
}

function doOrange() {
  if (avgColor < 128) {
    red = Math.round(2 * avgColor);
    green = Math.round(0.8 * avgColor);
    blue = 0;
  } else {
    red = 255;
    green = Math.round(1.2 * avgColor - 51);
    blue = Math.round(2 * avgColor - 255);
  }
  pixel.setRed(red);
  pixel.setGreen(green);
  pixel.setBlue(blue);
}

function doRed() {
  if (avgColor < 128) {
    red = Math.round(2 * avgColor);
    green = 0;
    blue = 0;
  } else {
    red = 255;
    green = Math.round(2 * avgColor - 255);
    blue = Math.round(2 * avgColor - 255);
  }
  pixel.setRed(red);
  pixel.setGreen(green);
  pixel.setBlue(blue);
}
