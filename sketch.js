var runner


function preload(){
  //pre-load images
  trex_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png")
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;
  runner = createSprite(200,350,10,20)
  runner.scale = 0.05
  runner.addAnimation("running", trex_running)
  
}

function draw() {
  background("black");
  if(path.y > 400){
    path.y = 1
  }
  runner.x = World.mouseX
  drawSprites()

}

