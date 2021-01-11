const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var myWorld;
var myEngine;
var sun ; 
var earth , earthOrbitCounter;
var mars , marsOrbitCounter;



function preload() {}
function setup() {
  createCanvas(600,600);

  myEngine = Engine.create();
  myWorld = myEngine.world;

 sun = new Sun(300,300,100);
 earth = new Earth(300,450,45);
 mars = new Mars(20,580,40)





}
function draw() {
  background("black");

  Engine.update(myEngine);

  sun.display();
  earth.display();
  mars.display();
  

  drawSprites();
}
