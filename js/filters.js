function drawLGBT(image, canvas) {
  outImage = new SimpleImage(image);
  const rectHeight = outImage.getHeight();
  const rectSegment = parseInt(rectHeight) / 7;
  let Y;
  let X;
  for (pixel of outImage.values()) {
    X = pixel.getX();
    Y = pixel.getY();
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (Y >= 6 * parseInt(rectSegment)) {
      doRed(avgColor, pixel);
    } else if (Y >= 5 * parseInt(rectSegment)) {
      doOrange(avgColor, pixel);
    } else if (Y >= 4 * parseInt(rectSegment)) {
      doYellow(avgColor, pixel);
    } else if (Y >= 3 * parseInt(rectSegment)) {
      doGreen(avgColor, pixel);
    } else if (Y >= 2 * parseInt(rectSegment)) {
      doBlue(avgColor, pixel);
    } else if (Y >= parseInt(rectSegment)) {
      doIndigo(avgColor, pixel);
    } else {
      doViolet(avgColor, pixel);
    }
  }

  outImage.drawTo(canvas);
}

function drawAsexual(image, canvas) {
  outImage = new SimpleImage(image);
  const rectHeight = outImage.getHeight();
  const rectSegment = parseInt(rectHeight) / 4;
  let Y;
  let X;
  for (pixel of outImage.values()) {
    X = pixel.getX();
    Y = pixel.getY();
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (Y >= 3 * parseInt(rectSegment)) {
      doIndigo(avgColor, pixel);
    } else if (Y >= 2 * parseInt(rectSegment)) {
      doWhite(avgColor, pixel);
    } else if (Y >= parseInt(rectSegment)) {
      doGray(avgColor, pixel);
    } else {
      doBlack(avgColor, pixel);
    }
  }

  outImage.drawTo(canvas);
}

function drawBisexual(image, canvas) {
  outImage = new SimpleImage(image);
  const rectHeight = outImage.getHeight();
  const rectSegment = parseInt(rectHeight) / 3;
  let Y;
  let X;
  for (pixel of outImage.values()) {
    X = pixel.getX();
    Y = pixel.getY();
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (Y >= 2 * parseInt(rectSegment)) {
      doBlue(avgColor, pixel);
    } else if (Y >= parseInt(rectSegment)) {
      doPurple(avgColor, pixel);
    } else {
      doPink(avgColor, pixel);
    }
  }

  outImage.drawTo(canvas);
}

function drawPansexual(image, canvas) {
  outImage = new SimpleImage(image);
  const rectHeight = outImage.getHeight();
  const rectSegment = parseInt(rectHeight) / 3;
  let Y;
  let X;
  for (pixel of outImage.values()) {
    X = pixel.getX();
    Y = pixel.getY();
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (Y >= 2 * parseInt(rectSegment)) {
      doSkyBlue(avgColor, pixel);
    } else if (Y >= parseInt(rectSegment)) {
      doYellow(avgColor, pixel);
    } else {
      doPink(avgColor, pixel);
    }
  }

  outImage.drawTo(canvas);
}

function drawGay(image, canvas) {
  outImage = new SimpleImage(image);
  const rectHeight = outImage.getHeight();
  const rectSegment = parseInt(rectHeight) / 5;
  let Y;
  let X;
  for (pixel of outImage.values()) {
    X = pixel.getX();
    Y = pixel.getY();
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (Y >= 4 * parseInt(rectSegment)) {
      doIndigo(avgColor, pixel);
    } else if (Y >= 3 * parseInt(rectSegment)) {
      doSkyThenBlue(avgColor, pixel);
    } else if (Y >= 2 * parseInt(rectSegment)) {
      doWhite(avgColor, pixel);
    } else if (Y >= parseInt(rectSegment)) {
      doLightinGreen(avgColor, pixel);
    } else {
      doLightGreen(avgColor, pixel);
    }
  }

  outImage.drawTo(canvas);
}

