// omg! you are so cool!
// this just makes you so much cooler than you already are, sitting on your fat ass "hacking". Get a life!
// have fun!
var hacker;
let impact;
var menuText = ['Respawn button coming 2026', 'In colour!', 'Total profits ¢11!', 'Produced 300 ketchup bottles in 2020!', 'Jump on stereos to level up!', 'Respawn button delayed to 2032'];
let num;
var codes = ['none', 'skcudge', 'ybeicuh', 'none'];
var accepting = false;
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
let plant2Graphic;
let plant3Graphic;
let plant4Graphic;
let brickGraphic;
let humanGraphic;
let stereoGraphic;
let coin;
let sun;
let moon;
let cloud;
let trophy;
let themeSong;
var coins = 0;
var trophies = ["Booster", "Pacifist", "Bounty Hunter", "Pro", "Server Member", "Candy Thief"];
var trophiesOwned = [false, false, false, false, false, false];
var trophyDescription = ["Boost the discord server", "Win the game without killing any humans", "Win the game and kill 20 or more humans", "Win the game in 30 seconds or less", "Join the discord server (click on this box)", "Oct 2021 only. Win the game and collect 30 lollypops. "];
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
var showHitBox = false;
var clickTimer = 0;
let snow1;
let snowflake;
let lollypop;
let elf;
let snowtree;
let yellowsnow;
var dx = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0];
var dy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0];
let tomato1;
let tomato2;
let tomato3;
let tomato4;
let tomato5;
let tomato6;
let tomato7;
let tomato8;
let tomato9;
let tomato10;
let tomato11;
let tomato12;
let tomato13;
let boosterbase1;
let boosterbase2;
let boosterbase3;
let boosterbase4;
let boosterbase5;
let boosterbase6;
let boosterbase7;
let boosterbase8;
let boosterbase9;
let boosterbase10;
let boosterbase11;
let boosterbase12;
let boosterbase13;
let pumpkin1;
let pumpkin2;
let pumpkin3;
let pumpkin4;
let pumpkin5;
let pumpkin6;
let pumpkin7;
let pumpkin8;
let pumpkin9;
let pumpkin10;
let pumpkin11;
let pumpkin12;
let pumpkin13;
var skin = 'Tomato';
var skins = ['Tomato', 'Booster', 'Camo', 'Pumpkin'];
let skinsPfp;
var skinDesc = ["The default. An icon of early tomato-hood.", "Can only be acquired by boosting the discord server.", "Camoflauge. Originally used in the great tomato wars against the human forces.", "Exclusive to Oct. 2021"]; 
let ownedSkins; 
var food = "Ketchup";
var mode = 'classic';
var insideCount = 0;
var inside = false;
var colours;
function preload() {
  soundFormats('ogg', 'mp3');
  impact = loadFont('copyfonts.com_impact-opentype.otf');
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
  plant2Graphic = loadImage('plant2Graphic.png');
  plant3Graphic = loadImage('plant3Graphic.png');
  plant4Graphic = loadImage('plant4Graphic.png');
  blankDirt = loadImage('dirt_block!grass.png');
  dirtBlock2Graphic = loadImage('dirt_block.rot1.png');
  cloud = loadImage('cloud.png');
  sun = loadImage('sun.png');
  moon = loadImage('moon.png');
  ghost = loadImage('ghost.png');
  lollypop = loadImage('lollypop.png');
  snow1 = loadImage('snow1.png');
  snowflake = loadImage('snowflake.png');
  tomato1 = loadImage('tomato_graphic1.png');
  tomato2 = loadImage('tomato_graphic2.png');
  tomato3 = loadImage('tomato_graphic3.png');
  tomato4 = loadImage('tomato_graphic4.png');
  tomato5 = loadImage('tomato_graphic5.png');
  tomato6 = loadImage('tomato_graphic6.png');
  tomato7 = loadImage('tomato_graphic7.png');
  tomato8 = loadImage('tomato_graphic8.png');
  tomato9 = loadImage('tomato_graphic1.png');
  tomato10 = loadImage('tomato10.png');
  tomato11 = loadImage('tomato11.png');
  tomato12 = loadImage('tomato12.png');
  tomato13 = loadImage('tomato13.png');
  boosterbase1 = loadImage('boosterbase1.png');
  boosterbase2 = loadImage('boosterbase2.png');
  boosterbase3 = loadImage('boosterbase3.png');
  boosterbase4 = loadImage('boosterbase4.png');
  boosterbase5 = loadImage('boosterbase5.png');
  boosterbase6 = loadImage('boosterbase6.png');
  boosterbase7 = loadImage('boosterbase7.png');
  boosterbase8 = loadImage('boosterbase8.png');
  boosterbase9 = loadImage('boosterbase1.png');
  boosterbase10 = loadImage('boosterbase10.png');
  boosterbase11 = loadImage('boosterbase11.png');
  boosterbase12 = loadImage('boosterbase12.png');
  boosterbase13 = loadImage('boosterbase13.png');
  pumpkin1 = loadImage('pumpkin1.png');
  pumpkin2 = loadImage('pumpkin2.png');
  pumpkin3 = loadImage('pumpkin3.png');
  pumpkin4 = loadImage('pumpkin4.png');
  pumpkin5 = loadImage('pumpkin5.png');
  pumpkin6 = loadImage('pumpkin6.png');
  pumpkin7 = loadImage('pumpkin7.png');
  pumpkin8 = loadImage('pumpkin8.png');
  pumpkin9 = loadImage('pumpkin1.png');
  pumpkin10 = loadImage('pumpkin10.png');
  pumpkin11 = loadImage('pumpkin11.png');
  pumpkin12 = loadImage('pumpkin12.png');
  pumpkin13 = loadImage('pumpkin13.png');
  coin = loadImage('coin.png');
  trophy = loadImage('trophy.png');
  walkFrames[0] = tomato1;
  walkFrames[1] = tomato2;
  walkFrames[2] = tomato3;
  walkFrames[3] = tomato4;
  walkFrames[4] = tomato5;
  walkFrames[5] = tomato6;
  walkFrames[6] = tomato7;
  walkFrames[7] = tomato8;
  walkFrames[8] = tomato9;
  walkFrames[9] = tomato10;
  walkFrames[10] = tomato11;
  walkFrames[11] = tomato12;
  walkFrames[12] = tomato13;
  let palette = 'https://api.jsonserve.com/FU-n3Z';
  grey = loadJSON(palette);
  snowtree = loadImage('snowtree.png');
  yellowsnow = loadImage('yellowsnow.png');
  elf = loadImage('elf.png');
}

