var man_walking, man
var invisibleGround
var light 
function preload(){

  man_walking = loadAnimation(  "images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
  
}

function setup() {
  
  createCanvas(600, 400);
  man = createSprite(50,180,20,50)
  man.addAnimation("running", man_walking)
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  light = new Light(200,200,50,50)
function draw() {
  drawSprites();
light.display()
 
  
}}
  