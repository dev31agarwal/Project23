var helicopterIMG, helicopter, package,packageIMG, piece1, piece2, piece3;
var packageBody,ground, groundSprite, piece1Sprite, piece2Sprite, piece3Sprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	

	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG);
	package.scale=0.2;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="white"

	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	World.add(world, ground);

	piece1 = new Piece(width/2, height-50, 200, 20);
	World.add(world, piece1); 

	piece1Sprite= createSprite(width/2, height-50, 200, 20);
	piece1Sprite.shapeColor="red";

	piece2= new Piece(300, 610, 20, 100);
	World.add(world, piece2);

	piece2Sprite= createSprite(300, 610, 20, 100);
	piece2Sprite.shapeColor="red";
	
	piece3= new Piece(500, 610, 20, 100);
	World.add(world, piece3);

	piece3Sprite= createSprite(500, 610, 20, 100);
	piece3Sprite.shapeColor="red";
	

	
}


function draw() {
  rectMode(CENTER);
  background(0);

  
	  
	package.x= packageBody.position.x 
	  package.y= packageBody.position.y 

	  
	drawSprites();

	piece1.display();
 
  Engine.update(engine);

 


}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
	package.velocityY=5;
	Matter.Body.setStatic(packageBody, false);

    
  }
}



