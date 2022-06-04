var trex,trex_running
var cloud,cloudImage



function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  cloudImage=loadImage("cloud.png")
}

function setup(){
  trex = createSprite(50,180,20,50)
  var rand=Math.round(random(1,100))
  console.log(rand)
  

}








function draw(){
  createCanvas(600,200)
  background("Turquoise")
  spawnClouds()
  console.log(frameCount)
  drawSprites()


  
}

function spawnClouds(){
  if(frameCount % 60===0){
cloud=createSprite(600,100,40,10)
cloud.addImage(cloudImage)
cloud.y=Math.round(random(10,60))
cloud.scale=0.5
cloud.velocityX=-3

}
}