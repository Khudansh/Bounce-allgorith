var movingRect,fixedRect,gameObject1,gameObject2;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(0, 200, 30, 80);
  movingRect.shapeColor="red";
  movingRect.velocityX=3;

  fixedRect=createSprite(800,200,30,80)
  fixedRect.shapeColor="red";
  fixedRect.velocityX=-3;

  gameObject1=createSprite(200,200,50,50);
  gameObject1.shapeColor="red";

  gameObject2=createSprite(100,100,50,50)
  gameObject2.shapeColor="red";
}

function draw() {
  background(255,255,255); 
  
  if(isTouching(gameObject2,movingRect)){
    gameObject2.shapeColor="blue";
    movingRect.shapeColor="blue";
  }

  else{
    gameObject2.shapeColor="red";
    movingRect.shapeColor="red";
  }

  bounce(movingRect,fixedRect);

  //movingRect.x=mouseX;
  //movingRect.y=mouseY;

  drawSprites();
}