function setup() {
  hacker = false;
  if(getItem('hacker') !== null) {
    hacker = getItem('hacker');
    storeItem('hacker', hacker);
  }
  if(getItem('number') === null) {
    num = 0;
    storeItem('number', num);
  }
  if(getItem('number') !== null) {
    num = getItem('number');
    num++;
    storeItem('number', num);
  }
  if(num === menuText.length) {
    num = 0;
    storeItem('number', num);
  }
  ownedSkins = [true, false, false, false];
  if(getItem('skins') !== null) {
    ownedSkins = getItem('skins');
  }
  storeItem('skins', ownedSkins);
  ownedSkins[0] = true;
  ownedSkins[1] = false;
  ownedSkins[2] = false;
  storeItem('skins', ownedSkins);
  if(month() === 10) {
    mode = 'halloween';
  }
  if(month() === 12) {
    mode = 'christmas';
  }
  skinsPfp = [tomato1, boosterbase1, plant1Graphic, pumpkin1];
  let cnv = createCanvas(600, 600);
  cnv.position(windowWidth / 2 - width / 2, 100);
  ownedSkins = [true, false, false, false];
  if(getItem('skins') !== null) {
    ownedSkins = getItem('skins');
  }
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
    storeItem('myTrophies', [false, false, false, false, false, false])
  }
}
var inputCode = "Enter Code";
var codeClicked = false;
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
    "b@----bbbbbbbbbbbbbbbb-------I",
    "b--------------------b-------I",
    "bb-------------------x-------I",
    "bbb------------------x-------I",
    "bbbb-----------------b-------I",
    "bbbbb--1=i----i-1----b---#--=I",
    "dddddDDDDDDDDDDDDDDDDdDDDDDDDd",
    "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
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
    "IbbbbbbbbbbbbbIIIIIIIIIBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
    "IbbbbbbbbbbbbbIIIIIIIIIBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
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
    "IbbbbbbbbBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBbbbbbI",
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
  fill(0, 0, 0);
  textSize(11);
  textAlign(CENTER);
  textFont('sans serif');
  text(trophies[num], x + 50, y + 85);
  textAlign(LEFT);
  if(mouseX > x + 10 && mouseX < x + 80 && mouseY > y + 10 && mouseY < y + 80) {
    display = trophyDescription[num];
  }
  textFont(impact);
  fill(100, 100, 100);
}
var human = function(x, y, num) {
  if(timer === 0) {
    humany[num] = y;
  }
  if(timer > 0) {
    if(mode === 'classic') {
      image(humanGraphic, x, humany[num], blockSize, blockSize);
    }
    if(mode === 'halloween') {
      image(lollypop, x, humany[num], blockSize, blockSize);
    }
    if(mode === 'christmas') {
      image(elf, x, humany[num], blockSize, blockSize);
    }
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
var block = function(x, y, visible, solid, type) {
  if(visible === true) {
    switch(type) {
      case 'brick':
        image(brickGraphic, x, y, blockSize, blockSize);
      break;
      case 'block':
        image(blockGraphic, x, y, blockSize, blockSize);
      break;
      case 'dirt1':
        image(dirtBlockGraphic, x, y, blockSize, blockSize); 
      break;
      case 'dirt2':
        image(blankDirt, x, y, blockSize, blockSize);
      break;
  }
  }
  if(solid === true) { if (player.y >= y - blockSize && player.y < y && 270 > x - blockSize && 270 < x + blockSize) {
    player.y = y - player.Size;
    player.onBlock = true;
    inside = true;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 < x - blockSize / 2 && 270 > x - blockSize) {
    player.camX = player.camX + x - 323;
    player.xVel = 0;
    inside = true;
  }
  if (player.y < y + blockSize && player.y > y - blockSize && 270 > x + blockSize / 2 && 270 < x + blockSize) {
    player.camX = player.camX + x - 220;
    player.xVel = 0;
    inside = true;
  }
  if (player.y <= y + blockSize && player.y > y + 30 && 270 > x - blockSize && 270 < x + blockSize) {
    player.yVel = 0;
    player.y = y + blockSize;
    player.onBlock = false;
    inside = true;
    if(player.yVel > 15) {
      player.health -= 10;
    }}
  }
};
var plant1 = function(x, y) {
  if(mode === 'classic') {
    image(plant1Graphic, x, y, blockSize, blockSize);
  }  
  if(mode === 'halloween') {
    image(pumpkin1, x, y, blockSize, blockSize);
  }
  if(mode === 'christmas') {
    image(snowtree, x, y, blockSize, blockSize);
  }
};
var portal = function(x, y) {
  image(tomatoCrateGraphic, x, y, blockSize, blockSize);
  if (dist(270 + player.Size / 2, player.y + blockSize / 2, x + blockSize / 2, y + blockSize / 2) <= blockSize + 5) {
    level++;
    player.respawn = true;
    player.transfer = false;
    timer = -1;
    inside = true;
  }
};
var stereo = function(x, y) {
  if(mode === 'classic') {
    image(stereoGraphic, x, y, blockSize, blockSize);
  }
  if(mode === 'halloween') {
    image(ghost, x, y, blockSize, blockSize);
  }
  if(mode === 'christmas') {
    image(yellowsnow, x, y, blockSize, blockSize);
  }
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
var snow = function(x, y) {
  image(snow1, x, y + 57, blockSize, blockSize);
};
var playerSpawn = function() {
  player.y = player.spawnY;
  player.camX = player.spawnX;
  player.health = 10;
  player.respawn = false;
  walkFrame = 3;
};
var playerDraw = function() {
  if(skin === 'Tomato' && walkFrames[0] !== tomato1) {
      walkFrames[0] = tomato1;
      walkFrames[1] = tomato2;
      walkFrames[2] = tomato3;
      walkFrames[3] = tomato4;
      walkFrames[4] = tomato5;
      walkFrames[5] = tomato6;
      walkFrames[6] = tomato7;
      walkFrames[7] = tomato8;
      walkFrames[8] = tomato9;
      walkFrames[9] = tomato10;
      walkFrames[10] = tomato11;
      walkFrames[11] = tomato12;
      walkFrames[12] = tomato13;
      food = 'Ketchup';
  }
  if(skin === 'Booster' && walkFrames[0] !== boosterbase1 && ownedSkins[1] === true) {
    walkFrames[0] = boosterbase1;
      walkFrames[1] = boosterbase2;
      walkFrames[2] = boosterbase3;
      walkFrames[3] = boosterbase4;
      walkFrames[4] = boosterbase5;
      walkFrames[5] = boosterbase6;
      walkFrames[6] = boosterbase7;
      walkFrames[7] = boosterbase8;
      walkFrames[8] = boosterbase9;
      walkFrames[9] = boosterbase10;
      walkFrames[10] = boosterbase11;
      walkFrames[11] = boosterbase12;
      walkFrames[12] = boosterbase13;
      food = 'Broke';
  }
  if(skin === 'Camo' && walkFrames[0] !== plant1Graphic && ownedSkins[2] === true) {
      walkFrames[0] = plant1Graphic;
      walkFrames[1] = plant1Graphic;
      walkFrames[2] = plant1Graphic;
      walkFrames[3] = plant1Graphic;
      walkFrames[4] = plant1Graphic;
      walkFrames[5] = plant1Graphic;
      walkFrames[6] = plant1Graphic;
      walkFrames[7] = plant1Graphic;
      walkFrames[8] = plant1Graphic;
      walkFrames[9] = plant1Graphic;
      walkFrames[10] = plant2Graphic;
      walkFrames[11] = plant3Graphic;
      walkFrames[12] = plant4Graphic;
      food = "Salad";
  }
  if(skin === 'Pumpkin' && walkFrames[0] !== pumpkin1 && ownedSkins[3] === true) {
      walkFrames[0] = pumpkin1;
      walkFrames[1] = pumpkin2;
      walkFrames[2] = pumpkin3;
      walkFrames[3] = pumpkin4;
      walkFrames[4] = pumpkin5;
      walkFrames[5] = pumpkin6;
      walkFrames[6] = pumpkin7;
      walkFrames[7] = pumpkin8;
      walkFrames[8] = pumpkin1;
      walkFrames[9] = pumpkin10;
      walkFrames[10] = pumpkin11;
      walkFrames[11] = pumpkin12;
      walkFrames[12] = pumpkin13;
      food = "Pie";
  }
  image(walkFrames[walkFrame], 270, player.y, player.Size, player.Size);
  if(showHitBox === true) {
    noFill();
    if(mode === 'classic') {
      stroke(0, 0, 0);
    }
    if(mode === 'halloween') {
      stroke(255, 255, 255);
    }
    rect(270, player.y, player.Size, player.Size);
    stroke(0, 0, 0);
  }
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
  if(mode === 'classic' || mode === 'christmas') {
      if(mode === 'classic') {
        image(sun, 400, 100, 120, 120);
      }
      image(cloud, 300, 200, 60, 60);
      image(cloud, 200, 100, 80, 80);
      image(cloud, 390, 150, 60, 60);
      image(cloud, 30, 60, 50, 50);
      image(cloud, 100, 200, 60, 60);
      image(cloud, 500, 50, 60, 60);
  }
  if(mode === 'halloween') {
      image(moon, 400, 100, 120, 120);
  }
  for (var i = 0; i < levels[level - 1].length; i++) {
    for (var j = 0; j < levels[level - 1][i].length; j++) {
      switch (levels[level - 1][i][j]) {
        case 'B':
          block(j * blockSize + x, i * blockSize + y, true, true, 'block');
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
          block(j * blockSize + x, i * blockSize + y, true, true, 'dirt1');
          break;
        case 'b':
          block(j * blockSize + x, i * blockSize + y, true, true, 'brick');
          break;
          case 'x':
          block(j * blockSize + x, i * blockSize + y, true, false, 'brick');
          break;
        case '1':
          plant1(j * blockSize + x, i * blockSize + y);
          break;
        case 'd':
          block(j * blockSize + x, i * blockSize + y, true, true, 'dirt2');
          break;
        case 'i':
          human(j * blockSize + x, i * blockSize + y,i + j + level);
          break;
        case 'I':
          block(j * blockSize + x, i * blockSize + y, false, true, 'block');
          break;
        case 'l':
          block(j * blockSize + x, i * blockSize + y, true, false, 'block');
          break;
        case '-':
          if(mode === 'christmas') {
            if(levels[level - 1][i + 1][j] === 'B' || levels[level - 1][i + 1][j] === 'D' || levels[level - 1][i + 1][j] === 'b' || levels[level - 1][i + 1][j] === 'd' || levels[level - 1][i + 1][j] === 'l'){
            snow(j * blockSize + x, i * blockSize + y);
             }
          }
          break;
      }
    }
  }
};
keyPressed = function() {
  if (key.code === 97 || keyCode === LEFT_ARROW || key === 'a' || key === 'A') {
    player.keys[0] = true;
  }
  if (key.code === 119 || keyCode === UP_ARROW || key === 'w' || key === 'W') {
    player.keys[1] = true;
  }
  if (key.code === 100 || keyCode === RIGHT_ARROW || key === 'd' || key === 'D') {
    player.keys[2] = true;
  }
  if(codeClicked === true) {
    if (keyCode===BACKSPACE || keyCode===DELETE) {
        inputCode=inputCode.slice(0,-1);
    } else if(keyCode < 16 || keyCode > 18 && keyCode < 33 || keyCode > 47) { 
    inputCode = inputCode + key.toString();
    }
  }
};

keyReleased = function() {
  if (key.code === 97 || keyCode === LEFT_ARROW || key === 'a' || key === 'A') {
    player.keys[0] = false;
  }
  if (key.code === 119 || keyCode === UP_ARROW || key === 'w' || key === 'W') {
    player.keys[1] = false;
  }
  if (key.code === 100 || keyCode === RIGHT_ARROW || key === 'd' || key === 'D') {
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
  imageMode(CORNER);
  if(timer === 1 && mode !== 'classic') {
        for(var c = 0; c < 30; c++) {
    dx[c] = random(0, width);
    dy[c] = random(0, height);
  }
  }
  textAlign(LEFT);
  angleMode(DEGREES);
  clickTimer++;
  background(0, 200, 255);
  if (gamePlaying === false) {
      if(!themeSong.isPlaying) {
      themeSong.play();
    }
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(100, 200, 200);
    rect(scene, 0, width * 6, height);
    textFont(impact);
    fill(255, 0, 0);
    textSize(40);
    text("ATTACK OF THE KILLER TOMATOES", scene + 40, 100);
    text("YOU WIN!", scene + 650, 300);
    rect(scene + 200, 130, 200, 50, 5);
    rect(scene + 200, 190, 200, 50, 5);
    rect(scene + 200, 250, 200, 50, 5);
    rect(scene + 200, 310, 200, 50, 5);
    rect(scene + 200, 370, 200, 50, 5);
    if(codeClicked === true) {
      fill(255, 100, 0);
    }
    else {fill(255, 0, 0);}
    if(mouseIsPressed) {
      codeClicked = false;
      if(mouseX < scene + 430 || mouseX > scene + 550 || mouseY < 550 || mouseY > 570) {
        inputCode = "Enter Code";
      }
    }
    if(mouseIsPressed && mouseX > scene + 430 && mouseX < scene + 550 && mouseY > 550 && mouseY < 570) {
      if(inputCode === "Enter Code") {
        inputCode = "";
      }
      codeClicked = true;
    }
    rect(scene + 430, 550, 120, 20, 5);
    fill(0, 0, 0);
    textSize(15);
    textFont('Helvetica');
    text(inputCode, scene + 435, 553, 120, 20);
    textFont('Impact');
    fill(0, 0, 0);
    textSize(30);
    text("Play", scene + 265, 165); 
    text("Help", scene + 265, 225); 
    text("Settings", scene + 250, 285);
    text("Trophies", scene + 250, 345);
    text("Skins", scene + 265, 405);
    textAlign(CENTER);
    textSize(20);
    translate(scene + 300, 120);
    rotate(sin(frameCount * 10) * 4);
    text(menuText[num], 0, 0);
    textAlign(LEFT);
    rotate(-sin(frameCount * 10) * 4);
    translate(-(scene + 300), -120);
    image(menuTomato, scene + 120, 410, 350, 300);
    fill(120, 120, 120);
    rect(scene + 740, 250, 80, 100, 10);
    rect(scene + 980, 250, 80, 100, 10);
    fill(0, 0, 0);
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
    fill(0, 0, 0);
    textSize(60);
    text("<                      >", scene + 750, 320);
    fill(255, 255, 255);
    text(level, scene + 880, 300);
    fill(0, 0, 0);
    textSize(30);
    text("PLAY", scene + 870, 465);
    text("EXIT", scene + 660, 85);
    text("EXIT", scene + 1260, 85);
    text("EXIT", scene + 1860, 85);
    text("EXIT", scene + 2460, 85);
    text("EXIT", scene + 3060, 85);
    text("Skins", scene + 3250, 90);
    textSize(25);
    display = null;
    for(var i = 0; i < skins.length; i++) {
      fill(200, 200, 200);
      rect(scene + 3060, 120 + i * 50, 520, 45, 4);
      image(skinsPfp[i], scene + 3070, 122 + i * 50, 40, 40);
      fill(0, 0, 0);
      if(ownedSkins[i] === true) {
        text(skins[i], scene + 3120, 150 + i * 50);
      }
      else{
        text("?", scene + 3120, 150 + i * 50);
      }
      if(skin === skins[i]) {
        text('Equipped', scene + 3400, 150 + i * 50);
      }
      if(mouseX >= scene + 3060 && mouseX <= scene + 3580 && mouseY >= 120 + i * 50 && mouseY <= 185 + i * 50) {
        if(ownedSkins[i] === true) {
          display = skinDesc[i];
        }
        if(ownedSkins[i] !== true) {
          display = 'Obtain this skin to see the description';
        }
        if(mouseIsPressed && mouseX >= scene + 3060 && mouseX <= scene + 3580 && mouseY >= 120 + i * 50 && mouseY <= 185 + i * 50 && ownedSkins[i] === true) {
          skin = skins[i];
        }
      }
    }
    trophyDisplay(0, scene + 2450, 100);
    trophyDisplay(1, scene + 2550, 100);
    trophyDisplay(2, scene + 2650, 100);
    trophyDisplay(3, scene + 2750, 100);
    trophyDisplay(4, scene + 2850, 100);
    trophyDisplay(5, scene + 2450, 200);
    if(mouseIsPressed && mouseX > scene + 2850 && mouseX < scene + 2930 && mouseY > 100 && mouseY < 180) {
      window.open("https://discord.gg/ZXKx2kmKnp");
      trophiesOwned[4] = true;
      storeItem('myTrophies', trophiesOwned);
    }
    textFont("Helvetica");
    fill(0, 0, 0);
    if(display !== null) {
      text(display, mouseX + 15, mouseY, width - mouseX - 15, height - mouseY);
    }
    textFont(impact);
    textSize(30);
    fill(220, 220, 220);
    rect(scene + 2000, 290, 200, 20, 5);
    fill(180, 180, 180);
    rect(scene + 1990 + gameVolume, 285, 30, 30, 5);
    fill(0, 0, 0);
    text("     Volume\n\n\nShow hitbox",scene + 2020, 260);
    fill(255, 0, 0);
    textSize(40);
    text("HELP", scene + 1450, 100);
    textSize(30);
    fill(0, 0, 0);    
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
    if(mode === 'classic') {
        background(0, 200, 255);
    }
    if(mode === 'halloween') {
      background(0);
    }
    if(mode === 'christmas') {
      background(200);
    }
    inside = false;
    drawLevel(player.camX, -60);
    if(inside === true) {
      insideCount++;
    }
    if(inside === false && insideCount > 0) {
      insideCount--;
    }
    stroke(0, 0, 0);
    if(mode === 'classic') {
      fill(0, 0, 0);
    }
    if(mode === 'halloween') {
      fill(255, 255, 255);
    }
    text(score, 400, 50);
    text(speedRunTimerSec + "." + speedRunTimerMil, 500, 50);
    fill(255, 0, 0);
    rect(20, 20, 80, 40, 5);
    rect(120, 20, 100, 40, 5);
    fill(0, 0, 0);
    text("EXIT             FULLSCREEN", 35, 47);
    playerDraw();
    playerMove();
        for(f = 0; f < dx.length; f++) {
      imageMode(CENTER);
      translate(dx[f], dy[f]);
      rotate(dy[f]);
      if(mode === 'christmas') {
        image(snowflake, 0, 0, 20, 20);
      }
      imageMode(CORNER);
      rotate(-dy[f]);
      translate(-dx[f], -dy[f]);
      dx[f]--;
      dy[f]++;
      if(dx[f] <= -10) {
        dx[f] = width + 10;
      }
      if(dy[f] >= 610) {
        dy[f] = -10;
      }
    }
    timer++;
  }
  if (player.health < 1) {
    deathTimer++;
    fill(255, 0, 0);
    textSize(30);
    text("You're " + food, 200, 300, 400, 300);
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
  if(inputCode === grey.codes.code2 && accepting === true) {
    if(ownedSkins[1] !== true) {
        ownedSkins[1] = true;
        coins+=100;
        storeItem('skins', ownedSkins);
        skin = 'Booster';
    }
    if(trophiesOwned[0] !== true) {
      trophiesOwned[0] = true;
    }
    inputCode = 'Enter Code';
  }
  if(inputCode === grey.codes.code3 && accepting === true) {
    if(ownedSkins[2] !== true) {
        ownedSkins[2] = true;
        coins+=100;
        skin = 'Camo';
        storeItem('skins', ownedSkins);
    }
    inputCode = 'Enter Code';
  }
  if(level === levels.length) {
    fill(100, 200, 200);
    rect(0, 0, 600, 600);
    fill(255, 0, 0);
    rect(20, 20, 80, 40, 5);
    textSize(40);
    text("YOU WIN", 40, 100);
    textSize(20);
    text("With a total of " + score + " humans killed and a run time of " + speedRunTimerSec + "." + speedRunTimerMil + " seconds", 40, 150, 520, 300);
    speedRunTimerMil--;
    fill(0, 0, 0);
    text("EXIT", 30, 50);
    if(score >= 20) {
      trophiesOwned[2] = true;
    }
    if(score >= 30 && month() === 10) {
      trophiesOwned[5] = true;
      ownedSkins[3] = true;
      storeItem('skins', ownedSkins);
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
  textSize(width / 30);
  fill(255, 255, 255);
  text("Made by Henry MacDougall", 20, 570); 
  if(mode === 'halloween') {
    fill(255, 255, 255);
  }
  if(mode === 'classic' || gamePlaying !== true) {
      fill(0);
  }
  text(coins, width / 2 - 50, 50);
  image(coin, width / 2 - 75, 28, 30, 30);
  document.addEventListener('contextmenu', event => event.preventDefault());
  if(keyCode === 123) {
    hacker = true;
    storeItem('hacker', hacker);
  }
  if(hacker === true) {
    coins = 0;
    storeItem('coins', coins);
    ownedSkins = [true, false, false, false];
    storeItem('skins', ownedSkins);
    trophiesOwned = [false, false, false, false, false, false];
    storeItem('myTrophies', trophiesOwned);
  }
};
