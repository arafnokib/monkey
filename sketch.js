var score;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var floor;





function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
}



function setup() {
 
floor = createSprite(400,350,800,10);   
  
bananaGroup = new Group();
obstacleGroup = new Group();
  


monkey = createSprite(200,200,10,10);
monkey.addAnimation("monkeyRunning", monkey_running);
monkey.scale = 0.2;
score = score + 1000;
}


function draw() {
  
  createEdgeSprites();
  createCanvas(400,400)
  background("white");
  text("Survival Score: " + score,280,30);
  
  
  floor.velocityX = -5;
  
  if (floor.x < 0){
    floor.x = floor.width / 2;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(floor);

 
  if (keyDown("space")&&monkey.isTouching(floor)){
      //monkey.y>=250){


  monkey.velocityY = -14;
  
  }
  Obstacle();
  Banana(); 
  drawSprites();
}


function Obstacle(){
  
  if (frameCount%250===0){
  obstacle = createSprite(500,340,10,10);
  obstacleGroup.add(obstacle);
  obstacle.addImage("obstacleImg",obstaceImage);
  obstacle.scale = 0.15;
    obstacle.velocityX = obstacle.velocityX + -5;

  }
  
}

function Banana(){
  if (frameCount%80==0){
    
    rand=Math.round(random(120,200));
    banana = createSprite(200,rand,20,20);
    banana.addImage("bananaImg", bananaImage);
    banana.scale = 0.1;
   
    banana.velocityY = banana.velocityY = 3;
  }
}




