var ship,ship_running,edges;
var seaImage;
function preload(){
shipImg= loadAnimation("ship-1.png","ship-2.png");
seaImg1 = loadImage("sea.png");
}

function setup(){
  createCanvas(600,400);
  
  ship = createSprite(50,170,30,60);
  ship.addAnimation("running",ship_running);
  edges=createEdgesSprites();

  ship.scale = 0.5;
  ship.x = 50

  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaImage);
  sea.x = sea.width/2;

  
  
}

function draw() {
  background("blue");
  ship.velocityX=-2;
  if(sea.x<0){
    sea.x=sea.width/2;
  }
  ship.addImage(seaImg);
console.log(ship.y);

ship.collide(sea);
ship.collide(edges[3]);


  drawSprites();
 
}