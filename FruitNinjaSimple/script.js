/* global keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, collideRectCircle, collideCircleCircle, random, 
mouseIsPressed, clear, textSize, createCanvas, strokeWeight, rect, background, colorMode, HSB, noStroke, backgroundColor,
color, fill, ellipse, text, stroke, line,strokeWidth, width,int, remove,height, mouseX, mouseY ,image, windowHeight, windowWidth, loadImage, floor*/

/*


Your project should:
Use at least two of: functions, arrays and iteration and classes 
where/when it makes sense
Have simple user interaction for two players (mousePressed, keyPressed)
Include comments that help explain each section to a novice coder
*/

let imgBackground, fruitImages, fruits;
let player1On, timer;
let fruit1, apple, lemon, cherry, banana, pumpkin, pomo, randomPos;
let p1Score, p2Score;
let knife;
let picCounter;

function preload() {
    imgBackground = loadImage(
        "back.jpg"
    );

    knife = loadImage(
        "knife.png"
    );

    lemon = loadImage(
        "lemon.jpg"
    );
    apple = loadImage(
        "apple.png"
    );
    cherry = loadImage(
        "cherry.png"
    );
    pumpkin = loadImage(
        "pumpkin.png"
    );
    pomo = loadImage(
        "pom.png"
    );
    banana = loadImage(
        "banana.png"
    );

    fruitImages = [apple, lemon, cherry, banana, pumpkin, pomo];
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100);
    noStroke();
    player1On = true;
    picCounter = int(random(0, 5)); //THIS ONE
    //picCounter = random(0,fruitImages.length);
    p1Score = p2Score = 6;
    background(200);
    image(imgBackground, 0, 0, windowWidth, windowHeight);
    timer = 1000;

    fruit1 = new Fruit();
    /*fruits =[];
    for(let i=0; i=1; i++){
        fruits.push(new Fruit());
    }*/

    randomPos = (0, fruitImages.length);
}

function draw() {
    image(imgBackground, 0, 0, windowWidth, windowHeight);

    fruit1.show();
    fruit1.launch();
    fruit1.detect();

    strokeWeight(10);
    stroke(color(10));
    line(width / 1.5, 0, width / 1.5, height);
    noStroke();

    display();
    timer--;
    image(knife, mouseX - 75, mouseY - 75, 150, 150);
    playerScore();
}

function playerScore() {
    noStroke();
    fill(50, 100, 90);
    rect(width / 1.4, height / 8, ((6 / 16) * width) / 1.5, height, 30);
    fill(0);
    textSize(75);
    if (player1On) {
        text(
            "Player 2\nScore: " + p2Score,
            width / 2 + width / 8,
            height / 2 + height / 16
        );
    } else {
        text(
            "Player 1\nScore: " + p1Score,
            width / 2 + width / 8,
            height / 2 + height / 16
        );
    }
}

function display() {
    textSize(20);
    fill(100);
    text(`Time Left: ${timer}`, 100, 100);
}

class Fruit {
    constructor() {
        this.x = random(0, width - 500);
        this.y = 0.8 * height;
        this.height = random(0, 0.5 * height);
        this.launchSpeed = 4;
        this.pos = picCounter;
        //picCounter++;
        //if(picCounter=fruitImages.length)
        //picCounter=0;
        this.randomFruitImage = fruitImages[this.pos];
        this.isAlive = true;
        this.imageWidth = 100;
        this.imageHeight = 100;
    }
    show() {
        if (this.isAlive) {
            image(this.randomFruitImage, this.x, this.y, 100, 100);
        }
    }
    launch() {
        if (this.isAlive) {
            this.y -= this.launchSpeed;
            if (this.y <= this.height) {
                this.launchSpeed *= -1;
            }
        }
    }
    detect() {
        if (mouseX > this.x && mouseX < this.x + 100 && mouseY > this.y && mouseY < this.y + 100) {
            this.isAlive = false;
        }
    }
}