/* global createCanvas, background, fill, noStroke, ellipse, rect, strokeWeight, color, stroke, noFill, image, loadImage, tint, height, width, random */

let dvdImage,
  x,
  wantH,
  change,
  ballY,
  xVelocity,
  y,
  ballY2,
  change2,
  wantH2,
  ballY3,
  change3,
  wantH3,
  yVelocity,
  logoWidth,
  logoHeight,
  r,
  g,
  b;

function setup() {
  createCanvas(1000, 800);
  x = y = 50;
  ballY = ballY2 = ballY3 = 0;
  wantH = wantH2 = wantH3 = 400;
  change = 15;
  change3 = 10;
  change2 = 5;
  r = random(0, 256);
  g = random(0, 256);
  b = random(0, 256);
  xVelocity = yVelocity = 5;
  logoWidth = 200;
  logoHeight = 150;
  // We only want to load the logo once.
  dvdImage = loadImage(
    "dvd.jpeg"
  ); //todo: get the image URL from the assets
}

function draw() {
  background(220);

  //update the x postion TODO 1
  x += xVelocity;
  y += yVelocity;
  //REFACTORING means changing the code but same action

  //bounce of the side, if on the edge
  if (x == width - logoWidth || x == 0) {
    //logoWidth and logoHeight replace MAGIC NUMBERS
    xVelocity *= -1;
    randomizeColor();
  }

  if (y == height - logoHeight || y == 0) {
    yVelocity *= -1;
    randomizeColor();
  }

  // Draw the logo at the new position.
  tint(r, g, b);
  image(dvdImage, x, y, logoWidth, logoHeight);

  noStroke();
  fill(255, 0, 0);
  ellipse(60, ballY, 50, 50);
  if (ballY > height - 25) change *= -1;
  ballY += change;

  if (change < 0 && ballY < wantH) {
    change *= -1;
    wantH = (height - wantH) / 4 + wantH;
  }

  noStroke();
  fill(255, 0, 0);
  ellipse(260, ballY2, 50, 50);
  if (ballY2 > height - 25) change2 *= -1;
  ballY2 += change2;

  if (change2 < 0 && ballY2 < wantH2) {
    change2 *= -1;
    wantH2 = (height - wantH2) / 4 + wantH2;
  }
  noStroke();
  fill(255, 0, 0);
  ellipse(460, ballY3, 50, 50);
  if (ballY3 > height - 25) change3 *= -1;
  ballY3 += change3;

  if (change3 < 0 && ballY3 < wantH3) {
    change3 *= -1;
    wantH3 = (height - wantH3) / 4 + wantH3;
  }
}

function randomizeColor() {
  r = random(0, 256);
  g = random(0, 256);
  b = random(0, 256);
}
