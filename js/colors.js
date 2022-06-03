function doViolet(avgColor, pixel) {
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
  
  function doPurple(avgColor, pixel) {
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
  
  function doPink(avgColor, pixel) {
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
  
  function doLightPink(avgColor, pixel) {
    if (avgColor < 128) {
      red = Math.round(2 * avgColor);
      green = Math.round(1.1 * avgColor);
      blue = Math.round(0.8 * avgColor);
    } else {
      red = Math.round(1.5 * avgColor);
      green = Math.round(0.9 * avgColor);
      blue = Math.round(1 * avgColor);
    }
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
  }
  
  function doSkyBlue(avgColor, pixel) {
    if (avgColor < 128) {
      red = Math.round(0.7 * avgColor);
      green = Math.round(0.7 * avgColor);
      blue = Math.round(1.6 * avgColor);
    } else {
      red = Math.round(2 * avgColor - 255);
      green = Math.round(2 * avgColor - 255);
      blue = 255;
    }
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
  }
  
  function doSkyThenBlue(avgColor, pixel) {
    if (avgColor < 128) {
      red = Math.round(0.9 * avgColor);
      green = Math.round(1.3 * avgColor);
      blue = Math.round(1.8 * avgColor);
    } else {
      red = Math.round(0.8 * avgColor);
      green = Math.round(1.1 * avgColor);
      blue = Math.round(1.8 * avgColor);
    }
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
  }
  
  function doIndigo(avgColor, pixel) {
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
  
  function doLightIndigo(avgColor, pixel) {
    if (avgColor < 128) {
      red = Math.round(1.1 * avgColor);
      green = 0;
      blue = Math.round(2.3 * avgColor);
    } else {
      red = Math.round(1.5 * avgColor - 51);
      green = Math.round(2.3 * avgColor - 255);
      blue = 255;
    }
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
  }
  
  function doBlack(avgColor, pixel) {
    // If the color of the pixel is white o black do nothing
    if (avgColor < 128) {
      red = Math.round(0.5 * avgColor);
      green = Math.round(0.5 * avgColor);
      blue = Math.round(0.5 * avgColor);
    } else {
      red = Math.round(0.2 * avgColor);
      green = Math.round(0.2 * avgColor);
      blue = Math.round(0.2 * avgColor);
    }
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
  }
  
  function doWhite(avgColor, pixel) {
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
  
  function doGray(avgColor, pixel) {
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
  
  function doBlue(avgColor, pixel) {
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
  function doGreen(avgColor, pixel) {
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
  
  function doLightGreen(avgColor, pixel) {
    if (avgColor < 128) {
      red = Math.round(0.1 * avgColor);
      green = Math.round(2.2 * avgColor);
      blue = Math.round(0.9 * avgColor);
    } else {
      red = Math.round(0.1 * avgColor);
      green = Math.round(0.9 * avgColor);
      blue = Math.round(0.8 * avgColor);
    }
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
  }
  
  function doLightinGreen(avgColor, pixel) {
    if (avgColor < 128) {
      red = Math.round(1.1 * avgColor);
      green = Math.round(2.2 * avgColor);
      blue = Math.round(1.4 * avgColor);
    } else {
      red = Math.round(0.8 * avgColor);
      green = Math.round(1.6 * avgColor);
      blue = Math.round(1.4 * avgColor);
    }
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
  }
  
  function doYellow(avgColor, pixel) {
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
  
  function doOrange(avgColor, pixel) {
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
  
  function doDarkOrange(avgColor, pixel) {
    if (avgColor < 128) {
      red = Math.round(1.8 * avgColor);
      green = Math.round(0.7 * avgColor);
      blue = 0;
    } else {
      red = 255;
      green = Math.round(1 * avgColor - 51);
      blue = Math.round(1.8 * avgColor - 255);
    }
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
  }
  
  function doRed(avgColor, pixel) {
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
  