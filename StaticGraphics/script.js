// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

/* global createCanvas, background, stroke, strokeWeight, noFill, ellipse, fill, line, noStroke, scale, rect, triangle, text */

function setup() {
    // Code here runs only once
    createCanvas(800, 800);
  }
  
  function draw() {
    // Code here runs continuously
    background(255);
    scale(1.75);
  
    stroke(0, 133, 199);
    strokeWeight(8);
    noFill();
    ellipse(75, 100, 90, 90);
  
    stroke(0);
    strokeWeight(8);
    noFill();
    ellipse(195, 100, 90, 90);
  
    stroke(223, 0, 36);
    strokeWeight(8);
    noFill();
    ellipse(315, 100, 90, 90);
  
    stroke(244, 195, 0);
    strokeWeight(8);
    noFill();
    ellipse(132, 135, 90, 90);
  
    stroke(0, 159, 61);
    strokeWeight(8);
    noFill();
    ellipse(255, 135, 90, 90); //arguments (x,y, width, height)
  
    noStroke();
    fill(255, 0, 0);
    ellipse(69, 262, 75, 75);
    fill(255);
    ellipse(69, 262, 45, 45);
    fill(255, 0, 0);
    ellipse(69, 262, 20, 20);
  
    fill(247, 158, 27);
    ellipse(231, 262, 75, 75);
    fill(235, 0, 27);
    ellipse(184, 262, 75, 75);
    stroke(247, 158, 27);
    strokeWeight(4);
    line(206, 241, 241, 241);
    line(202, 251, 241, 251);
    line(200, 261, 241, 261);
    line(202, 271, 241, 271);
    line(205, 281, 241, 281);
    line(208, 291, 241, 291);
  
    noStroke();
    fill(246, 83, 20);
    rect(307, 231, 29, 29);
    fill(124, 187, 0);
    rect(342, 231, 29, 29);
    fill(0, 161, 241);
    rect(307, 266, 29, 29);
    fill(255, 187, 0);
    rect(342, 266, 29, 29);
  
    fill(227, 19, 44);
    triangle(236, 377, 280, 361, 280, 315);
    fill(155, 22, 49);
    triangle(324, 377, 280, 361, 280, 315);
  
    fill(227, 19, 44);
    triangle(236, 384, 280, 368, 280, 384);
    fill(155, 22, 49);
    triangle(324, 384, 280, 368, 280, 384);
  
    fill(13, 126, 255);
    textSize(22);
    text("YAY LOGOS!!!", 54, 367);
    stroke(234, 0, 255);
    strokeWeight(3);
    line(40, 343, 20, 331);
    line(35, 358, 15, 358);
    line(40, 375, 20, 386);
  }
  