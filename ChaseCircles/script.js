/* global collideCircleCircle, random, mouseIsPressed, 
clear, createCanvas, strokeWeight, rect, background, 
colorMode, HSB, noStroke, backgroundColor, color, fill, 
ellipse, text, stroke, line, width, height, mouseX, 
mouseY */

let backgroundColor, coinX, coinY, coinX2, coinY2, score, highscore;
let time, gameIsOver, hit, hit2, counter, myButton, counter2;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = color(86, 80, 80);
  randomlyPlaceCoinYellow();
  randomlyPlaceCoinPurple();
  time = 1000;
  score = highscore = 0;
  counter = counter2 = 0;
  gameIsOver = false;
  myButton = new Clickable(200, 300);
  myButton.locate(280, 12);
  myButton.text = "Restart";
  myButton.height = 70;
  myButton.onPress = function() {
    randomlyPlaceCoinYellow();
    randomlyPlaceCoinPurple();
    time = 1000;
    score = 0;
    counter = counter2 = 0;
    gameIsOver = false;
  };
}

function draw() {
  background(backgroundColor);
  fill(53, 100, 100);
  noStroke();
  ellipse(coinX, coinY, 20);
  fill(17, 100, 100);
  ellipse(mouseX, mouseY, 20);
  fill(314, 100, 100);
  ellipse(coinX2, coinY2, 20);

  fill(255);
  rect(12, 12, 250, 70, 10);
  fill(0);
  textSize(20);
  textFont("Courier New");
  text(`Time remaining: ${time}`, 135, 35);
  textFont("Trebuchet MS");
  text(`Score: ${score}`, 60, 60);
  text(`Highscore: ${highscore}`, 170, 60);
  handleTime();
  counter++;
  counter2++;
  handleCollision();
  //text(`Collision: ${hit}`, 20, 20);
  myButton.draw();
  if (gameIsOver && score > highscore) {
    highscore = score;
  }
}

function handleCollision() {
  // We'll write code for what happens if your character hits a coin.
  hit = collideCircleCircle(coinX, coinY, 20, mouseX, mouseY, 20);
  hit2 = collideCircleCircle(coinX2, coinY2, 20, mouseX, mouseY, 20);

  if (!gameIsOver && counter > 50) {
    randomlyPlaceCoinYellow();
    counter = 0;
  }
  if (!gameIsOver && counter2 > 20) {
    randomlyPlaceCoinPurple();
    counter2 = 0;
  }
  if (!gameIsOver && hit) {
    randomlyPlaceCoinYellow();
    score++;
    counter = 0;
  } else if (!gameIsOver && hit2) {
    randomlyPlaceCoinPurple();
    score += 5;
    counter2 = 0;
  }
}

function handleTime() {
  // We'll write code to handle the time.
  if (time > 0) time--;
  else gameIsOver = true;
}

//dont repeat yourself
function randomlyPlaceCoinYellow() {
  coinX = random(width);
  coinY = random(height);
  while (coinX > 12 && coinX < 380 && coinY < 82 && coinY > 12) {
    coinX = random(width);
    coinY = random(height);
  }
}

function randomlyPlaceCoinPurple() {
  coinX2 = random(width);
  coinY2 = random(height);
  while (coinX2 > 12 && coinX2 < 380 && coinY2 < 82 && coinY2 > 12) {
    coinX2 = random(width);
    coinY2 = random(height);
  }
}
