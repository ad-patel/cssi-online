/* global round, windowWidth, windowHeight, keyCode, keyIsDown, keyIsPressed, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, collideRectCircle, collideCircleCircle, random, mouseIsPressed, clear, textSize, createCanvas, strokeWeight, rect, background, colorMode, HSB, noStroke, backgroundColor, color, fill, ellipse, text, stroke, line, width, height, mouseX, mouseY */

let backgroundColor, spherePosition, rectPosition

function setup() {
  // Canvas & color settings
  createCanvas(500, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  // The spherePosition variable contains object, it is initialized using "Object Notation"
  spherePosition = {
    "x": 100,
    "y": 100
  }
  
  rectPosition = {
    "x": 130,
    "y": 140
  }
  
}

function draw() {
  background(backgroundColor);
  ellipse(spherePosition.x, spherePosition.y, 20, 20);
  rect(rectPosition.x, rectPosition.y, 20, 20);
  line(spherePosition.x, spherePosition.y, rectPosition.x, rectPosition.y);
  
  let distance = round(computeDistance(rectPosition, spherePosition));
  text(`The circle and rectangle are ${distance} apart`, 20, 20);
  
  let mousePosition = {
    "x": mouseX, 
    "y": mouseY
  }
  
  let distance2 = round(computeDistance(spherePosition, mousePosition));
  text(`The circle and mouse are ${distance2} apart`, 20, 40);
  
  let closeness = computeDistanceCategory(spherePosition, mousePosition);
  text(`You're ${closeness}.`, 20, 60);
}

function mousePressed() {
  spherePosition.x = random(width);
  spherePosition.y = random(height);
}

function computeDistance(point1, point2) {
  let deltaX = point1.x - point2.x;
  let deltaY = point1.y - point2.y;
  
  let distance = Math.sqrt((deltaX ** 2) + (deltaY ** 2));
  return distance;  
}

function computeDistanceCategory(point1, point2) {
  let distance = computeDistance(point1, point2);
  
  if (distance > 200) {
    backgroundColor = color(240, 10, 100);
    return "cold";
  } else if (distance > 50) {
    backgroundColor = color(120, 10, 100);
    return "warm";
  } else {
    backgroundColor = color(0, 10, 100);
    return "red hot!";
  }
}