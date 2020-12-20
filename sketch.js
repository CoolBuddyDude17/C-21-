var fixedRect, movingRect;
var A,B;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  A=createSprite(600,600,50,80);
  A.shapeColor="Magenta";
  B=createSprite(200,200,50,80);
  B.shapeColor="Magenta";
  A.velocityX=-5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    
  }
bounceOff(A,movingRect);

  drawSprites();
}
 