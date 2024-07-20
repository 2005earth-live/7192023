//theme: what HOPE means to me
//bonus: starter screen transition effect
//       typing effect on conversation
//       background music

/* BUGS & ISSUES

  unable to load background music
      story line.js: line 34, p5js sound library added, loadSound() still undefined
  
*/



let player;

let blobs = [];
let asteroids = [];

let score = 0;
let minScore = 0;

let rocketImg, oneImg, twoImg, threeImg, fourImg, fiveImg, sixImg, bgImg;

let screen = "start";

let bgMusic;


function preload() {
  rocketImg = loadImage("assets/rocket.png");
  
  oneImg = loadImage("assets/1.png");
  twoImg = loadImage("assets/2.png");
  threeImg = loadImage("assets/3.png");
  fourImg = loadImage("assets/4.png");
  fiveImg = loadImage("assets/5.png");
  sixImg = loadImage("assets/6.png");
  bgImg = loadImage("assets/bg.png");

  bgMusic = loadSound('assets/bgmusic.mp3');
}



function setup() {
  createCanvas(800, 300);
  oneImg.resize(130,0);
  twoImg.resize(130,0);
  threeImg.resize(130,0);
  fourImg.resize(130,0);
  fiveImg.resize(130,0);
  sixImg.resize(130,0);

  player = new Player();

  for (var i = 0; i < 10; i++) {
    asteroids.push(new Asteroids());
  }
}

function keyPressed() {
  if (screen === "start" && key === " ") {
    screen = "intermission1";
  } else if (screen === "intermission1" && key === " ") {
    screen = "intermission2";
  } else if (screen === "intermission2" && key === " ") {
    screen = "intermission3";
  } else if (screen === "intermission3" && key === " ") {
    screen = "intermission4";
  } else if (screen === "intermission4" && key === " ") {
    screen = "intermission5";
  } else if (screen === "intermission5" && key === " ") {
    screen = "intermission6";
  } else if (screen === "intermission6" && key === " ") {
    screen = "intermission7";
  } else if (screen === "intermission7" && key === " ") {
    screen = "intermission8";
  } else if (screen === "intermission8" && key === " ") {
    screen = "intermission9";
  } else if (screen === "intermission9" && key === " ") {
    screen = "intermission10";
  } else if (screen === "intermission10" && key === " ") {
    screen = "intermission11";
  } else if (screen === "intermission11" && key === " ") {
    screen = "intermission12";
  } else if (screen === "intermission12" && key === " ") {
    screen = "intermission13";
  } else if (screen === "intermission13" && key === " ") {
    screen = "intermission14";
  } else if (screen === "intermission14" && key === " ") {
    screen = "intermission15";
  } else if (screen === "intermission15" && key === " ") {
    screen = "intermission16";
  } else if (screen === "intermission16" && key === " ") {
    screen = "intermission17";
  } else if (screen === "intermission17" && key === " ") {
    screen = "intermission18";
  } else if (screen === "intermission18" && key === " ") {
    screen = "intermission19";
  } else if (screen === "intermission19" && key === " ") {
    screen = "intermission20";
  } else if (screen === "intermission20" && key === " ") {
    screen = "intermission21";
  } else if (screen === "intermission21" && key === " ") {
    screen = "intermission22";
  } else if (screen === "intermission22" && key === " ") {
    screen = "intermission23";
  } else if (screen === "intermission23" && key === " ") {
    screen = "intermission24";
  } else if (screen === "intermission24" && key === " ") {
    screen = "intermission25";
  } else if (screen === "intermission25" && key === " ") {
    screen = "intermission26";
  } else if (screen === "intermission26" && key === " ") {
    screen = "intermission27";
  } else if (screen === "intermission27" && key === " ") {
    screen = "intermission28";
  } else if (screen === "intermission28" && key === " ") {
    screen = "game";
  } else if (screen === "game") {
    if (key === " ") {
      player.jump(); 
    }
  } else if (screen === "end" && key === " ") {
    screen = "end";
  }
}


