const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground,stand2;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(450,390,900,20);
  //ground2=new Ground(900,200,90,20);
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

//stand2

block17 = new Block(630,184,30,40);
block18 = new Block(660,184,30,40);
block19 = new Block(690,184,30,40);
block20 = new Block(720,184,30,40);
block21 = new Block(750,184,30,40);
block22 = new Block(780,184,30,40);
//2nd
block23 = new Block(660,164,30,40);
block24 = new Block(690,164,30,40);
block25 = new Block(720,164,30,40);
block26 = new Block(750,164,30,40);
//3rd
block27 = new Block(690,144,30,40);
block28 = new Block(720,144,30,40);
//last
block29 = new Block(705,46,30,40);
//

blockB = new Block(96,175,20,20);
blockA = new Block(100,175,20,50,20);
//sling = new SlingShot(blockA,blockB);
}
function draw() {
  background(56,44,44); 
  console.log(mouseX);
  console.log(mouseY);
  textSize(20);
  fill("lightyellow");
  

  ground.display();
stand2.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("teal");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  fill("pink");
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  fill("teal");
  block27.display();
 block28.display();
 fill("grey");
  block29.display();
 fill("salmon")
blockB.display();
fill("teal");
blockA.display();
fill("yellow");
///sling.display();




}

