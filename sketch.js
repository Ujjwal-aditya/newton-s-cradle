
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}
var bob1,bob2,bob3,bob4,bob5,roof1,rope1,rope2,rope3,rope4,rope5;
function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200,100);
	bob2 = new Bob(240,100);
	bob3 = new Bob(280,100);
	bob4 = new Bob(320,100);
	bob5 = new Bob(360,100);

	//the roof
	roof1 = new Roof();

	//the ropes
	rope1 = new Rope(bob1,roof1,-80);
	rope2 = new Rope(bob2,roof1,-40);
	rope3 = new Rope(bob3,roof1,0);
	rope4 = new Rope(bob4,roof1,40);
	rope5 = new Rope(bob5,roof1,80);
	
}


function draw() 
{
  Engine.update(engine);
	rectMode(CENTER);
  background("yellow");
  
  if(keyCode=== UP_ARROW)
  {
	Body.applyForce(bob5.body,bob4.body.position,{x:5,y:-5})	  
	console.log("FORCE");

  }
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