function draw() {
  if (screen === "start") {
    showStartScreen();
  } else if (screen === "intermission1") {
    showIntermissionScreen1();
  } else if (screen === "intermission2") {
    showIntermissionScreen2();
  } else if (screen === "intermission3") {
    showIntermissionScreen3();
  } else if (screen === "intermission4") {
    showIntermissionScreen4();
  } else if (screen === "intermission5") {
    showIntermissionScreen5();
  } else if (screen === "intermission6") {
    showIntermissionScreen6();
  } else if (screen === "intermission7") {
    showIntermissionScreen7();
  } else if (screen === "intermission8") {
    showIntermissionScreen8();
  } else if (screen === "intermission9") {
    showIntermissionScreen9();
  } else if (screen === "intermission10") {
    showIntermissionScreen10();
  } else if (screen === "intermission11") {
    showIntermissionScreen11();
  } else if (screen === "intermission12") {
    showIntermissionScreen12();
  } else if (screen === "intermission13") {
    showIntermissionScreen13();
  } else if (screen === "intermission14") {
    showIntermissionScreen14();
  } else if (screen === "intermission15") {
    showIntermissionScreen15();
  } else if (screen === "intermission16") {
    showIntermissionScreen16();
  } else if (screen === "intermission17") {
    showIntermissionScreen17();
  } else if (screen === "intermission18") {
    showIntermissionScreen18();
  } else if (screen === "intermission19") {
    showIntermissionScreen19();
  } else if (screen === "intermission19") {
    showIntermissionScreen19();
  } else if (screen === "intermission20") {
    showIntermissionScreen20();
  } else if (screen === "intermission21") {
    showIntermissionScreen21();
  } else if (screen === "intermission22") {
    showIntermissionScreen22();
  } else if (screen === "intermission23") {
    showIntermissionScreen23();
  } else if (screen === "intermission24") {
    showIntermissionScreen24();
  } else if (screen === "intermission25") {
    showIntermissionScreen25();
  } else if (screen === "intermission26") {
    showIntermissionScreen26();
  } else if (screen === "intermission27") {
    showIntermissionScreen27();
  } else if (screen === "intermission28") {
    showIntermissionScreen28();
  } else if (screen === "game") {
    playGame();
  } 
}


function showStartScreen() {
  background(255);

  fill(0);
  noStroke();
  textSize(13);
  textAlign(CENTER);
  text("...Where am I...?", 160, 220);

  textSize(10);
  
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(0);
  rect(100, 200, 600, 80);

}

function showIntermissionScreen1() {
  background(bgImg);


  fill(255);
  noStroke();
  textSize(13);
  textAlign(CENTER);
  text("...!", 130, 220);

  textSize(10);
  
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);

}

function showIntermissionScreen2() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(CENTER);
  text("You're awake!", 275, 220);

  textSize(10);
  
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(threeImg, 110, 121.5);
}
//npc
function showIntermissionScreen3() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("It's been a long time since we put you into sleep!\nNice to hear your voice again.", 240, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(oneImg, 110, 121.5);
}

function showIntermissionScreen4() {
  background(bgImg);


  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("Sleep...? When? How?", 130, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);

}

function showIntermissionScreen5() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("You... don't remember?", 240, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(fiveImg, 110, 121.5);
}

function showIntermissionScreen6() {
  background(bgImg);


  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("All I could recall are I felt like waking from a long dream,and then when I opened my eyes,\nI found myself floating in this vast, vast amount of space. \nIf these could count.", 130, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);

}

function showIntermissionScreen7() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("...", 240, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(fiveImg, 110, 121.5);
}

function showIntermissionScreen8() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("You were an astronaut sent for an endless mission, to travel far beyond \nhuman limit, and send back valuable data before we lose the last signal. ", 240, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(fourImg, 110, 121.5);
}

function showIntermissionScreen9() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("Two weeks after we launched the spaceship, you were put into a two-month-\nlong Cryosleep, a deep sleep at extremely cold temperatures, for resource\nefficiency, and skipping the parts we already had a thorough understanding.", 240, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(fourImg, 110, 121.5);
}

