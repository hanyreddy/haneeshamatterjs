const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;
var ball,hand1,ball2;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(200,145,120,20);
    hand1=new Hand(600,200)
     
     
  
 

    
    
    ball=new Ball(150,140,30,30)
    connect1=new Connect({x:600,y:200},hand1.body)
    
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
   hand1.dispaly();
    ball.display();
   connect1.display();
    
}
