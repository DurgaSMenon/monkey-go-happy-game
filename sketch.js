
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

 monkey=createSprite(80,560,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1;
  
 ground=createSprite(400,595,900,10);
 ground.velocityX=-4;
 ground.x=ground.width/2 
 console.log(ground.x);  
  
score=0;
  
}


function draw() {
createCanvas(600,600)  
background(225)  
  
 if(ground.x<0) {
   ground.x=ground.width/2 
 }
  
 if(keyDown("space"))
   monkey.velocityY=-12;
 
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  var survivalTime=0;
  stroke("yellow");
  textSize=500;
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+ survivalTime,200,50);
  
  FoodGroup=createGroup();
  
  foods();
  obstacles();

drawSprites();  
}

function foods(){
  if(frameCount % 80===0){
    banana=createSprite(580,600,10,10);
    banana.y=Math.round(random(350,400));
    banana.addImage("banana",bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.setlifetime=150;
    FoodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 300===0){
    obstacle=createSprite(580,610,10,10);
    obstacle.y=Math.round(random(580,585));
    obstacle.velocityX=-7;
    obstacle.addImage("stone",obstacleImage)
    obstacle.scale=0.1;
    obstacle.setlifetime=80;
  }
}


