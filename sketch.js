var monkey, monkey_running
var back,backimage

var survivalTime=0

var bananaimg,bananagroup;
var obs1,obsgroup;
var ground;
function preload(){
  monkey_running= 
    loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png", "Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  backimage = loadImage("jungle.jpg");
  bananaimg=loadImage("banana.png");
  obs1=loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
  back=createSprite(0,0,400,400);
  back.addImage(backimage);
  back.velocityX=-2;
bananaGroup=new Group();
 ObstaclesGroup=new Group(); 
  monkey=createSprite(62,356,20,50); monkey.addAnimation("running", monkey_running);
  monkey.scale=0.15;
  ground=createSprite(200,380,400,20);
  ground.visible=false;
var survivalTime=0;
 stroke("black");
 textSize(20);
 fill("black");

}

function draw() {
  background(0);
  survivalTime=survivalTime+1;
 
  if(back.x<0) { 
    back.x=back.width/2;
    }
     if(keyDown("space") && monkey.y>=322){
   monkey.velocityY=-15 ;
    
  }
   monkey.velocityY = monkey.velocityY + 0.8
   food();
  obstacles();
  monkey.collide(ground);  
  drawSprites();
 text("Survival Time : "+survivalTime,100,50);
 
}
function food() {
  //write code here to spawn the clouds
  if (frameCount % 150 === 0) {
    var banana = createSprite(344,148,40,10);
   banana.addImage(bananaimg);
    banana.scale = 0.09;
    banana.velocityX = -6;
    
     //assign lifetime to the variable
    banana.lifetime = 100;
    
    
    
    //add each cloud to the group
    bananaGroup.add(banana);
    monkey.collide(banana);
    if (bananaGroup.isTouching(monkey)) {
      bananaGroup.destroyEach();
    }
    
  }
   if (bananaGroup.isTouching(monkey)) {
      bananaGroup.destroyEach();
    }
}


  function obstacles() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacles = createSprite(361,344,40,10);  obstacles.addImage(obs1);
    obstacles.velocityX = -6;
    
     //assign lifetime to the variable
    obstacles.lifetime = 100;
    obstacles.scale = 0.2;
    
 
  if (ObstaclesGroup.isTouching(monkey)){
    monkey.scale=0.1;
      }
    
    //add each cloud to the group
    ObstaclesGroup.add(obstacles);
  }
  
}
