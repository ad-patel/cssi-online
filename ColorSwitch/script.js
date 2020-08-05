/* global createCanvas, background, colorMode, HSB, noStroke, backgroundColor, color, fill, ellipse, text, stroke, line, width, height, mouseX, mouseY */

// We'll use variables for most of our colors in this code-along.
let backgroundColor,
  color1,
  color2,
  color3,
  color4,
  textColor,
  globalBrightness,
  globalSaturation;

function setup() {
  // Canvas & color settings
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100);
  noStroke();

  // When used with only one argument, the color mode is greyscale.
  // 0 is black and 100 is white.
  backgroundColor = color(95);
  textColor = color(20);
  // When used with three arguments, the function takes, in this order:
  // HUE - 0 to 360 degrees on a color wheel - 0 is red, 120 is green and 240
  //       is blue.
  // SATURATION - 0 is no color (greyscale), and 100 is as bold as possible.
  // BRIGHTNESS - 0 is no light (black), and 100 is as bright as possible.
  // When used with three arguments, the function takes, in this order:
  // HUE - 0 to 360 degrees on a color wheel - 0 is red, 120 is green and 240
  //       is blue.
  // SATURATION - 0 is no color (greyscale), and 100 is as bold as possible.
  // BRIGHTNESS - 0 is no light (black), and 100 is as bright as possible.

  // Suggested saturation,brightness settings:
  // 50, 100: pastel
  // 100,100: neon
  // 100, 50: bold
  // 80, 80: neutral
  globalSaturation = 80;
  globalBrightness = 80;
  color1 = color(283, globalSaturation, globalBrightness);
  color2 = color(17, globalSaturation, globalBrightness);
  color3 = color(122, globalSaturation, globalBrightness);
  color4 = color(186, globalSaturation, globalBrightness);
}

function draw() {
  background(backgroundColor);
  drawCenterLine();
  // Call the drawCenterLine function here to run the three lines of code
  // contained in that function.
  drawCircles();
  checkLocation();
}

function checkLocation() {
  if (
    width / 4 - 25 < mouseX &&
    mouseX < width / 4 + 25 &&
    (height / 4 - 25 < mouseY && mouseY < height / 4 + 25)
  ) {
    purple();
  } else if (
    (width / 4) * 3 - 25 < mouseX &&
    mouseX < (width / 4) * 3 + 25 &&
    (height / 4 - 25 < mouseY && mouseY < height / 4 + 25)
  ) {
    Blue();
  } else if (
    (width / 4) * 3 - 25 < mouseX &&
    mouseX < (width / 4) * 3 + 25 &&
    ((height / 4) * 3 - 25 < mouseY && mouseY < (height / 4) * 3 + 25)
  ) {
    Red();
  } else if (
    width / 4 - 25 < mouseX &&
    mouseX < width / 4 + 25 &&
    ((height / 4) * 3 - 25 < mouseY && mouseY < (height / 4) * 3 + 25)
  ) {
    Green();
  } else if (mouseX < width / 2 && mouseY < height / 2) topLeft();
  else if (mouseX > width / 2 && mouseY < height / 2) topRight();
  else if (mouseX < width / 2 && mouseY > height / 2) bottomLeft();
  else bottomRight();
}

function drawCenterLine() {
  // This function will turn stroke on, draw the line, and then turn stroke
  // back off.
  // Remember a line segment in p5.js has four arguments: x1, y1, x2, y2
  stroke(textColor);
  line(width / 2, 0, width / 2, height);
  noStroke();

  stroke(textColor);
  line(0, height / 2, width, height / 2);
  noStroke();
}

function drawCircles() {
  // The red and blue circles:
  fill(color1);
  ellipse(width / 4, height / 4, 50);
  fill(color2);
  ellipse((3 / 4) * width, (3 / 4) * height, 50);
  fill(color3);
  ellipse(width / 4, (3 / 4) * height, 50);
  fill(color4);
  ellipse((3 / 4) * width, height / 4, 50);

  // The grey circle and the text:
  fill(textColor);
  ellipse(mouseX, mouseY, 50);
  text("Flip the switch\nHOVER OVER EACH COLORED DOT OR\nQUADRANT TO CHANGE COLORS", 20, 20);
}

function topLeft() {
  backgroundColor = color(25);
  textColor = color(95);
}

function topRight() {
  backgroundColor = color(50);
  textColor = color(75);
}

function bottomLeft() {
  backgroundColor = color(95);
  textColor = color(25);
}

function bottomRight() {
  backgroundColor = color(75);
  textColor = color(50);
}

/*function purple2() {
  //backgroundColor = color(283, 100, 100);
  backgroundColor = color(186, 100, 100);
}*/

function Blue() {
  backgroundColor = color(186, 100, 100);
}

function purple() {
  backgroundColor = color(283, 100, 100);
}

function Red() {
  backgroundColor = color(17, 100, 100);
}

function Green() {
  backgroundColor = color(122, 100, 100);
}
