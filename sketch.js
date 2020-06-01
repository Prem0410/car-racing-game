var car;
var carImg
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameOver,restart;

var ground;
var bullet;
var score;
var canvs, backgroundImg;
var button;
var obstacleGroup,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5;



function preload(){
   backgroundImg = loadImage("track.jpg");
   carImg = loadImage("sprites/car.png");
   obstacle1 = loadImage("sprites/obstacle1.png");
   obstacle2 = loadImage("sprites/obstacle2.png");
   obstacle3 = loadImage("sprites/obstacle3.png");
   
   
   // ground = loadImage("track.png");
   
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    car = createSprite(windowWidth/2,windowHeight/2,50,50);
    car.addImage("car",carImg,10,10);
    car.scale = 0.2

    car.debug = true;
    car.setCollider("circle",0,0,50)
    //gameOver = createSprite(windowWidth/2,windowHeight/2,100,100);
    //gameOver.visible = false;
    //restart = createSprite(windowWidth/2,windowHeight/4,100,100);
    //restart.visible = false;
    


    obstacleGroup = new Group();
    
   // button = createButton('Click To Play');
    //button.position(windowWidth/2,windowHeight/2,20,20);
   // button.mousePressed(gameState === PLAY);

}
function draw(){
    background(backgroundImg);
    image(backgroundImg, 0,-windowHeight*4,windowWidth, windowHeight*5);
   
   if(gameState === PLAY){
      car.x = mouseX;
      spawnObstacle();
      if(obstacleGroup.isTouching(car)){
       gameState = END;
       textSize(20);
       text("YOU LOSE",windowWidth/2,windowHeight/2)
      }
    }
    else if(gameState === END){
      
     }

  drawSprites();
}
function spawnObstacle(){
    if(frameCount % 50 ===0){
        var obstacle = createSprite(windowWidth/2,100,10,10);
        obstacle.velocityY = 4;
        obstacle.x = random(200,windowWidth-200);
        var rand = Math.round(random(1,3));
        switch(rand){
            case 1 : obstacle.addImage("obstacle",obstacle1);
            break;
            case 2 : obstacle.addImage("obstacle",obstacle2);
            break;
            case 3 : obstacle.addImage("obstacle",obstacle3);
            break;
            default : break;
        }
        obstacle.scale = 0.2;
        console.log(obstacle.y);
        car.depth = obstacle.depth;
        car.depth = car.depth + 1;

        
        obstacleGroup.add(obstacle);
        //obstacle.lifetime = 300;
    }
    
}