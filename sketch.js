var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 
  box1 = createSprite(100,100,50,50);
  box1.shapeColor = "green";

  box2 = createSprite(200,100,50,50);
  box2.shapeColor = "green";

  box3 = createSprite(300,100,50,50);
  box3.shapeColor = "green";

  box4 = createSprite(400,100,50,50);
  box4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
if(isTounching(movingRect,box4)){
  box4.debug = true;
  movingRect.debug = true;
}else{
  box4.debug = false;
  movingRect.debug = false;
}
  drawSprites();
}

function isTounching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
  return false;
}
}