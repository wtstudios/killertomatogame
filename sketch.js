var speedRunTimerSec = 0;
var speedRunTimerMil = 0;
var score = 0;
var deathTimer = 0;
var timer = 0;
var gamePlaying = false;
let menuTomato;
let blockGraphic;
let tomatoCrateGraphic;
let dirtBlockGraphic;
let dirtBlock2Graphic;
let pianoTheme;
let pubertyLove;
let scream;
let splatSound;
let blankDirt;
let plant1Graphic;
let brickGraphic;
let humanGraphic;
let stereoGraphic;
let sun;
let cloud;
let themeSong;
var walkFrames = [];
var walkFrame = 1;
var walkTimer = 0;
var blockSize = 60;
var upKeyPressed = false;
var leftKeyPressed = false;
var rightKeyPressed = false;
var scene = 1;
var gameVolume = 100;
var soundWanted = true;
var soundPlaying = false;
var humany = [];

function preload() {
  soundFormats('ogg', 'mp3');
  themeSong = loadSound('themesong.mp3');
  splatSound = loadSound('tomatosplat.mp3');
  pubertyLove = loadSound('pubertyLoveSong.mp3');
  pianoTheme = loadSound('Tomatoes-Theme.mp3');
  scream = loadSound('scream.mp3');
  menuTomato = loadImage('Tomato_menu_graphic.png');
  blockGraphic = loadImage('stone_block.png');
  humanGraphic = loadImage('human_graphic.png');
  stereoGraphic = loadImage('stereo.png');
  tomatoCrateGraphic = loadImage('tomato_crate.png');
  dirtBlockGraphic = loadImage('dirt_block.png');
  brickGraphic = loadImage('brick_block.png');
  plant1Graphic = loadImage('plant1.png');
  blankDirt = loadImage('dirt_block!grass.png');
  dirtBlock2Graphic = loadImage('dirt_block.rot1.png');
  cloud = loadImage('cloud.png');
  sun = loadImage('sun.png');
  walkFrames[0] = loadImage('tomato_graphic1.png');
  walkFrames[1] = loadImage('tomato_graphic2.png');
  walkFrames[2] = loadImage('tomato_graphic3.png');
  walkFrames[3] = loadImage('tomato_graphic4.png');
  walkFrames[4] = loadImage('tomato_graphic5.png');
  walkFrames[5] = loadImage('tomato_graphic6.png');
  walkFrames[6] = loadImage('tomato_graphic7.png');
  walkFrames[7] = loadImage('tomato_graphic8.png');
  walkFrames[8] = loadImage('tomato_graphic1.png');
  walkFrames[9] = loadImage('tomato10.png');
  walkFrames[10] = loadImage('tomato11.png');
  walkFrames[11] = loadImage('tomato12.png');
  walkFrames[12] = loadImage('tomato13.png');
}

function setup() {
  let cnv = createCanvas(600, 600);
  cnv.position(displayWidth / 2 - width / 2, 100);
}

