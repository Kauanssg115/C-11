
function preload(){
  seaImg = loadImage("mar.png");
   shipImg1 = loadAnimation("ship-1.png","ship-1.png", "ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  navio = createSprite(130,200,30,30);
   ship.addAnimation("movingShip",shipImg1);
   mar=createSprite(400.200);
    sea.addImage(seaImg); 
    mar.velocidadeX = -5;
    mar.scale=0,3;
}

function draw() {
   backgrond("blue")
    drawSprites();

 
}
