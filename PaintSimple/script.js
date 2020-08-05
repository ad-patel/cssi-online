// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

/* global createCanvas, colorMode, HSB, color, mouseX, mouseY, 
height, width, rect, background, stroke, strokeWeight, noFill, ellipse, 
fill, line, noStroke, scale, rect, line, keyCode, triangle, text, frameRate */

//things to add, change in Saturation, change in Brightness, different strokes

let globalSaturation, globalBrightness, colorDraw, backgroundColor;
let c1, c2, c3, c4, c5, c6, c7, c8, strokeW;

function setup() {
  // Code here runs only once
  createCanvas(800, 600);
  colorMode(HSB, 360, 100, 100);
  globalSaturation = globalBrightness = 100;
  colorDraw = color(100);
  backgroundColor = color(95);
  background(backgroundColor);
  strokeW = 4;
  strokeWeight(strokeW);
  frameRate(75);
  c1 = color(0, globalSaturation, globalBrightness);
  c2 = color(35, globalSaturation, globalBrightness);
  c3 = color(55, globalSaturation, globalBrightness);
  c4 = color(90, globalSaturation, globalBrightness);
  c5 = color(160, globalSaturation, globalBrightness);
  c6 = color(220, globalSaturation, globalBrightness);
  c7 = color(285, globalSaturation, globalBrightness);
  c8 = color(310, globalSaturation, globalBrightness);
}

function draw() {
  // Code here runs continuously
  drawButtons();
  noStroke();
  fill(0);
  textSize(18);
  text("Click on #1-9 for stroke thickness", 517, 117);

  if (keyIsPressed && keyCode == UP_ARROW) {
    globalBrightness += 5;
    c1 = color(0, globalSaturation, globalBrightness);
    c2 = color(35, globalSaturation, globalBrightness);
    c3 = color(55, globalSaturation, globalBrightness);
    c4 = color(90, globalSaturation, globalBrightness);
    c5 = color(160, globalSaturation, globalBrightness);
    c6 = color(220, globalSaturation, globalBrightness);
    c7 = color(285, globalSaturation, globalBrightness);
    c8 = color(310, globalSaturation, globalBrightness);
  }
  if (keyIsPressed && keyCode == DOWN_ARROW) {
    globalBrightness -= 5;
    c1 = color(0, globalSaturation, globalBrightness);
    c2 = color(35, globalSaturation, globalBrightness);
    c3 = color(55, globalSaturation, globalBrightness);
    c4 = color(90, globalSaturation, globalBrightness);
    c5 = color(160, globalSaturation, globalBrightness);
    c6 = color(220, globalSaturation, globalBrightness);
    c7 = color(285, globalSaturation, globalBrightness);
    c8 = color(310, globalSaturation, globalBrightness);
  }
}

function mouseDragged() {
  stroke(colorDraw, globalSaturation, globalBrightness);
  strokeWeight(strokeW);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed() {
  if (keyCode === 49) strokeW = 1;
  else if (keyCode == 50) strokeW = 2;
  else if (keyCode == 51) strokeW = 3;
  else if (keyCode == 52) strokeW = 4;
  else if (keyCode == 53) strokeW = 5;
  else if (keyCode == 54) strokeW = 6;
  else if (keyCode == 55) strokeW = 7;
  else if (keyCode == 56) strokeW = 8;
  else if (keyCode == 57) strokeW = 9;
}

function mouseClicked() {
  if (mouseY > (3 / 4) * height) {
    if (mouseX < width / 8) colorDraw = c1;
    else if ((1 / 8) * width < mouseX && mouseX < (2 / 8) * width)
      colorDraw = c2;
    else if ((2 / 8) * width < mouseX && mouseX < (3 / 8) * width)
      colorDraw = c3;
    else if ((3 / 8) * width < mouseX && mouseX < (4 / 8) * width)
      colorDraw = c4;
    else if ((4 / 8) * width < mouseX && mouseX < (5 / 8) * width)
      colorDraw = c5;
    else if ((5 / 8) * width < mouseX && mouseX < (6 / 8) * width)
      colorDraw = c6;
    else if ((6 / 8) * width < mouseX && mouseX < (7 / 8) * width)
      colorDraw = c7;
    else colorDraw = c8;
  }
  if (515 < mouseX && mouseX < 590 && 20 < mouseY && mouseY < 70)
    colorDraw = color(100);
  if (610 < mouseX && mouseX < 685 && 20 < mouseY && mouseY < 70)
    colorDraw = color(0);
  if (705 < mouseX && mouseX < 780 && 20 < mouseY && mouseY < 70)
    colorDraw = backgroundColor;
}

function drawButtons() {
  noStroke();
  colorMode(HSB, 360, 100, 100);
  fill(c1); //red
  rect(0, (3 / 4) * height, width / 8, height / 4);

  fill(c2); //orange
  rect(width / 8, (3 / 4) * height, width / 8, height / 4);

  fill(c3); //yellow
  rect((2 / 8) * width, (3 / 4) * height, width / 8, height / 4);

  fill(c4); //green
  rect((3 / 8) * width, (3 / 4) * height, width / 8, height / 4);

  fill(c5); //light blue
  rect((4 / 8) * width, (3 / 4) * height, width / 8, height / 4);

  fill(c6); //dark blue
  rect((5 / 8) * width, (3 / 4) * height, width / 8, height / 4);

  fill(c7); //purple
  rect((6 / 8) * width, (3 / 4) * height, width / 8, height / 4);

  fill(c8); //pink
  rect((7 / 8) * width, (3 / 4) * height, width / 8, height / 4);

  fill(100);
  rect(515, 20, 75, 50);

  fill(0);
  rect(610, 20, 75, 50);

  stroke(0);
  strokeWeight(3);
  fill(backgroundColor);
  rect(705, 20, 75, 50);
}