function drawLesbian(image, canvas) {
  outImage = new SimpleImage(image);
  const rectHeight = outImage.getHeight();
  const rectSegment = parseInt(rectHeight) / 5;
  let Y = 0;
  let X = 0;
  for (pixel of outImage.values()) {
    X = pixel.getX();
    Y = pixel.getY();
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (Y >= 4 * parseInt(rectSegment)) {
      doLightIndigo(avgColor, pixel);
    } else if (Y >= 3 * parseInt(rectSegment)) {
      doPink(avgColor, pixel);
    } else if (Y >= 2 * parseInt(rectSegment)) {
      doWhite(avgColor, pixel);
    } else if (Y >= parseInt(rectSegment)) {
      doOrange(avgColor, pixel);
    } else {
      doDarkOrange(avgColor, pixel);
    }
  }

  outImage.drawTo(canvas);
}

function drawTransexual(image, canvas) {
  outImage = new SimpleImage(image);
  const rectHeight = outImage.getHeight();
  const rectSegment = parseInt(rectHeight) / 5;
  let Y = 0;
  let X = 0;
  for (pixel of outImage.values()) {
    X = pixel.getX();
    Y = pixel.getY();
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (Y >= 4 * parseInt(rectSegment)) {
      doSkyThenBlue(avgColor, pixel);
    } else if (Y >= 3 * parseInt(rectSegment)) {
      doLightPink(avgColor, pixel);
    } else if (Y >= 2 * parseInt(rectSegment)) {
      doWhite(avgColor, pixel);
    } else if (Y >= parseInt(rectSegment)) {
      doLightPink(avgColor, pixel);
    } else {
      doSkyThenBlue(avgColor, pixel);
    }
  }

  outImage.drawTo(canvas);
}

function drawAromantic(image, canvas) {
  outImage = new SimpleImage(image);
  const rectHeight = outImage.getHeight();
  const rectSegment = parseInt(rectHeight) / 5;
  let Y = 0;
  let X = 0;
  for (pixel of outImage.values()) {
    X = pixel.getX();
    Y = pixel.getY();
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (Y >= 4 * parseInt(rectSegment)) {
      doBlack(avgColor, pixel);
    } else if (Y >= 3 * parseInt(rectSegment)) {
      doGray(avgColor, pixel);
    } else if (Y >= 2 * parseInt(rectSegment)) {
      doWhite(avgColor, pixel);
    } else if (Y >= parseInt(rectSegment)) {
      doLightinGreen(avgColor, pixel);
    } else {
      doLightGreen(avgColor, pixel);
    }
  }

  outImage.drawTo(canvas);
}

function drawStraight(image, canvas) {
  outImage = new SimpleImage(image);
  const rectHeight = outImage.getHeight();
  const rectSegment = parseInt(rectHeight) / 3;
  let Y = 0;
  let X = 0;
  for (pixel of outImage.values()) {
    X = pixel.getX();
    Y = pixel.getY();
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (Y >= 2 * parseInt(rectSegment)) {
      doLightPink(avgColor, pixel);
    } else if (Y >= parseInt(rectSegment)) {
      doWhite(avgColor, pixel);
    } else {
      doSkyThenBlue(avgColor, pixel);
    }
  }

  outImage.drawTo(canvas);
}

function drawNonBinary(image, canvas) {
  outImage = new SimpleImage(image);
  const rectHeight = outImage.getHeight();
  const rectSegment = parseInt(rectHeight) / 4;
  let Y = 0;
  let X = 0;
  for (pixel of outImage.values()) {
    X = pixel.getX();
    Y = pixel.getY();
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (Y >= 3 * parseInt(rectSegment)) {
      doYellow(avgColor, pixel);
    } else if (Y >= 2 * parseInt(rectSegment)) {
      doWhite(avgColor, pixel);
    } else if (Y >= parseInt(rectSegment)) {
      doIndigo(avgColor, pixel);
    } else {
      doBlack(avgColor, pixel);
    }
  }

  outImage.drawTo(canvas);
}

function drawPeru(image, canvas) {
  outImage = new SimpleImage(image);
  const rectWidth = outImage.getWidth();
  const rectSegment = parseInt(rectWidth) / 3;
  let Y = 0;
  let X = 0;
  for (pixel of outImage.values()) {
    X = pixel.getX();
    Y = pixel.getY();
    //    outImage.setPixel(X, Y, pixel);
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (X >= 2 * parseInt(rectSegment)) {
      doRed(avgColor, pixel);
    } else if (X >= parseInt(rectSegment)) {
      doWhite(avgColor, pixel);
    } else {
      doRed(avgColor, pixel);
    }
  }

  outImage.drawTo(canvas);
}
