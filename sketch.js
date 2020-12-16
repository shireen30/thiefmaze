var thief,thiefImage,thiefImage2,thiefImage3,thiefImage4;
var back;
var ropeImage,rope;
var ground;
var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13;
var line14,line15,line16,line17,line18,line19,line20,line21,line22,line23,line24,line25,line26;
var line27,line28,line29,line30,line31,line32,line33,line34,line35,line36,line37,line38,line39;
var line40,line42,line43,line44,line45,line46,line47,line48,line49,line50,line51,line52,line53;
var line54,line55,line56,line57,line58,line59,line60,line61;
var power=0;
var diamond,diamondImage;
var win,winImage;
var coin1,coin2,coin3,coin4,coinImage;
var gun1,gun2,gunImage1,gunImage2;
var bulet1,bulet2,bulet3,bulet4;
var position;
var ghost1;
var guard1,guard2;
var score=0;
var f=0;
var block,texts;
var live1,live2,live3,live1Image,live2Image,live3Image;
var gray1,gray2,gray3,gray1Image,gray2Image,gray3Image;
var fireball1,fireball2,fireball3;
var lives=3;
var start;

var gameState="start";
var startImg;
function preload(){
  //right
thiefImage1=loadImage("images/thief2.png");
//left
thiefImage2=loadImage("images/thief1.png");
back=loadImage("images/images.jpg");
diamondImage=loadImage("images/diamond.png");
winImage=loadImage("images/win.png");
coinImage=loadImage("images/coin.png");
gunImage1=loadImage("images/gun.png");
bulet1=loadImage("images/fire-ball4.png");
bulet2=loadImage("images/fire-ball3.png");
guard1=loadImage("images/guard1.png");
guard2=loadImage("images/guard2.png");
block=loadImage("images/image.png");
live1Image=loadImage("images/live1.png.png");
live2Image=loadImage("images/live2.png.png");
live3Image=loadImage("images/live3.png.png");
gray1Image=loadImage("images/gray1.png.png");
gray2Image=loadImage("images/gray2.png.png");
gray3Image=loadImage("images/gray3.png.png");
bulet3=loadImage("images/fire-ball2.png");
bulet4=loadImage("images/fire-ball1.png");
startImg=loadImage("images/start.png");
}


