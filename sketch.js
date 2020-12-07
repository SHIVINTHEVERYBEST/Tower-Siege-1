const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;
var polygonIMG;
var block1, block2, block3, block4, block5, block6;
var block7, block8, block9;



function preload(){

  polygonIMG = loadImage("polygon.png");
}

function setup(){
createCanvas(800, 800);

//engine = Engine.create();
//world = engine.world;

polygonSprite = createSprite(60, 400, 20, 20);
polygonSprite.addImage(polygonIMG);
polygonSprite.scale= 0.1;

//polygon = new Polygon(50, 200, 20, 20);
//World.add(world, polygon);

}

function draw(){
background(0);

  drawSprites();

  //polygon.display();
}
