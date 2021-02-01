
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,boyimg;

function preload(){
boyimg= loadImage("boy.png");
	
}

function setup() {
	createCanvas(900, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
   mango1=new Mango(300,250,34);
	mango2=new Mango(855,325,35);
	mango3=new Mango(670,260,35);
	mango4=new Mango(730,200,35);
	mango5=new Mango(710,320,36);
	tree = new Tree(775,368,0,0);
	stone = new Stone(40,300,20,20);
	ground = new Ground(0,660,2000,30);
	//boy =new Boy(400,600,20,20);

	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  boy=createSprite(200,550,10,10);
	boy.addImage(boyimg);
	boy.scale=0.125
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  //boy.display();
  stone.display();
  tree.display();
  ground.display();

drawSprites()
}