function setup() {
 
if(gameState=="start"){ 
  createCanvas(500,500);
  background(back);
  thief=createSprite(10,450);
  thief.addImage(thiefImage1); 
  thief.scale=0.5;
  
  diamond=createSprite(210,34);
  diamond.addImage(diamondImage);
  diamond.scale=0.1;
  start=createSprite(200,200,50,50);
  start.addImage(startImg);
  start.scale=0.3;
  text("Go Get the coins to Open the door to Diamond!!!",200,100);
  drawSprites();
  
}
  coin1=createSprite(90,236);
  coin1.addImage(coinImage);
  coin1.scale=0.15;

  coin2=createSprite(306,275);
  coin2.addImage(coinImage);
  coin2.scale=0.15;

  coin3=createSprite(62,156);
  coin3.addImage(coinImage);
  coin3.scale=0.15;

  coin4=createSprite(403,62);
  coin4.addImage(coinImage);
  coin4.scale=0.15;

  coin5=createSprite(103,433);
  coin5.addImage(coinImage);
  coin5.scale=0.15;
    
  gun1=createSprite(404,430);
  gun1.addImage(gunImage1);
  gun1.scale=0.1; 
  
  ghost1=createSprite(207,73);
  ghost1.addImage(guard2);
  ghost1.velocityX=-1;
  ghost1.scale=0.1;

  live1=createSprite(26,13);
  live1.addImage(live1Image);
  live1.scale=0.1;

  live2=createSprite(46,13);
  live2.addImage(live2Image);
  live2.scale=0.1;

  live3=createSprite(66,13);
  live3.addImage(live3Image);
  live3.scale=0.1;

  gray1=createSprite(26,13);
  gray1.addImage(gray1Image);
  gray1.scale=0.1;
  gray1.visible=false;
  
  gray2=createSprite(46,13);
  gray2.addImage(gray2Image);
  gray2.scale=0.1;
  gray2.visible=false;

  gray3=createSprite(66,13);
  gray3.addImage(gray3Image);
  gray3.scale=0.1;
  gray3.visible=false;



   fireball1=createSprite(0,0,10,10); 
   fireball2=createSprite(0,0,10,10); 
   fireball3=createSprite(0,0,10,10); 
   fireball1.visible=false;
   fireball2.visible=false;
   fireball3.visible=false;
   fireball1.addImage(bulet1);
   fireball2.addImage(bulet2);
   fireball3.addImage(bulet3);
  
line1=createSprite(120, 50, 134, 5);
line2=createSprite(190, 82, 5, 70);
line3=createSprite(112, 90, 70, 5);
line4=createSprite(150, 127, 5, 80);
line5=createSprite(50, 87, 5, 80);
line6=createSprite(65, 130, 35, 5);
line7=createSprite(83, 150, 5, 45);
line8=createSprite(174, 169, 110, 5);
line9=createSprite(231, 67, 5, 30);
line10=createSprite(228, 185, 5, 123);
line11=createSprite(270,109, 5, 120);
line12=createSprite(102, 210, 110, 5);
line13=createSprite(211, 247, 120, 5);
line14=createSprite(119, 251, 5, 54);
line15=createSprite(119, 330, 80, 5);
line16=createSprite(76, 300, 5, 66);
line17=createSprite(159, 310, 5, 45);
line18=createSprite(194, 290, 70,5);
line19=createSprite(268, 287, 5, 85);
line20=createSprite(232, 326, 70,5);
line21=createSprite(200, 365,5, 80);
line22=createSprite(50, 207, 5, 325);
line23=createSprite(75, 357, 50,5);
line24=createSprite(172, 367, 50,5);
line25=createSprite(120, 410, 80,5);
line26=createSprite(80, 429,5, 43);
line27=createSprite(219, 403, 40,5);
line28=createSprite(448,308,5,45);
line29=createSprite(309, 290, 76,5);
line30=createSprite(348, 253, 5, 80);
line31=createSprite(328, 210, 100,5);
line32=createSprite(338, 210, 158, 5);
line33=createSprite(304, 247,50, 5);
line33.velocityX=-1;
line34=createSprite(275, 367,70,5);
line35=createSprite(275, 405, 5, 80);
line36=createSprite(307, 356,5,50);
line37=createSprite(382, 327, 70,5);
line38=createSprite(348, 349, 5, 50);
line39=createSprite(310, 427,5, 40);
line40=createSprite(335, 405,50,5);
line41=createSprite(392, 390,5,40);
line42=createSprite(419, 367,59,5);
line43=createSprite(410, 407, 40,5);
line44=createSprite(421, 299, 55,5);
line45=createSprite(358, 167, 45,5);
line46=createSprite(292,166,50,5);
line47=createSprite(391, 286,5, 70);
line48=createSprite(420, 232,5, 50);
line49=createSprite(385, 170,5, 90);
line50=createSprite(433, 170, 30,5);
line51=createSprite(310, 110,5, 40);
line52=createSprite(350, 70, 5, 50);
line53=createSprite(347, 130, 80,5);
line54=createSprite(398, 90, 40,5);
line54.velocityX=-1;
line55=createSprite(420, 146, 5, 50);
line56=createSprite(135,247, 20, 5);
line57=createSprite(450, 169, 5, 244);
line58=createSprite(448, 389, 5, 120);
line59=createSprite(251, 449, 400,5);
line60=createSprite(340, 50, 224,5);  
line61=createSprite(20, 50, 224,5);  
line62=createSprite(227,116,80,5);
ground=createSprite(28,450,190,10);

texts=createSprite(221,237);
  texts.addImage(block);
  texts.scale=0.8;
  texts.visible=false; 

win=createSprite(223,223);
win.visible=false;
line14.velocityY=-3;
}



