var bullet,wall,speed,weight,deformation,
thickness;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 10, 10);
  bullet.shapeColor=color("coral");
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
}

function draw() {
  background("white");  
  if(isTouching(bullet,wall))
  {
    bullet.velocityX=0;
    deformation=(weight*speed*speed*0.5)/(thickness*thickness*thickness);
    if(deformation>10)
    {
      wall.shapeColor=color("orange");
    }
    if(deformation<=10)
    {
      wall.shapeColor=color("green");
    }
   
  }
  drawSprites();
}