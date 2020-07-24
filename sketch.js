//var gameState = "serve";
var tank ,tankUp,tankDown, tankLeft, tankRight;
var canvas,bg;
var e1,w1;
var start;
function preload(){
bg = loadImage("images/bg1.png");
  tankUp = loadImage("images/tankGU.png");
  tankDown = loadImage("images/tankGD.png");
  tankLeft = loadImage("images/tankGL.png");
  tankRight = loadImage("images/tankGR.png");

  en1 = loadImage("images/tankW1.png");
  en2 = loadImage("images/tankW2.png");
}

function setup() {
   canvas = createCanvas(1364,624);

  tank = createSprite(40, 567, 0.5, 0.5);
  tank.addImage(tankRight);
  tank.scale = 0.24;


// x , y position 
  //size change = 115 , 400
  // size = 220 , 395
  // size change = 175 , 340
  // size = 180 , 340
  // size = 105 , 335
  // size = 475 , 225
  // size = 515 , 275
  // size = 600 , 275
  // size = 640 , 335
  // 730 , 335
  // 775 , 280
  // 775 , 390
  // 975 , 400
  // 1035 , 400
  // 1120 , 400
  // 1150 , 510
  // 1245 , 510
  // 1275 , 50 
  // final = 1350 , 50

e1 = createSprite(110,150,0.5,0.5);
e1.addImage(en1);
e1.scale = 0.24;

e2 = createSprite(105,330,0.5,0.5);
e2.addImage(en2);
e2.scale = 0.24;

e3 = createSprite(495,220,0.5,0.5);
e3.addImage(en1);
e3.scale = 0.24;

e4 = createSprite(745,335,0.5,0.5);
e4.addImage(en2);
e4.scale = 0.24;

e5 = createSprite(620,400,0.5,0.5);
e5.addImage(en1);
e5.scale = 0.15;

e6 = createSprite(1130,400,0.5,0.5);
e6.addImage(en2);
e6.scale = 0.15;

e7 = createSprite(1100,280,0.5,0.5);
e7.addImage(en1);
e7.scale = 0.15;

  w1 = createSprite(40,274,70,550);
  w1.visible = false;
  w2 = createSprite(680,20,1350,40);
  w2.visible = false;
  w3 = createSprite(680,605,1370,40);
  w3.visible = false;
  w4 = createSprite(1330,340,70,550); 
  w4.visible = false;
  w5 = createSprite(620,540,450,40);
  w5.visible = false;
  w6 = createSprite(165,510,60,200);
  w6.visible = false;
  w7 = createSprite(130,370,130,25);
  w7.visible = false;
  w8 = createSprite(295,530,60,150);
  w8.visible = false;
  w9 = createSprite(235,425,200,40);
  w9.visible = false;
  w10 = createSprite(300,360,70,130);
  w10.visible = false;
  w11 = createSprite(210,310,150,40);
  w11.visible = false;
  w12 = createSprite(165,280,70,100);
  w12.visible = false;
  w13 = createSprite(315,250,300,40);
  w13.visible = false;
  w14 = createSprite(425,375,70,250);
  w14.visible = false;
  w15 = createSprite(510,305,150,40);
  w15.visible = false;
  w16 = createSprite(620,365,200,30);
  w16.visible = false;
  w17 = createSprite(620,367,200,35);
  w17.visible = false;
  w18 = createSprite(555,340,60,35);
  w18.visible = false;
  w19 = createSprite(520,425,150,40);
  w19.visible = false;
  w20 = createSprite(625,475,200,40);
  w20.visible = false;
  w21 = createSprite(300,190,330,40);
  w21.visible = false;
  w22 = createSprite(555,220,70,75);
  w22.visible = false;
  w23 = createSprite(690,250,70,145);
  w23.visible = false;
  w24 = createSprite(810,424,300,35);
  w24.visible = false;
  w25 = createSprite(1075,480,70,150);
  w25.visible = false;
  w26 = createSprite(915,480,250,35);
  w26.visible = false;
  w27 = createSprite(1005,365,450,40);
  w27.visible = false;
  w28 = createSprite(615,195,100,40);
  w28.visible = false;
  w29 = createSprite(815,330,70,80);
  w29.visible = false;
  w30 = createSprite(1200,395,60,200);
  w30.visible = false;
  w31 = createSprite(1135,540,200,40);
  w31.visible = false;
  w32 = createSprite(1195,155,70,300);
  w32.visible = false;

}
function draw() {
  background(bg);

if(keyDown(UP_ARROW)){
    tank.y-=5;
    tank.addImage(tankUp);
    tank.scale = 0.15;
 }
 if(keyDown(DOWN_ARROW)){
  tank.y+=5;
  tank.addImage(tankDown);
  tank.scale = 0.15;
}
if(keyDown(RIGHT_ARROW)){
  tank.x+=5;
  tank.addImage(tankRight);
  tank.scale = 0.15;
}
if(keyDown(LEFT_ARROW)){
  tank.x-=5;
  tank.addImage(tankLeft);
  tank.scale = 0.15;
}
console.log(tank.x);
console.log(tank.y);


if(tank.isTouching(w1) || tank.isTouching(w2) || tank.isTouching(w3) || tank.isTouching(w4) || tank.isTouching(w5)){
  tank.x = 40;
  tank.y = 565;
}
if(tank.isTouching(w6) || tank.isTouching(w7) || tank.isTouching(w8) || tank.isTouching(w9) || tank.isTouching(w10)){
  tank.x = 40;
  tank.y = 565;
}
if(tank.isTouching(w11) || tank.isTouching(w12) || tank.isTouching(w13) || tank.isTouching(w14) || tank.isTouching(w15)){
  tank.x = 40;
  tank.y = 565;
}
if(tank.isTouching(w16) || tank.isTouching(w17) || tank.isTouching(w18) || tank.isTouching(w19) || tank.isTouching(w20)){
  tank.x = 40;
  tank.y = 565;
}
if(tank.isTouching(w21) |
 tank.isTouching(w22) || tank.isTouching(w23) || tank.isTouching(w24) || tank.isTouching(w25)){
  tank.x = 40;
  tank.y = 565;
}
if(tank.isTouching(w26) || tank.isTouching(w27) || tank.isTouching(w28) || tank.isTouching(w29) || tank.isTouching(w30)){
  tank.x = 40;
  tank.y = 565;
}
if(tank.isTouching(w31) || tank.isTouching(w32)){
  tank.x = 40;
  tank.y = 565;
}
  drawSprites();
  fill("red");
  textStyle("bold");
  textSize(24);
  text("~Start~",3,540);

  fill(0);
  textStyle("bold");
  textSize(24);
text(" ~ ~ ~ ~ Press Arrow Keys to Move the Tank ~ ~ ~ ~ ",700,30); 
text("Be aware of walls !!!! If you touch them you will go at starting !!!!",100,610);
}