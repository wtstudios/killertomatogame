var speedRunTimerSec = 0;
var speedRunTimerMil = 0;
var multi = 1;
var score = 0;
var highScore = 0;
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
let coin;
let sun;
let cloud;
let trophy;
let themeSong;
var coins = 0;
var trophies = ["Booster", "Pacifist", "Bounty Hunter", "Pro", "Server Member"];
var trophiesOwned = [false, false, false, false, false];
var trophyDescription = ["Boost the discord server", "Win the game without killing any humans", "Win the game and kill 20 or more humans", "Win the game in 30 seconds or less", "Join the discord server"];
var display = null;
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
let skin;
var showHitBox = false;
var clickTimer = 0;
function preload() {
  skin = null;
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
  coin = loadImage('coin.png');
  trophy = loadImage('trophy.png');
}

function setup() {
  let cnv = createCanvas(600, 600);
  cnv.position(windowWidth / 2 - width / 2, 100);
  coins = 0;
  if(getItem('coins') !== null) {
      coins = getItem("coins");
  }
  for(var i = 0; i < trophiesOwned.length; i++) {
    trophiesOwned[i] = false;
  }
  if(getItem('myTrophies') !== null) {
    trophiesOwned = getItem('myTrophies');
  }
  if(getItem('myTrophies') === null) {
    storeItem('myTrophies', [false, false, false, false, false])
  }
}
var level = 1;
var blockSize = 60;
var player = {
  spawnX: 200,
  spawnY: 200,
  x: 200,
  y: 200,
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
    "bbbbb--1=i----i-1--@-b---#--=I",
    "dddddDDDDDDDDDDDDDDDDdDDDDDDDd",
    "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  ],
  [ "II-----------bbbbbbbbbbb-------------Bbbbbbbbbbbbbbbb",
    "I------------b---------b-------------l-----l-------Ib",
    "I------------b---------b#-----i------l-----l--------b",
    "I------------b---------bbbbbbbbb----bB--B--B--B-----b",
    "I------------b---------b-----------bbB--B--B--B-----b",
    "I------------b---------b----i-----bbbB--B--B--B-----b",
    "I------------b---------b--bbbbbbbbbbbB--B--B--B-----b",
    "I------------b---------b----------------B-----B-----b",
    "I------------b---------b=------1--i-----B-i--=B--@--b",
    "Iiiiiiiiiiiiib---------dDDDDDDDDDDDDDDDDdDDDDDdDDDDDd",
    "Ibbbbbbbbbbbbb---------BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
    "Ibbbbbbbbbbbbb---------BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB=================",
  ],
   ["bI----------------------------b----I------------II",
    "b------------------b--bbbbbbxxb----I-------------I",
    "b---------------b--b--b-------b----I-------------I",
    "b------b----b------b--b----b--b----I-------------I",
    "b--b---------------b---i---b--b----I-------------I",
    "b------------------bbbbbbbbb--x----I-------------I",
    "b-----i-------------b---------x----I-------------I",
    "b-----b-------------b--bbbbbbbb----I-------------I",
    "b@--------i---1-----b---i----#x----I-------------I",
    "dDDDDDDDDDDDDDDDDDDDdDDDDDDDDDDDDDDD-------------I",
    "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB-------------I",
    "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB==================I",
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
  [ "I--------b-------------------------bbbbIIIIII",
    "I--------b--b-------------------------b-----I",
    "I--------b--b--B----------------------b-----I",
    "I--------b--b-----i----B--------------b-----I",
    "I--------b#-b-----B--------B----------b-----I",
    "I--------bbb--------------------------b-----I",
    "I--------b-------------B-----B--------b-----I",
    "I--------b----B-----------------------b-----I",
    "I--------bi---------------i--------@--x-----I",
    "I--------dDD==============DDDDDDDDDDDDd-----I",
    "I--------BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB-----I",
    "I--------BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB-----I",
    "I-------------------------------------------I",
    "I-------------------------------------------I",
    "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII",
  ],
   ["bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "b----------------------------b",
    "b----------------------------b",
    "b----------------------------b",
    "b----------------------------b",
    "b----------------------------b",
    "b----------------------------b",
    "b----------------------------b",
    "b---------------------------@b",
    "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
    "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  ],
];
var trophyDisplay = function(num, x, y) {
  if(trophiesOwned[num] === false) {
      fill(100, 100, 100);
  }
  if(trophiesOwned[num] === true) {
      fill(0, 200, 0);
  }
  rect(x + 10, y + 10, 80, 80, 5);
  image(trophy, x + 10, y - 2, 80, 80);
  fill(0);
  textSize(11);
  textAlign(CENTER);
  textFont('sans serif');
  text(trophies[num], x + 50, y + 85);
  textAlign(LEFT);
  if(mouseX > x + 10 && mouseX < x + 80 && mouseY > y + 10 && mouseY < y + 80) {
    display = trophyDescription[num];
  }
  textFont('impact');
}
var human = function(x, y, num) {
  if(timer === 0) {
    humany[num] = y;
  }
  if(timer > 0) {
    image(humanGraphic, x, humany[num], blockSize, blockSize);
    if (dist(270 + player.Size / 2, player.y + blockSize / 2, x + blockSize / 2, humany[num] + blockSize / 2) <= blockSize + 5) {
      score++;
      coins += 10;
      humany[num] = 800;
      scream.play();
      if(isNaN(coins)) {
          storeItem("coins", score * 10);
      }
      else {
          storeItem("coins", coins);
      }
  }
  }
    
};
var invisBlock = function(x, y) {
  if (player.y >= y - blockSize && player.y < y && 270 > x - blockSize && 270 < x + blockSize) {
    player.y = y - player.Size;
    player.onBlock = true;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 < x - blockSize / 2 && 270 > x - blockSize) {
    player.camX = player.camX + x - 323;
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
};
var block = function(x, y, solid) {
  image(blockGraphic, x, y, blockSize, blockSize);
  if(solid === true) { if (player.y >= y - blockSize && player.y < y && 270 > x - blockSize && 270 < x + blockSize) {
    player.y = y - player.Size;
    player.onBlock = true;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 < x - blockSize / 2 && 270 > x - blockSize) {
    player.camX = player.camX + x - 323;
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
    player.camX = player.camX + x - 323;
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
    player.camX = player.camX + x - 323;
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
};
var dirtBlock2 = function(x, y) {
  image(dirtBlock2Graphic, x, y, blockSize, blockSize);
  if (player.y >= y - blockSize && player.y < y && 270 > x - blockSize && 270 < x + blockSize) {
    player.y = y - player.Size;
    player.onBlock = true;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 < x - blockSize / 2 && 270 > x - blockSize) {
    player.camX = player.camX + x - 323;
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
};
var blankDirtBlock = function(x, y) {
  image(blankDirt, x, y, blockSize, blockSize);
  if (player.y >= y - blockSize && player.y < y && 270 > x - blockSize && 270 < x + blockSize) {
    player.y = y - player.Size;
    player.onBlock = true;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 < x - blockSize / 2 && 270 > x - blockSize) {
    player.camX = player.camX + x - 323;
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
  if (mouseX > scene + 2450 && mouseX < scene + 2650 && mouseY > 50 && mouseY < 100 && gamePlaying === false) {
    scene = 0;
  }
  if (mouseX > scene + 3050 && mouseX < scene + 3150 && mouseY > 50 && mouseY < 100 && gamePlaying === false) {
    scene = 0;
  }
  if (mouseX > scene + 800 && mouseX < scene + 1000 && mouseY > 430 && mouseY < 480 && gamePlaying === false) {
    gamePlaying = true;
  }
  if(mouseX > scene + 2090 && mouseX < scene + 2110 && mouseY > 395 && mouseY < 425 && showHitBox === true && clickTimer > 3) {
    showHitBox = false;
    clickTimer = 0;
  }
  if(mouseX > scene + 2090 && mouseX < scene + 2110 && mouseY > 395 && mouseY < 425 && showHitBox === false && clickTimer > 3) {
    showHitBox = true;
    clickTimer = 0;
  }
}
draw = function() {
  clickTimer++;
  background(0, 200, 255);
  if (gamePlaying === false) {
      if(!themeSong.isPlaying) {
      themeSong.play();
    }
    strokeWeight(1);
    stroke(0);
    fill(100, 200, 200);
    rect(scene, 0, width * 6, height);
    textFont('impact');
    fill(255, 0, 0);
    textSize(40);
    text("ATTACK OF THE KILLER TOMATOES", scene + 40, 100);
    text("YOU WIN!", scene + 650, 300);
    rect(scene + 200, 130, 200, 50, 5);
    rect(scene + 200, 190, 200, 50, 5);
    rect(scene + 200, 250, 200, 50, 5);
    rect(scene + 200, 310, 200, 50, 5);
    rect(scene + 200, 370, 200, 50, 5);
    fill(0, 0, 0);
    textSize(30);
    text("Play", scene + 265, 165); 
    text("Help", scene + 265, 225); 
    text("Settings", scene + 250, 285);
    text("Trophies", scene + 250, 345);
    text("Skins", scene + 265, 405);
    image(menuTomato, scene + 120, 410, 350, 300);
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
    rect(scene + 2450, 50, 100, 50, 5);
    rect(scene + 3050, 50, 100, 50, 5);
    if(showHitBox === true) {
      fill(0, 255, 0);
    }
    else {
      fill(255, 0, 0);
    }
    rect(scene + 2095, 400, 20, 20, 4);
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
    text("BACK", scene + 2460, 85);
    text("BACK", scene + 3060, 85);
    display = null;
    trophyDisplay(0, scene + 2450, 100);
    trophyDisplay(1, scene + 2550, 100);
    trophyDisplay(2, scene + 2650, 100);
    trophyDisplay(3, scene + 2750, 100);
    trophyDisplay(4, scene + 2850, 100);
    textFont("sans serif");
    if(display !== null) {
      text(display, mouseX, mouseY);
    }
    textFont("impact");
    fill(220);
    rect(scene + 2000, 290, 200, 20, 5);
    fill(180);
    rect(scene + 1990 + gameVolume, 285, 30, 30, 5);
    fill(0);
    text("     Volume\n\n\nShow hitbox",scene + 2020, 260);
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
    if (mouseIsPressed && mouseX > scene + 200 && mouseX < scene + 400 && mouseY > 130 && mouseY < 180) {
      gamePlaying = true;
      themeSong.stop();
    }
    if (mouseIsPressed && mouseX > scene + 200 && mouseX < scene + 400 && mouseY > 190 && mouseY < 240) {
      scene = -1200;
    }
    if (mouseIsPressed && mouseX > scene + 200 && mouseX < scene + 400 && mouseY > 250 && mouseY < 300) {
      scene = -1800;
    }
    if (mouseIsPressed && mouseX > scene + 200 && mouseX < scene + 400 && mouseY > 310 && mouseY < 360) {
      scene = -2400;
    }
    if (mouseIsPressed && mouseX > scene + 200 && mouseX < scene + 400 && mouseY > 370 && mouseY < 420) {
      scene = -3000;
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
    text(score, 400, 50);
    text(speedRunTimerSec + "." + speedRunTimerMil, 500, 50);
    fill(255, 0, 0);
    rect(20, 20, 80, 40, 5);
    rect(120, 20, 100, 40, 5);
    fill(0);
    text("BACK             FULLSCREEN", 35, 47);
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
    rect(20, 20, 80, 40, 5);
    textSize(40);
    text("YOU WIN", 40, 100);
    textSize(20);
    text("WITH A TOTAL OF " + score + " HUMANS KILLED AND A SPEEDRUN TIME OF " + speedRunTimerSec + "." + speedRunTimerMil + " SECONDS", 40, 150, 520, 300);
    speedRunTimerMil--;
    fill(0);
    text("BACK", 30, 50);
    if(score >= 20) {
      trophiesOwned[2] = true;
    }
    if(speedRunTimerSec <= 30) {
      trophiesOwned[3] = true;
    }
    if(score === 0) {
      trophiesOwned[1] = true;
    }
    storeItem('myTrophies', trophiesOwned);
    if(speedRunTimerSec + speedRunTimerMil / 10 > highScore) {
      highScore = speedRunTimerSec + speedRunTimerMil / 10;
    }
    if(mouseIsPressed && mouseX > 20 && mouseX < 100 && mouseY > 20 && mouseY < 60) {
      score = 0;
      speedRunTimerSec = 0;
      speedRunTimerMil = 0;
      level = 1;
      gamePlaying = false;
      player.spawnX = 200;
      player.spawnY = 200;
      timer = 0;
      player.camX = -30;
    }
  }
  if(gamePlaying === true) {
    if(splatSound.isPlaying === true) {
       speedRunTimerMil--;
    }
    speedRunTimerMil++;
    if(speedRunTimerMil > 60) {
      speedRunTimerSec++;
      speedRunTimerMil = 0;
    }
  }      if (soundWanted === true && !themeSong.isPlaying() && gamePlaying === false) {
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
  if(mouseIsPressed && mouseX > 120 && mouseX < 240 && mouseY > 20 && mouseY < 60 && gamePlaying === true) {
    let fs = fullscreen();
    fullscreen(true);
    //resizeCanvas(windowHeight, windowHeight);
  }
  textSize(width / 30);
  fill(255);
  text("Made by Henry MacDougall", 20, 570); 
  if(skin !== null) {
    for(var i = 0; i < walkFrames.length; i++) {
    walkFrames[i].filter(skin);
  }
  }
  for(var i2 = 0; i2 < walkFrames.length; i2++) {
      if(showHitBox === true) {
      walkFrames[i2].filter(OPAQUE);
    }
  }
  fill(0);
  text(coins, width / 2 - 50, 50);
  image(coin, width / 2 - 75, 28, 30, 30);
  document.addEventListener('contextmenu', event => event.preventDefault());
};
