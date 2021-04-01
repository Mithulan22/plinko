const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1
var plinko = []
var particles = []
var divisions = []
var divisionHeight=300

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
for (var k = 0; k <=innerWidth; k=k+80){
  divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight))
}

ground1 = new ground(400, 800,800,20)

for (var j = 40; j <=width; j=j+50){
  plinko.push(new Plinko(j,70))
}
for (var j = 15; j <=width; j=j+50){
  plinko.push(new Plinko(j,175))
}
for (var j = 40; j <=width; j=j+50){
  plinko.push(new Plinko(j,275))
}
for (var j = 15; j <=width; j=j+50){
  plinko.push(new Plinko(j,375))
}
}

function draw() {
  background(0);  
Engine.update(engine)
 
for(var i=0; i<plinko.length;i++){
  plinko[i].display()
}
for(var i=0; i<divisions.length;i++){
 divisions [i].display()
}
if(frameCount%60===0){
  particles.push(new Particles(random(width/2-10, width/2+10), 10, 10))
}
for(var i=0; i<particles.length;i++){
  particles [i].display()
 }
  ground1.display()
  drawSprites();
}