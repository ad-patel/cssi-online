/* global keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, collideRectCircle, collideCircleCircle, random, mouseIsPressed, clear, textSize, createCanvas, strokeWeight, rect, background, colorMode, HSB, noStroke, backgroundColor, color, fill, ellipse, text, stroke, line, width, height, mouseX, mouseY */

let dot1,dot2, dot3, dot4, dots;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  colorMode(HSB, 360, 100, 100);
  dots = [];
  
  for (let i=0; i<100; i++){
    dots.push(new BouncyDot());
  }
  
}

function draw() {
  background(220, 0, 0);
  
  for(let i=0; i<dots.length; i++){
    dots[i].float();
    dots[i].display();
  }
}

function mousePressed() {
  // We'll use this for console log statements only.
  console.log(dot1.x);
}

class BouncyDot {
  constructor() {
    // Randomly generate position
    this.x = random(width);
    this.y = random(height);
    // Randomly generate radius
    this.r = random(5, 12);
    // Randomly generate color
    this.color = random(360);
    // Randomly generate a master velocity (broken into components)...
    this.masterXvelocity = random(-3, 3);
    this.masterYvelocity = random(-3, 3);
    // ...and use those as starting velocities.
    this.xVelocity = this.masterXvelocity;
    this.yVelocity = this.masterYvelocity;
  }

  float() {
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    // Standard bounce code - like the DVD logo, but for spheres.
    if (this.x + this.r > width) {
      this.xVelocity = -1 * this.masterXvelocity;
    }
    if (this.x - this.r < 0) {
      this.xVelocity = this.masterXvelocity;
    }
    if (this.y + this.r > height) {
      this.yVelocity = -1 * this.masterYvelocity;
    }
    if (this.y - this.r < 0) {
      this.yVelocity = this.masterYvelocity;
    }
  }

  display() {
    fill(this.color, 80, 70);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}
