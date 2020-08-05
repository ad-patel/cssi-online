/* global keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, collideRectCircle, collideCircleCircle, random, mouseIsPressed, clear, textSize, createCanvas, strokeWeight, rect, background, colorMode, HSB, noStroke, backgroundColor, color, fill, ellipse, text, stroke, line, width, height, mouseX, mouseY */

/*let img;
function preload() {
  img = loadImage("assets/logo.jpg");
}
function setup() {
  image(img, 0, 0);
}*/

let backgroundColor,
  frogX,
  frogY,
  score,
  lives,
  gameIsOver,
  car1X,
  car1Y,
  car2Y,
  car2X,
  car3Y,
  car3X,
  car4Y,
  car4X,
  frogV,
  carV;

function setup() {
  // Canvas & color settings
  createCanvas(500, 500); //defines the canvas to be 500 x 500 px
  colorMode(HSB, 360, 100, 100); //change color mode
  backgroundColor = color(132, 100, 23); //sets background color to gray
  score = 0; //score initialized at 0
  lives = 3; //lives initialized at 3
  setupFrog();
  gameIsOver = false;
  car1X = 0;
  car1Y = 100;
  carV = 5; //car velocity
  car2X = -150;
  car2Y = 220;
  car3X = 540;
  car3Y = 300;
  car4X = 640;
  car4Y = 400;
}

function setupFrog() {
  frogX = width / 2; //frog X
  frogY = 450; //frog Y
  frogV = 5;
}
function draw() {
  background(backgroundColor);
  // Code for gold goal line
  noStroke();
  fill(60, 80, 80);
  rect(0, 0, width, 50);
  // Code to display Frog
  fill(120, 80, 80);
  ellipse(frogX, frogY, 20); //frog
  moveCars();
  drawCars();
  checkCollisions();
  checkWin();
  displayScores();
  keyCheck();
  
  if (
    gameIsOver &&
    mouseIsPressed &&
    mouseX > 90 &&
    mouseX < 390 &&
    mouseY > height / 2 + 30 &&
    mouseY < height / 2 + 90
  ) {
    gameIsOver = false;
  }
}

function keyCheck() {
  if (gameIsOver) {
    return;
  }
  if (keyIsDown(UP_ARROW)) frogY -= frogV;
  else if (keyIsDown(DOWN_ARROW)) frogY += frogV;
  else if (keyIsDown(LEFT_ARROW)) frogX -= frogV;
  else if (keyIsDown(RIGHT_ARROW)) frogX += frogV;
}

function moveCars() {
  // Move the car
  car2X += carV;
  car1X += carV;
  car3X -= carV;
  car4X -= carV;
  // Reset if it moves off screen
  if (car1X > width) {
    car1X = -40;
    car1Y = random(50, 400);
  }

  if (car2X > width) {
    car2X = -40;
    car2Y = random(50, 400);
  }
  if (car3X < 0) {
    car3X = 500;
    car3Y = random(50, 400);
  }
  if (car4X < 0) {
    car4X = 500;
    car4Y = random(50, 400);
  }
}

function drawCars() {
  // Code for car 1
  fill(0, 80, 80);
  rect(car1X, car1Y, 40, 30);
  fill(0, 80, 80);
  rect(car2X, car2Y, 40, 30);
  fill(0, 80, 80);
  rect(car3X, car3Y, 40, 30);
  fill(0, 80, 80);
  rect(car4X, car4Y, 40, 30);
  // Code for additional cars
}

function checkCollisions() {
  // If the frog collides with the car, reset the frog and subtract a life.
  if (collideRectCircle(car1X, car1Y, 40, 30, frogX, frogY, 20)) {
    lives--;
    setupFrog();
    //console.log("the frog is hit")
  }
  if (collideRectCircle(car2X, car2Y, 40, 30, frogX, frogY, 20)) {
    lives--;
    setupFrog();
    //console.log("the frog is hit")
  }
  if (collideRectCircle(car3X, car3Y, 40, 30, frogX, frogY, 20)) {
    lives--;
    setupFrog();
    //console.log("the frog is hit")
  }
  if (collideRectCircle(car4X, car4Y, 40, 30, frogX, frogY, 20)) {
    lives--;
    setupFrog();
    //console.log("the frog is hit")
  }
  if (lives === 0) {
    gameIsOver = true;
  }

  // if the frog has no more lives, game over
}

function checkWin() {
  // If the frog makes it into the yellow gold zone, increment the score
  // and move the frog back down to the bottom.
  if (frogY < 50) {
    score++;
    carV += 1;
    setupFrog();
  }
}

function displayScores() {
  textSize(12);
  fill(0);
  // Display Lives
  text(`Lives: ${lives}`, 10, 20);
  // Display Score
  text(`Score: ${score}`, 10, 40);
  // Display game over message if the game is over
  if (gameIsOver) {
    textSize(42);
    textFont("Trebuchet MS");
    text("GAME OVER!!", 110, height / 2);

    noStroke();
    fill(60, 80, 80);
    rect(90, height / 2 + 30, 300, 60);
    fill(0);
    textSize(30);
    textFont("Courier New	");
    text("Replay", 190, height / 2 + 70);
  }
}