function showIntermissionScreen10() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("It's possible that during the unfreezing process, something went wrong\nand caused damage to...", 240, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(fiveImg, 110, 121.5);
}

function showIntermissionScreen11() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("...Some part of your memory, if not all of it.\nI'm sorry for your loss.", 240, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(fiveImg, 110, 121.5);
}
//player
function showIntermissionScreen12() {
  background(bgImg);


  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("...No, I guess that would be the best. Since I will never come back.", 130, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);

}

function showIntermissionScreen13() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("...", 240, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(fiveImg, 110, 121.5);
}

function showIntermissionScreen14() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("...Let's put that aside a little bit.", 240, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(sixImg, 110, 121.5);
}

function showIntermissionScreen15() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("How's your travel so far?", 240, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(threeImg, 110, 121.5);
}

function showIntermissionScreen16() {
  background(bgImg);


  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("It's beautiful. Just... It feels emptier than I imagine, in space. \nI guess it's really cold outside of the window.", 130, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);

}

function showIntermissionScreen17() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("It is cold. But space is never empty.", 240, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(oneImg, 110, 121.5);
}

function showIntermissionScreen18() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("They are just far away from each other.\nIt will take a long time to understand the universe itself.", 240, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(threeImg, 110, 121.5);
}

function showIntermissionScreen19() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("It's a long journey. But there's hope out there. Among the stars.", 240, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(sixImg, 110, 121.5);
}

function showIntermissionScreen20() {
  background(bgImg);


  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("Maybe that was what I thought when I decided to join the mission.", 130, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);

}

function showIntermissionScreen21() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("That's a very interesting thought!", 240, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(threeImg, 110, 121.5);
}

function showIntermissionScreen22() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("Thank you for willing to join it, still.", 240, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(sixImg, 110, 121.5);
}

function showIntermissionScreen23() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("Alright! Before we lose your communication signal completely, \ngood luck on the journey ahead.", 240, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(threeImg, 110, 121.5);
}

function showIntermissionScreen24() {
  background(bgImg);


  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("Farewell, then.", 130, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);

}

function showIntermissionScreen25() {
  background(bgImg);

  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("...Farewell.", 240, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);
  image(sixImg, 110, 121.5);
}

function showIntermissionScreen26() {
  background(bgImg);


  fill(255);
  noStroke();
  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

}

function showIntermissionScreen27() {
  background(bgImg);


  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("...", 130, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);

}

function showIntermissionScreen28() {
  background(bgImg);


  fill(255);
  noStroke();
  textSize(13);
  textAlign(LEFT);
  text("Guess I'll continue forward now.", 130, 220);

  textSize(10);
  textAlign(CENTER);
  text("Press Space to continue >>", 716, 30);

  noFill();
  stroke(255);
  rect(100, 200, 600, 80);

}


function playGame() {
  background(bgImg);
  noFill();
  stroke(255);

  for (var i = 0; i < asteroids.length; i++) {
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }

  score += 0.04;
  textSize(30);
  textAlign(LEFT);
  text(round(score) + " km", 20, 30);
 

  fill(0);
  stroke(255);    
  player.show();
  player.move();

  if (random(1) < 0.03) {
    if (score > minScore) {
      blobs.push(new Blob());
      minScore = score + 2 + random(1);
    }
  }
  //algorithm creates new spikes in the array in random distance, i know it's simple, but i'm still quite proud for it

  
  for (blob of blobs) {
    blob.setSpeed(8 + sqrt(score) / 5);
    blob.move();
    blob.show();


    if (player.hits(blob)) {
      background(bgImg);
      noFill();
      stroke(255);
      textSize(30);
      textAlign(CENTER);
      text("You hit an asteroid.\nNow you are lost among the infinity and stars.", 400, 120);

      fill(255);
      strokeWeight(0);
      textSize(15);
      text("Your journey along this " + round(score) + " km in space is valuable for human progress.\nRefresh to restart your mission.", 400, 200);
      noLoop();
    }

    if (blob.getX() < -50) {
      blobs.shift();
      print("removed");
    }
  }
}

