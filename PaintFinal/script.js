/* global createCanvas, colorMode, HSB, color, mouseX, mouseY, 
height, width, rect, background, stroke, strokeWeight, noFill, ellipse, 
fill, line, noStroke, scale, rect, line, keyCode, triangle, text, frameRate, key, keyIsPressed, keycode, pmouseX, pmouseY, mouseIsPressed,
Weight, ellipse, RIGHT_ARROW, LEFT_ARROW, textSize, UP_ARROW, DOWN_ARROW */

let backgroundColor, stroke_weight, swchange;
let brushHue, globalBright, globalSat, colorDraw, lastKey, strokeW;

function setup() {
  createCanvas(1350, 650);
  colorMode(HSB, 360, 100, 100);
  //initialize all global variables
  brushHue = 0;
  swchange = 0.9;
  globalBright = 80;
  globalSat = 80;
  stroke_weight = 5;
  backgroundColor = color(95);
  background(backgroundColor);
  colorDraw = color(0);
  lastKey = "b";
  strokeW = 5;
}

function draw() {
  //set up user interface
  drawButtons();
  setsat();
  setbright();
  //instruction text
  fill("black");
  noStroke();
  textSize(15);
  text("Press a key to draw: a-quill, b-pen, c-airbrush ", 5, 20); //Text labeling how to use the different styles
  text("Brightness: left and right arrowkeys", 5, 40); //Text labeling how to change brightness
  text("Saturation: up and down arrowkeys", 5, 60); //Text labeling how to change the saturation
  text("Background Options:", 5, 80); // Text for background color options
  text("Eraser", width-90, 100); //Text labeling the eraser button
  text("Reset", width-90, 200); //Text labeling the reset canvas button
  text("Manual Stroke Size: numb keys (1-9) " , 5, 480);// Text labeling the manual stroke button.
  text("By: Niveditha, James Odanga, and Avika Patel" , 1000, 480);// Text labeling the manual stroke button.
  textSize(13);
  text("Black stroke", 1240, 400) // Text labeling the black stroke
  text("White stroke", 1240, 300) // Text labeling the white stroke
  text("beige", 150, 140); // text labeling background color beige
  text("charcoal", 150 ,120); // text labeling background color charcoal
  text("white", 150, 100); // text  labeling background color white 
  text("half tone", 150, 160);// text labeling  background color half tone
  text("dark gray", 150, 180); //text labeling background color dark gray
}