var level = 1;
var blockSize = 60;
var player = {
  spawnX: 200,
  spawnY: 200,
  x: 200,
  y: 200,
  sick: false,
  Size: 60,
  camX: -30,
  xVel: 0,
  yVel: 0,
  onBlock: false,
  keys: [false, false, false],
  respawn: true,
  transfer: true,
  health: 10,
};
var levels = [
  ["bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbI",
    "b----------------------------I",
    "b----------i------i----------I",
    "b-----bbbbbbbbbbbbbbbb-------I",
    "b--------------------b-------I",
    "bb-------------------x-------I",
    "bbb------------------x-------I",
    "bbbb-----------------b-------I",
    "bbbbb--1=-i---i-1--@-b---#--=I",
    "dddddDDDDDDDDDDDDDDDDdDDDDDDDd",
    "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  ],
  [ "II-----------bbbbbbbbbbb-------------Bbbbbbbbbbbbbbbb",
    "I------------b---------b-------------B-----B--------b",
    "I------------b---------b#-----i------B-----B--------b",
    "I------------b---------bbbbbbbbb----bB--B--B--B-----b",
    "I------------b---------b-----------bbB--B--B--B-----b",
    "I------------b---------b----i-----bbbB--B--B--B-----b",
    "I------------b---------b--bbbbbbbbbbbB--B--B--B-----b",
    "I------------b---------b----------------B-----B-----b",
    "I------------b---------b=------1--i-----B-i--=B--@--b",
    "Iiiiiiiiiiiiib---------dDDDDDDDDDDDDDDDDdDDDDDdDDDDDd",
    "Ibbbbbbbbbbbbb---------BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  ],
   ["bI----------------------------b--------------------------------------------II",
    "b------------------b--bbbbbbbbb---------------------------------------------I",
    "b---------------b--b--b-------b---------------------------------------------I",
    "b------b----b------b--b----b--b-------------DDD----DD--DDDDD----------------I",
    "b-b----------------b---i---b--b-------------d--D--D--D---d------------------I",
    "b------------------bbbbbbbbb--b-------------ddd---d--d---d------------------I",
    "b-----i-------------b---------b-------------d--d--d--d---d------------------I",
    "b-----b-------------b--bbbbbbbb-------------ddd----dd----d------------------I",
    "b@--------i---1-----b---i----#b---------------------------------------------I",
    "dDDDDDDDDDDDDDDDDDDDdDDDDDDDDDdDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
    "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  ],
   ["II------------------------------------------------------II",
    "I--------------------------------------------------------I",
    "I------------------1-----------1-------------------------I",
    "I-----------------DDDD----DDDDDDDDDDD--------------------I",
    "I----------------Ddddd---DdddddddddddD-------------------I",
    "I---------------DdBBBBB----BBBBBBBBBBdD------------------I",
    "I--------------DdBBBBBB--i-----BBBBBBBdD-----------------I",
    "I-------------DdBBBBB----BB-----BBBBBBBdD---------------#I",
    "I@---i---1---DdBBB------BBBB------BBBBBBdDDD---DD---DDDDDD",
    "DDDDDDDDDDDDDdBBBB------BBBBBBBB-----------i---BB===BBBBBB",
    "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  ],
  [ "b------------bbbbbbbbbbbbbbbbb",
    "b--b-------------------------b",
    "b--b--B----------------------b",
    "b--b-----i----B--------------b",
    "b#-b-----B--------B----------b",
    "bbb--------------------------b",
    "b-------------B-----B--------b",
    "b----B-----------------------b",
    "bi---------------i--------@--b",
    "dDD==============DDDDDDDDDDDDd",
    "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  ],
   ["bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "b----------------------------b",
    "b----------------------------b",
    "b----------------------------b",
    "b----------------------------b",
    "b----------------------------b",
    "b----------------------------b",
    "b----------------------------b",
    "b-------------------------@--b",
    "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
    "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  ],
];
var human = function(x, y, num) {
  if(timer === 0) {
    humany[num] = y;
  }
  if(timer > 0) {
    image(humanGraphic, x, humany[num], blockSize, blockSize);
    if (dist(270 + player.Size / 2, player.y + blockSize / 2, x + blockSize / 2, humany[num] + blockSize / 2) <= blockSize + 5) {
      score++;
      humany[num] = 800;
      scream.play();
  }
  }
    
};
var invisBlock = function(x, y) {
  if (player.y >= y - blockSize && player.y < y && 270 > x - blockSize && 270 < x + blockSize) {
    player.y = y - player.Size;
    player.onBlock = true;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 < x - blockSize / 2 && 270 > x - blockSize) {
    player.camX = player.camX + x - 320;
    player.xVel = 0;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 > x + blockSize / 2 && 270 < x + blockSize) {
    player.camX = player.camX + x - 220;
    player.xVel = 0;
  }
  if (player.y <= y + blockSize && player.y > y + 30 && 270 > x - blockSize && 270 < x + blockSize) {
    player.yVel = 0;
    player.y = y + blockSize;
    player.onBlock = false;
    if(player.yVel > 15) {
      player.health -= 10;
    }
  }
};
var block = function(x, y, solid) {
  image(blockGraphic, x, y, blockSize, blockSize);
  if(solid === true) { if (player.y >= y - blockSize && player.y < y && 270 > x - blockSize && 270 < x + blockSize) {
    player.y = y - player.Size;
    player.onBlock = true;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 < x - blockSize / 2 && 270 > x - blockSize) {
    player.camX = player.camX + x - 320;
    player.xVel = 0;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 > x + blockSize / 2 && 270 < x + blockSize) {
    player.camX = player.camX + x - 220;
    player.xVel = 0;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 > x + blockSize / 2 && 270 < x + blockSize) {
    player.camX = player.camX + x - 220;
    player.xVel = 0;
  }
  if (player.y <= y + blockSize && player.y > y + 30 && 270 > x - blockSize && 270 < x + blockSize) {
    player.yVel = 0;
    player.y = y + blockSize;
    player.onBlock = false;
    if(player.yVel > 15) {
      player.health -= 10;
    }}
  }
};
var plant1 = function(x, y) {
  image(plant1Graphic, x, y, blockSize, blockSize);
};
var brick = function(x, y, solid) {
  image(brickGraphic, x, y, blockSize, blockSize);
  if(solid === true) { if (player.y >= y - blockSize && player.y < y && 270 > x - blockSize && 270 < x + blockSize) {
    player.y = y - player.Size;
    player.onBlock = true;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 < x - blockSize / 2 && 270 > x - blockSize) {
    player.camX = player.camX + x - 320;
    player.xVel = 0;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 > x + blockSize / 2 && 270 < x + blockSize) {
    player.camX = player.camX + x - 220;
    player.xVel = 0;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 > x + blockSize / 2 && 270 < x + blockSize) {
    player.camX = player.camX + x - 220;
    player.xVel = 0;
  }
  if (player.y <= y + blockSize && player.y > y + 30 && 270 > x - blockSize && 270 < x + blockSize) {
    player.yVel = 0;
    player.y = y + blockSize;
    player.onBlock = false;
    if(player.yVel > 15) {
      player.health -= 10;
    }}
  }
};
var dirtBlock = function(x, y) {
  image(dirtBlockGraphic, x, y, blockSize, blockSize);
  if (player.y >= y - blockSize && player.y < y && 270 > x - blockSize && 270 < x + blockSize) {
    player.y = y - player.Size;
    player.onBlock = true;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 < x - blockSize / 2 && 270 > x - blockSize) {
    player.camX = player.camX + x - 320;
    player.xVel = 0;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 > x + blockSize / 2 && 270 < x + blockSize) {
    player.camX = player.camX + x - 220;
    player.xVel = 0;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 > x + blockSize / 2 && 270 < x + blockSize) {
    player.camX = player.camX + x - 220;
    player.xVel = 0;
  }
  if (player.y <= y + blockSize && player.y > y + 30 && 270 > x - blockSize && 270 < x + blockSize) {
    player.yVel = 0;
    player.y = y + blockSize;
    player.onBlock = false;
    if(player.yVel > 15) {
      player.health -= 10;
    }
  }
};
var dirtBlock2 = function(x, y) {
  image(dirtBlock2Graphic, x, y, blockSize, blockSize);
  if (player.y >= y - blockSize && player.y < y && 270 > x - blockSize && 270 < x + blockSize) {
    player.y = y - player.Size;
    player.onBlock = true;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 < x - blockSize / 2 && 270 > x - blockSize) {
    player.camX = player.camX + x - 320;
    player.xVel = 0;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 > x + blockSize / 2 && 270 < x + blockSize) {
    player.camX = player.camX + x - 220;
    player.xVel = 0;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 > x + blockSize / 2 && 270 < x + blockSize) {
    player.camX = player.camX + x - 220;
    player.xVel = 0;
  }
  if (player.y <= y + blockSize && player.y > y + 30 && 270 > x - blockSize && 270 < x + blockSize) {
    player.yVel = 0;
    player.y = y + blockSize;
    player.onBlock = false;
    if(player.yVel > 15) {
      player.health -= 10;
    }
  }
};
var blankDirtBlock = function(x, y) {
  image(blankDirt, x, y, blockSize, blockSize);
  if (player.y >= y - blockSize && player.y < y && 270 > x - blockSize && 270 < x + blockSize) {
    player.y = y - player.Size;
    player.onBlock = true;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 < x - blockSize / 2 && 270 > x - blockSize) {
    player.camX = player.camX + x - 320;
    player.xVel = 0;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 > x + blockSize / 2 && 270 < x + blockSize) {
    player.camX = player.camX + x - 220;
    player.xVel = 0;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 > x + blockSize / 2 && 270 < x + blockSize) {
    player.camX = player.camX + x - 220;
    player.xVel = 0;
  }
  if (player.y <= y + blockSize && player.y > y + 30 && 270 > x - blockSize && 270 < x + blockSize) {
    player.yVel = 0;
    player.y = y + blockSize;
    player.onBlock = false;
    if(player.yVel > 15) {
      player.health -= 10;
    }
  }
};
var portal = function(x, y) {
  image(tomatoCrateGraphic, x, y, blockSize, blockSize);
  if (dist(270 + player.Size / 2, player.y + blockSize / 2, x + blockSize / 2, y + blockSize / 2) <= blockSize + 5) {
    level++;
    player.respawn = true;
    player.transfer = false;
    timer = -1;
  }
};
var stereo = function(x, y) {
  image(stereoGraphic, x, y, blockSize, blockSize);
  if (player.y > y - 30 && player.y < y + 50 && 270 > x - 50 && 270 < x + 50 && player.health > 0) {
    player.health -= 10;
    player.yVel = -15;
    player.y = y - 30;
    if(!splatSound.isPlaying()) {
      splatSound.play();
      walkFrame = 8;
      walkTimer = 0;
      pubertyLove.play();
      pianoTheme.stop();
    }
  }
  if(dist(300, player.x, x + blockSize / 2, y + blockSize / 2) <= 100 && !pubertyLove.isPlaying()) {
    pubertyLove.play();
  }
};
var playerSpawn = function() {
  player.y = player.spawnY;
  player.camX = player.spawnX;
  player.health = 10;
  player.respawn = false;
  walkFrame = 3;
};
var playerDraw = function() {
  image(walkFrames[walkFrame], 270, player.y, player.Size, player.Size);
};
var playerMove = function() {
  if (player.keys[0] === true && player.xVel > -7 && player.health > 0) {
    player.xVel--;
  }
  if (player.keys[2] === true && player.xVel < 7 && player.health > 0) {
    player.xVel++;
  }
  if (player.y > 520) {
    player.onBlock = true;
    player.y = 520;
  }
  if (player.y < -30) {
    fill(229, 213, 0);
    triangle(290, 40, 300, 20, 310, 40);
  }
  if (player.onBlock === true && player.keys[1] === true && player.health > 0) {
    player.yVel = -18;
  }
  if (player.onBlock === false && player.yVel < 18) {
    player.yVel++;
  }
  if (player.xVel > 0) {
    player.xVel -= 0.5;
  }
  if (player.xVel < 0) {
    player.xVel += 0.5;
  }
  
  player.camX -= player.xVel;
  player.y += player.yVel;
};
var drawLevel = function(x, y) {
  image(sun, 400, 100, 120, 120);
  image(cloud, 300, 200, 60, 60);
  image(cloud, 200, 100, 80, 80);
  image(cloud, 390, 150, 60, 60);
  image(cloud, 30, 60, 50, 50);
  image(cloud, 100, 200, 60, 60);
  image(cloud, 500, 50, 60, 60);
  for (var i = 0; i < levels[level - 1].length; i++) {
    for (var j = 0; j < levels[level - 1][i].length; j++) {
      switch (levels[level - 1][i][j]) {
        case 'B':
          block(j * blockSize + x, i * blockSize + y, true);
          break;
        case '=':
          stereo(j * blockSize + x, i * blockSize + y);
          break;
        case '@':
          player.spawnX = -(j * blockSize - 220);
          player.spawnY = i * blockSize + y;
          break;
        case '#':
          portal(j * blockSize + x, i * blockSize + y);
          break;
        case 'D':
          dirtBlock(j * blockSize + x, i * blockSize + y);
          break;
        case 'b':
          brick(j * blockSize + x, i * blockSize + y, true);
          break;
          case 'x':
          brick(j * blockSize + x, i * blockSize + y, false);
          break;
        case '1':
          plant1(j * blockSize + x, i * blockSize + y);
          break;
        case 'd':
          blankDirtBlock(j * blockSize + x, i * blockSize + y);
          break;
        case '2':
          dirtBlock2(j * blockSize + x, i * blockSize + y);
          break;
        case 'i':
          human(j * blockSize + x, i * blockSize + y,i + j + level);
          break;
        case 'I':
          invisBlock(j * blockSize + x, i * blockSize + y);
          break;
        case 'l':
          block(j * blockSize + x, i * blockSize + y, false);
          break;
      }
    }
  }


};
keyPressed = function() {
  if (key.code === 97 || keyCode === LEFT_ARROW || key === 'a') {
    player.keys[0] = true;
  }
  if (key.code === 119 || keyCode === UP_ARROW || key === 'w') {
    player.keys[1] = true;
  }
  if (key.code === 100 || keyCode === RIGHT_ARROW || key === 'd') {
    player.keys[2] = true;
  }
};

keyReleased = function() {
  if (key.code === 97 || keyCode === LEFT_ARROW || key === 'a') {
    player.keys[0] = false;
  }
  if (key.code === 119 || keyCode === UP_ARROW || key === 'w') {
    player.keys[1] = false;
  }
  if (key.code === 100 || keyCode === RIGHT_ARROW || key === 'd') {
    player.keys[2] = false;
  }
};

function mouseReleased() {
  if (mouseX > scene + 740 && mouseX < scene + 800 && mouseY > 250 && mouseY < 350 && level > 1 && gamePlaying === false) {
    level--;
  }
  if (mouseX > scene + 1000 && mouseX < scene + 1060 && mouseY > 250 && mouseY < 350 && level < levels.length - 1 && gamePlaying === false) {
    level++;
  }
  if (mouseX > scene + 650 && mouseX < scene + 750 && mouseY > 50 && mouseY < 100 && gamePlaying === false) {
    scene = 0;
  }
  if (mouseX > scene + 1250 && mouseX < scene + 1350 && mouseY > 50 && mouseY < 100 && gamePlaying === false) {
    scene = 0;
  }
  if (mouseX > scene + 1850 && mouseX < scene + 1950 && mouseY > 50 && mouseY < 100 && gamePlaying === false) {
    scene = 0;
  }
  if (mouseX > scene + 800 && mouseX < scene + 1000 && mouseY > 430 && mouseY < 480 && gamePlaying === false) {
    gamePlaying = true;
  }
}
draw = function() {
  background(0, 200, 255);
  if (gamePlaying === false) {
    strokeWeight(1);
    stroke(0);
    fill(100, 200, 200);
    rect(scene, 0, width * 4, height);
    textFont('impact');
    fill(255, 0, 0);
    textSize(40);
    text("ATTACK OF THE KILLER TOMATOES", scene + 40, 100);
    text("YOU WIN!", scene + 650, 300);
    rect(scene + 200, 180, 200, 50, 5);
    rect(scene + 200, 260, 200, 50, 5);
    rect(scene + 200, 340, 200, 50, 5);
    fill(0, 0, 0);
    textSize(30);
    text("Play", scene + 265, 215); text("Help", scene + 265, 295); text("Settings", scene + 250, 375);
    image(menuTomato, scene + 120, 370, 350, 300);
    fill(120, 120, 120);
    rect(scene + 740, 250, 80, 100, 10);
    rect(scene + 980, 250, 80, 100, 10);
    fill(0);
    rect(scene + 800, 200, 200, 200, 10);
    fill(255, 0, 0);
    rect(scene + 800, 430, 200, 50, 5);
    rect(scene + 650, 50, 100, 50, 5);
    rect(scene + 1250, 50, 100, 50, 5);
    rect(scene + 1850, 50, 100, 50, 5);
    fill(0);
    textSize(60);
    text("<                      >", scene + 750, 320);
    fill(255);
    text(level, scene + 880, 300);
    fill(0);
    textSize(30);
    text("PLAY", scene + 870, 465);
    text("BACK", scene + 660, 85);
    text("BACK", scene + 1260, 85);
    text("BACK", scene + 1860, 85);
    fill(220);
    rect(scene + 2000, 290, 200, 20, 5);
    fill(180);
    rect(scene + 1990 + gameVolume, 285, 30, 30, 5);
    fill(0);
    text("Volume",scene + 2050, 370);
    fill(255, 0, 0);
    textSize(40);
    text("HELP", scene + 1450, 100);
    textSize(30);
    fill(0);    
    text("To play, use WAD. Avoid the stereos. Crush humans to get points. Jump and run into a wall to roll up it! Try to get to the crate of tomatoes to complete the level. Enjoy!", scene + 1300, 200, 400, 400);
    textSize(12);
    themeSong.setVolume(gameVolume / 200);
    pianoTheme.setVolume(gameVolume / 200);
    scream.setVolume(gameVolume / 200);
    pubertyLove.setVolume(gameVolume / 200);
    splatSound.setVolume(gameVolume / 200);
    if (mouseIsPressed && mouseX > scene + 200 && mouseX < scene + 400 && mouseY > 180 && mouseY < 230) {
      gamePlaying = true;
    }
    if (mouseIsPressed && mouseX > scene + 200 && mouseX < scene + 400 && mouseY > 260 && mouseY < 310) {
      scene = -1200;
    }
    if (mouseIsPressed && mouseX > scene + 200 && mouseX < scene + 400 && mouseY > 340 && mouseY < 390) {
      scene = -1800;
    }
  }
  if(mouseIsPressed && mouseX > scene + 2000 && mouseX < scene + 2200 && mouseY > 285 && mouseY < 305) {
    gameVolume = mouseX + 15 - 220;
  }
  if(deathTimer > 10 && walkFrame !== 12 && player.health < 1) {
    walkFrame++;
    deathTimer = 0;
  }
  if(player.health < 1 && walkFrame === 12 && deathTimer === 500) {
    walkFrame = 0;
    deathTimer = 0;
    player.respawn = true;
  }
  if (player.respawn) {
    playerSpawn();
  }
  if (gamePlaying === true) {
    player.onBlock = false;
    background(0, 200, 255);
    drawLevel(player.camX, -60);
    stroke(0, 0, 0);
    fill(0);
    text(score, 300, 30);
    text(speedRunTimerSec + "." + speedRunTimerMil, 400, 30);
    fill(255, 0, 0);
    rect(20, 20, 80, 40, 5);
    fill(0);
    text("BACK", 35, 47);
    playerDraw();
    playerMove();
    timer++;
  }
  if (player.health < 1) {
    deathTimer++;
    fill(255, 0, 0);
    textSize(30);
    text("You're Ketchup", 200, 300);
  }
  if (walkFrame === 8 && walkTimer === 4 && player.keys[2] === true) {
    walkFrame = 1;
    walkTimer = 0;
  }
  if (walkFrame === 1 && walkTimer === -4 && player.keys[0] === true) {
    walkFrame = 8;
    walkTimer = 0;
  }
  if (walkTimer > 4) {
    walkFrame++;
    walkTimer = 0;
  }
  if (walkTimer < -4) {
    walkFrame--;
    walkTimer = 0;
  }
  if (player.keys[0] === true && player.health > 0) {
    walkTimer--;
  }
  if (player.keys[2] === true && player.health > 0) {
    walkTimer++;
  }
  if(gameVolume < 0) {
    gameVolume = 0;
  }
  if(gameVolume > 200) {
    gameVolume = 200;
  }
  if(level === levels.length) {
    fill(100, 200, 200);
    rect(0, 0, 600, 600);
    fill(255, 0, 0);
    textSize(40);
    text("YOU WIN", 40, 100);
    textSize(20);
    text("WITH A TOTAL OF " + score + " HUMANS KILLED AND A SPEEDRUN TIME OF " + speedRunTimerSec + "." + speedRunTimerMil + " SECONDS", 40, 150, 520, 300);
    speedRunTimerMil--;
  }
  if(gamePlaying === true) {
    speedRunTimerMil++;
    if(speedRunTimerMil > 60) {
      speedRunTimerSec++;
      speedRunTimerMil = 0;
    }
  }      if (soundWanted === true && !themeSong.isPlaying() && gamePlaying === false && player.health > 0) {
        themeSong.play();
        pianoTheme.stop();
        soundPlaying = true
      }
    if(soundWanted === true && !pianoTheme.isPlaying() && gamePlaying === true && player.health > 0) {
    themeSong.stop();
    pianoTheme.play();
  }
  if(mouseIsPressed && mouseX > 20 && mouseX < 100 && mouseY > 20 && mouseY < 60 && gamePlaying === true) {
    gamePlaying = false;
  }
  textSize(20);
  fill(255);
  text("Made by Henry MacDougall", 20, 570); };

