const Engine=Matter.Engine;//name spacing
const World=Matter.World;
const Bodies=Matter.Bodies;

var MyEngine,MyWorld;// variables
var car
function setup() {
  createCanvas(400,400);
  MyEngine= Engine.create();
  MyWorld=MyEngine.world;
  car=Bodies.rectangle(200, 200, 20, 20);
  World.add(MyWorld,car);
  console.log(car);
  console.log(car.angle.x);
}
function draw() {
  background("lightblue");  
  Engine.update(MyEngine);
  rectMode(CENTER);
  rect(car.position.x,car.position.y,50,50);
 drawSprites();
} 