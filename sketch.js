const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var rock;
var ground;
var boggie1,boggie2,boggie3;
var chain1, chain2;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  boggie1 = new Coach(50, 300, 50, 50);
  boggie2 = new Coach(150,300, 50, 50);
  boggie3 = new Coach(250, 300, 50, 50);
  chain1 = new SlingShot(boggie1.body, boggie2.body);
  chain2 = new SlingShot(boggie2.body, boggie3.body);
  rock = new Rock(1000, 300, 100, 100);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);

ground.show();
boggie1.show();
boggie2.show();
boggie3.show();
chain1.show();
chain2.show();
rock.show();

  }


  function keyPressed(){

if (keyCode === RIGHT_ARROW){
Matter.Body.applyForce(boggie3.body,{x:boggie3.body.position.x, y: boggie3.body.position.y}, {x:0.65, y:0});


}


  }