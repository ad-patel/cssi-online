/* global keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, collideRectCircle, collideCircleCircle, random, mouseIsPressed, clear, textSize, createCanvas, strokeWeight, rect, background, colorMode, HSB, noStroke, backgroundColor, color, fill, ellipse, text, stroke, line, width, height, mouseX, mouseY, soundFormats, loadSound, loadImage, image, tint */

let drop1, drop2, mySound;
let raindrops;
let backdrop;
let tintTime, tintChange;

function preload() {
  mySound = loadSound(
    "https://cdn.glitch.com/293aaecf-4ed6-4297-a2e2-69371c7c0c0d%2Frain-07.mp3?v=1594847903666"
  );
}

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);
  tintTime = 0;
  tintChange = 1;
  raindrops = new Array(10);
  let i;
  for (i = 0; i < raindrops.length; i++) {
    raindrops[i] = new RainDrop();
  }
  backdrop = loadImage("grass.jpg");
}

function draw() {
  background(0, 0, 95);
  tint(249, tintTime, 40);
  image(backdrop, 0, 0, width, height);
  let i;
  for (i = 0; i < raindrops.length; i++) {
    raindrops[i].show();
    raindrops[i].update();
  }
  tintTime += tintChange;
  if (tintTime > 100 || tintTime<0) {
    tintChange *= -1;
  }
  mySound.play();
}

class RainDrop {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.d = random(6, 12);
    this.fallSpeed = 8;
    this.cRain = color(60, 100, random(20, 100));
  }

  show() {
    noStroke();
    fill(this.cRain);
    ellipse(this.x, this.y, this.d);
  }

  update() {
    this.y += this.fallSpeed;
    if (this.y > height) {
      this.y = 0;
      this.d = random(6, 12);
      this.x = random(width);
      this.cRain = color(60, 100, random(20, 100));
    }
  }
}
