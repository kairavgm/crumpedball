
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var paperObj, dustbinObj, groundObj;
function setup() {
	createCanvas(1000, 500);
//	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paperObj = new paper(300,100,40);
	 dustbinObj = new dustbin(650,480);
	 groundObj=new ground(width/4,500,width,20);

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background("green");
 // Engine.update(engine);
  
  paperObj.display();
  dustbinObj.display(); 
  groundObj.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:50,y:-50});
  
	}
}




