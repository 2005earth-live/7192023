//Move the catcher with the left and right arrow keys to catch the falling objects. 

/* VARIABLES */
let catcher, fallingObject;
let score = 0;
let backgroundImg, fallingObjectImg, catcherImg, objectImg;
let bgMusic,laughSound;

/* PRELOAD LOADS FILES */
function preload(){
  backgroundImg = loadImage("assets/fire.png");
  fallingObjectImg = loadImage("assets/gollum.png");
  catcherImg = loadImage("assets/ring.png");
  objectImg = loadImage("assets/sauron.png");

  bgMusic = loadSound('assets/Carmen - Overture.mp3');
  laughSound = loadSound('assets/evil laugh.mp3');

}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  fallingObjectImg.resize(150,0);
  catcherImg.resize(100,0);
  objectImg.resize(80,0);
  
  //Create catcher 
  catcher = new Sprite(catcherImg, 200,380,100,20);
  catcher.color = color(255);
  catcher.rotationLock = true;
  
  //Create falling object
  fallingObject = new Sprite(fallingObjectImg, 100,50,20);
  fallingObject.color = color(255);
  fallingObject.direction = 'down';
  fallingObject.speed = 5;
  fallingObject.bounciness = 1;
  fallingObject.friction = 0;

  object = new Sprite(objectImg, 200, 200, 200, "s");

  walls = new Group();
	walls.w = 10;
	walls.h = 400;
  walls.collider = "static";
  walls.visible = false;

	new walls.Sprite(0, height / 2);
	new walls.Sprite(width, height / 2);
  
	let wallTop = new walls.Sprite(width / 2, 0);
	wallTop.rotation = 90;

  getAudioContext().resume();
  bgMusic.play();


}

/* DRAW LOOP REPEATS */
function draw() {
  background(0);

  image(backgroundImg,0,41);
  
  // Draw directions to screen
  fill(255);
  textSize(12);
  text("Move the Ring\nto defend against\nthe dark lord.\nAlso don't make\nGollum falls into\nMountain Doom.", width-100, 20);
  textSize(15);
  text("Sauron", 175, 150);
  
  textSize(30);
  text("Score: " + score, 20, 40);


  catcher.moveTowards(mouse.x, 380, 1);
  
  if (fallingObject.collides(catcher)) {
    fallingObject.speed = 8;
    fallingObject.direction = fallingObject.direction + random(-20, 20);
  }

  if (fallingObject.collides(walls)) {
    fallingObject.direction = fallingObject.direction + random(-20, 20);
  }
  
  if (fallingObject.collides(object)) {
    fallingObject.direction = fallingObject.direction + random(-30, 30);
    score = score + 1;
  }

  if (fallingObject.y > 390) {
    fallingObject.y = 430
    fallingObject.speed = 0;
    fill(255);
    textSize(50);
    text('You lose!', 20, 100); 
    textSize(20);
    text("Bwahahaha", 240, 197);
    bgMusic.stop();
    laughSound.play();
    laughSound.noLoop();
  }
  
}

//use the direction change
//https://gist.github.com/rlieberman/f9a4a0f09603fe2ce136
//https://editor.p5js.org/Tiri/sketches/Sk2da7ua

//put something in the middle, and when gollum hits it, score increasing