function keyPressed() {
  //records last key pressed for brush style
  if (key == "a" || key == "A") lastKey = "a";
  else if (key == "c" || key == "C") lastKey = "c";
  else if (key == "b" || key == "B") lastKey = "b";
  //changing stroke width with keys (1-9)
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

function mouseDragged() {
  //draws as mouse moves across screen
  if (lastKey == "b") {
    //pen effect
    stroke(colorDraw, globalSat, globalBright);
    strokeWeight(strokeW);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (lastKey == "c") {
    //airbrush effect
    fill(colorDraw, globalSat, globalBright);
    ellipse(mouseX, mouseY, 3);
    ellipse(mouseX + 10, mouseY + 10, strokeW);
    ellipse(mouseX - 3, mouseY - 5, strokeW);
    ellipse(mouseX + 6, mouseY, strokeW);
    ellipse(mouseX - 10, mouseY - 2, strokeW);
  } else if (lastKey == "a") {
    //quil effect
    stroke(colorDraw, globalSat, globalBright);
    sweight();
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

//function to check which button has been clickes
function mouseClicked() {
  //choosing colour
  if (mouseY > (3 / 4) * height) {
    if (mouseX < width / 8) colorDraw = color(0, globalSat, globalBright);
    else if ((1 / 8) * width < mouseX && mouseX < (2 / 8) * width)
      colorDraw = color(35, globalSat, globalBright);
    else if ((2 / 8) * width < mouseX && mouseX < (3 / 8) * width)
      colorDraw = color(55, globalSat, globalBright);
    else if ((3 / 8) * width < mouseX && mouseX < (4 / 8) * width)
      colorDraw = color(90, globalSat, globalBright);
    else if ((4 / 8) * width < mouseX && mouseX < (5 / 8) * width)
      colorDraw = color(160, globalSat, globalBright);
    else if ((5 / 8) * width < mouseX && mouseX < (6 / 8) * width)
      colorDraw = color(220, globalSat, globalBright);
    else if ((6 / 8) * width < mouseX && mouseX < (7 / 8) * width)
      colorDraw = color(285, globalSat, globalBright);
    else if ((7 / 8) * width < mouseX && mouseX < (8 / 8) * width)
      colorDraw = color(310, globalSat, globalBright);
  }
  //eraser
  if(mouseX > width-95 && mouseX < width-45 && mouseY > 25 && mouseY < 75)
    colorDraw = color(backgroundColor);
  //clear sreen
  if(mouseX > width-95 && mouseX < width-45 && mouseY > 125 && mouseY < 175)
    background(backgroundColor);
  //white color
  if(mouseX > width-95 && mouseX < width-45 && mouseY > 225 && mouseY < 275)
    colorDraw = color(100, 0, 100);
  //black color
  if(mouseX > width-95 && mouseX < width-45 && mouseY > 325 && mouseY < 375)
    colorDraw = color(100, 0, 0);
  //background options
  //light gray
  if(mouseX > 5 && mouseX < 145 && mouseY > 90 && mouseY < 100){
    backgroundColor = color(95);
    background(backgroundColor);
  }
  //dark gray
  if(mouseX > 5 && mouseX < 145 && mouseY > 110 && mouseY < 120){
    backgroundColor = color(40, 38);
    background(backgroundColor);
  }
  //dark dark gray
  if(mouseX > 5 && mouseX < 145 && mouseY > 130 && mouseY < 140){
    backgroundColor = color(60, 10, 96);
    background(backgroundColor);
  }
  //brown
  if(mouseX > 5 && mouseX < 145 && mouseY > 150 && mouseY < 160){
    backgroundColor = color(40, 38, 91);
    background(backgroundColor);
  }
  //beige
  if(mouseX > 5 && mouseX < 145 && mouseY > 170 && mouseY < 180){
    backgroundColor = color(0, 0, 66);
    background(backgroundColor);
  }
}


function drawButtons() {
  noStroke();
  colorMode(HSB, 360, 100, 100);
  //colour buttons
  fill(0, globalSat, globalBright); //red
  rect(0, (3 / 4) * height, width / 8, height / 4); //red rectangle color pallete

  fill(35, globalSat, globalBright); //orange
  rect(width / 8, (3 / 4) * height, width / 8, height / 4); //orange rectangle color pallete

  fill(55, globalSat, globalBright);
  rect((2 / 8) * width, (3 / 4) * height, width / 8, height / 4); //yellow rectangle color pallete

  fill(90, globalSat, globalBright); //green
  rect((3 / 8) * width, (3 / 4) * height, width / 8, height / 4);//green rectangle color pallete

  fill(160, globalSat, globalBright); //light blue
  rect((4 / 8) * width, (3 / 4) * height, width / 8, height / 4);//light blue rectangle color pallete

  fill(220, globalSat, globalBright); //dark blue
  rect((5 / 8) * width, (3 / 4) * height, width / 8, height / 4); //dark blue rectangle color pallete
  fill(285, globalSat, globalBright); //purple
  rect((6 / 8) * width, (3 / 4) * height, width / 8, height / 4); //purple rectangle color pallete

  fill(310, globalSat, globalBright); //pink
  rect((7 / 8) * width, (3 / 4) * height, width / 8, height / 4); //Pink rectangle color pallete
  //eraser 
  stroke(0);
  strokeWeight(2);
  fill(backgroundColor);
  ellipse(width-70, 50, 50);
  //clear screen
  stroke(0);
  strokeWeight(2);
  fill(backgroundColor);
  ellipse(width-70, 150, 50);
  //white color
  noStroke();
  fill(100, 0, 100);
  ellipse(width-70, 250, 50);
  //black color
  fill(100, 0, 0);
  ellipse(width-70, 350, 50);
  //background color options
  //light gray
  //stroke(1);
  fill(95);
  rect(5, 90, 140, 10);
  //dark gray
  fill(40, 38);
  rect(5, 110, 140, 10);
  //dark dark gray
  fill(60, 10, 96);
  rect(5, 130, 140, 10);
  //brown
  fill(40, 38, 91);
  rect(5, 150, 140, 10);
  //beige
  fill(0, 0, 66);
  rect(5, 170, 140, 10);
}

//vary brightness with up and down arrow keys
function setbright() {
  if (keyIsPressed && keyCode == UP_ARROW) globalBright++;
  if (keyIsPressed && keyCode == DOWN_ARROW) globalBright--;
  if (globalBright >= 100) {
    globalBright %= 100;
    globalBright += 10;
  } else if (globalBright <= 0) globalBright = 100;
}

//vary saturation with left and right arrow keys
function setsat() {
  if (keyIsPressed && keyCode == RIGHT_ARROW) globalSat++;
  if (keyIsPressed && keyCode == LEFT_ARROW) globalSat--;
  if (globalSat >= 100) {
    globalSat %= 100;
    globalSat += 10;
  } else if (globalSat <= 0) globalSat = 100;
}

//for varying the quill style stroke width
function sweight() {
  stroke_weight += swchange;
  if (stroke_weight >= 15 || stroke_weight <= 0) swchange *= -1;
  strokeWeight(stroke_weight);
}


/*function drawellipse(){
  noFill();
  stroke(colorDraw, globalSat, globalBright);
  ellipse(mouseX, mouseY, strokeW);
}*/