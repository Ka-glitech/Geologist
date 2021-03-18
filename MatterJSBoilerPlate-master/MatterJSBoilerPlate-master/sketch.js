
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(400, 300, 100, 50);
	stone = new Stone(500,21,70, 70);
	ground = new Ground(600,height,1200,40);
	rubber= new Rubber(650,21,50);//(x,y,r)
	iron = new Iron(300,21, 80,80);
	sand = new Sand(550, 350,1);
	sand1 = new Sand(550, 350,1);
	sand2= new Sand(550, 350,1 );
	sand3= new Sand(550, 350,1 );
	sand4= new Sand(550, 350,1 );
	sand5= new Sand(550, 350,1 );
	sand6= new Sand(550, 350,1 );
	sand7= new Sand(550, 350,1 );
	sand8= new Sand(550, 350,1 );
	sand9= new Sand(550,350,1);
	sand10 = new Sand(550, 350,1);
	sand11 = new Sand(550, 350,1);
	sand12 = new Sand(550, 350,1);
	
	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
   
  
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  iron.display();
  sand.display();
  sand1.display(); 
  sand2.display(); 
  sand3.display(); 
  sand4.display(); 
  sand5.display(); 
  sand6.display(); 
  sand7.display(); 
  sand8.display();
  sand9.display();
  sand10.display()
  sand11.display()
  sand12.display();

  
  
  

  drawSprites();
 
}