function draw() {
    
  if(mousePressedOver(start))
{
  gameState="play";
  console.log("play starts");
  start.destroy();
}

//keep outside condition so that runs repeatedly
    line14.bounceOff(line15)
    line14.bounceOff(line12);
    line54.bounceOff(line52);
    line54.bounceOff(line57);
    line33.bounceOff(line19);
    line33.bounceOff(line30);
//----------------------------------
    if(ghost1.bounceOff(line2)){
      ghost1.addImage(guard1);
      }
  
      if(ghost1.bounceOff(line9)){
      ghost1.addImage(guard2);
      }
//---------------------------------------------
    if(gameState=="play")
    {
      background(back);  
      console.log(mouseX,mouseY);
  
    
    if(mousePressedOver(texts)) {
      texts.visible=false;
    }

    if(keyDown("up_arrow")){
      thief.y=thief.y-2;
      thief.addImage(thiefImage2); 
      thief.scale=0.2;
      position="up";
      }

    if(keyDown("down_arrow")){
      thief.y=thief.y+2;
      thief.addImage(thiefImage1); 
      thief.scale=0.2;
      }

    if(keyDown("left_arrow")){
      thief.x=thief.x-2;
      thief.addImage(thiefImage2); 
      thief.scale=0.2;
      position="left";
      }

    if(keyDown("right_arrow")){
    thief.x=thief.x+2; 
    thief.addImage(thiefImage1); 
    thief.scale=0.2;
    position="right";
    }
  
 
    //coin1.debug=true;
    coin1.setCollider("circle",0,0,100);
    //coin2.debug=true;
    coin2.setCollider("circle",0,0,100);
    //coin3.debug=true;
    coin3.setCollider("circle",0,0,100);
    //coin4.debug=true;
    coin4.setCollider("circle",0,0,100);
    //coin5.debug=true;
    coin5.setCollider("circle",0,0,100);
    //thief.debug=true;
    thief.setCollider("rectangle",0,0,100,160);
    //ghost1.debug=true;
    ghost1.setCollider("rectangle",0,0,100,160);
  
    if(thief.isTouching(diamond)){
    win.addImage(winImage);
    win.visible=true;
    thief.scale=0.5;
    }
  

    if(thief.isTouching(gun1)){
    gun1.destroy();
    power=1;
    texts.visible=true;
    }
  
   
    if(thief.isTouching(coin1)){
    coin1.destroy();
    score=score+5;
    }

    if(thief.isTouching(coin2)){
    coin2.destroy(); 
    score=score+5;
    }

    if(thief.isTouching(coin3)){
    coin3.destroy();
    score=score+5;
    }

    if(thief.isTouching(coin4)){
    coin4.destroy();
    score =  score+5; 
    }

    if(thief.isTouching(coin5)){
    coin5.destroy();
    score=score+5;
    }
    
    
    if(keyWentDown('a') && power==1) { 
    if(position=="right"){
      fireball1.visible=true;
     fireball1.x=thief.x+10; 
     fireball1.y=thief.y;
     fireball1.velocityX=3;
   // fireball1.addImage(bulet2);
    fireball1.scale=0.1;
    }else if(position=="left"){
      fireball2.visible=true;
      fireball2.x=thief.x-10;
     fireball2.y=thief.y; 
    fireball2.velocityX=-3;
    //fireball2.addImage(bulet1);
    fireball2.scale=0.1;
    
    }else if(position=="up"){
      fireball3.visible=true;
     fireball3.x=thief.x;
     fireball3.y=thief.y; 
    fireball3.velocityY=-3;
  
    fireball3.scale=0.1;
    
    }
    
    }

    
    if(fireball1.isTouching(ghost1)||fireball2.isTouching(ghost1)||fireball3.isTouching(ghost1)){
      ghost1.destroy();
      console.log("guard hit");
    }
     

    if(thief.isTouching(ghost1)){
    thief.x=10;
    thief.y=450; 
    }
//thief touching the lasers
    if(thief.isTouching(line14)){
      thief.x=10;
      thief.y=450;
      lives--;
      //gray1.visible=true;
      //live1.visible=false;
    }

    if(thief.isTouching(line54)){
      thief.x=10;
      thief.y=450;
      //gray2.visible=true;
      //live2.visible=false;
      lives--;
    }

    if(thief.isTouching(line33)){
      thief.x=10;
      thief.y=450;
      //gray3.visible=true;
      //live3.visible=false;
      lives--;
    }


    switch(lives){

      case 3:live1.visible=true;
      live2.visible=true;
      live3.visible=true;
      break;
      case 2:live1.visible=false;
      gray1.visible=true;
      live2.visible=true;
      live3.visible=true;
      break;
      case 1:live1.visible=false;
      gray2.visible=true;
          live2.visible=false;
         
      live3.visible=true;
      break;
      case 0:background("black");
              textSize(30);
              text("GAME OVER",200,200);
              gray2.destroy();
              gray1.destroy();
              gray3.destroy();
              live3.destroy();
              gameState="end";
              break;
    }
  ground.shapeColor="orange";
  line1.shapeColor="blue";  
  line2.shapeColor="blue";
  line3.shapeColor="blue";
  line4.shapeColor="blue"; 
  line5.shapeColor="blue"; 
  line6.shapeColor="blue"; 
  line7.shapeColor="blue"; 
  line8.shapeColor="blue"; 
  line9.shapeColor="blue";
  line10.shapeColor="blue"; 
  line11.shapeColor="blue"; 
  line12.shapeColor="blue";  
  line13.shapeColor="blue"; 
  line14.shapeColor=rgb(random(10,255),random(10,100),0);
  line15.shapeColor="blue";  
  line16.shapeColor="blue"; 
  line17.shapeColor="blue";
  line18.shapeColor="blue";
  line19.shapeColor="blue"; 
  line20.shapeColor="blue";
  line21.shapeColor="blue"; 
  line22.shapeColor="blue";
  line23.shapeColor="blue";  
  line24.shapeColor="blue";  
  line25.shapeColor="blue";  
  line26.shapeColor="blue";  
  line27.shapeColor="blue";  
  line28.shapeColor="blue";  
  line29.shapeColor="blue";  
  line30.shapeColor="blue";  
  line31.shapeColor="blue";  
  line32.shapeColor="blue";  
  line33.shapeColor=rgb(random(10,255),random(10,100),0);  
  line34.shapeColor="blue";  
  line35.shapeColor="blue";  
  line36.shapeColor="blue";  
  line37.shapeColor="blue";  
  line38.shapeColor="blue";  
  line39.shapeColor="blue";  
  line40.shapeColor="blue";  
  line41.shapeColor="blue";  
  line42.shapeColor="blue";  
  line43.shapeColor="blue";  
  line44.shapeColor="blue";  
  line45.shapeColor="blue";  
  line46.shapeColor="blue";  
  line47.shapeColor="blue";  
  line48.shapeColor="blue";  
  line49.shapeColor="blue";  
  line50.shapeColor="blue";  
  line51.shapeColor="blue";  
  line52.shapeColor="blue";  
  line53.shapeColor="blue";  
  line54.shapeColor=rgb(random(10,255),random(10,100),0);  
  line55.shapeColor="blue";  
  line56.shapeColor="blue";  
  line57.shapeColor="blue";  
  line58.shapeColor="blue";  
  line59.shapeColor="blue";  
  line60.shapeColor="blue";  
  line61.shapeColor="blue";  
  line62.shapeColor="blue";  

  


  thief.collide(ground);
  thief.collide(line1);
  thief.collide(line2);
  thief.collide(line3);
  thief.collide(line4);
  thief.collide(line5);
  thief.collide(line6);
  thief.collide(line7);
  thief.collide(line8);
  thief.collide(line9);
  thief.collide(line10);
  thief.collide(line11);
  thief.collide(line12);
  thief.collide(line13);
  thief.collide(line14);
  thief.collide(line15);
  thief.collide(line16);
  thief.collide(line17);
  thief.collide(line18);
  thief.collide(line19);
  thief.collide(line20);
  thief.collide(line21);
  thief.collide(line22);
  thief.collide(line23);
  thief.collide(line24);
  thief.collide(line25);
  thief.collide(line26);
  thief.collide(line27);
  thief.collide(line28);
  thief.collide(line29);
  thief.collide(line30);
  thief.collide(line31);
  thief.collide(line32);
  thief.collide(line33);
  thief.collide(line34);
  thief.collide(line35);
  thief.collide(line36);
  thief.collide(line37);
  thief.collide(line38);
  thief.collide(line39);
  thief.collide(line40);
  thief.collide(line41);
  thief.collide(line42);
  thief.collide(line43);
  thief.collide(line44);
  thief.collide(line45);
  thief.collide(line46);
  thief.collide(line47);
  thief.collide(line48);
  thief.collide(line49);
  thief.collide(line50);
  thief.collide(line51);
  thief.collide(line52);
  thief.collide(line53);
  thief.collide(line54);
  thief.collide(line55);
  thief.collide(line56);
  thief.collide(line57);
  thief.collide(line58);
  thief.collide(line59);
  thief.collide(line60);
  thief.collide(line61);
  thief.collide(line62);
  
  if(score===25){
    line62.destroy();
  }

  drawSprites();


    


  textSize(12);
  fill("black"); 
  text("coins earned: "+ score, 404,15);
  
  
}

}