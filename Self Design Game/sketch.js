
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, puddingObj,groundObject, launcherObject;
var gift1,gift2
var world,elf;
var launchingForce=100;
var backgroundImg
var engine

function preload(){
	elf=loadImage("images/elf.png");

  backgroundImg=loadImage("images/background.png")

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	puddingObj=new Pudding(235,420,40); 

	gift1=new Gift(1000,270,30);
  gift2=new Gift(1100,400,30);

	treeObj=new Tree(1050,630);
	groundObject=new Ground(width/2,600,width,20);
	launcherObject=new Launcher(puddingObj.body,{x:235,y:420})
  // var render = Render.create({
  //   element: document.body,
  //   engine: engine,
  //   options: {
  //     width: 1300,
  //     height: 600,
  //     wireframes: false
  //   }
  // });
	
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background(backgroundImg);
  //frameRate(2)
 // Engine.update(engine)
  textSize(25);
  fill("white");
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(elf ,190,270,250,350);
  //Engine.update(engine)
  

  treeObj.display();
  puddingObj.display();
  gift1.display();
  gift2.display();

  groundObject.display();
  launcherObject.display();
  detectollision(puddingObj,gift1);
  detectollision(puddingObj,gift2);
}

function mouseDragged()
{
	Matter.Body.setPosition(puddingObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(puddingObj.x,puddingObj.y,gift1.x,gift1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(puddingObj.body, {x:235, y:420}) 
	  launcherObject.attach(puddingObj.body);
	}
  }

  function detectollision(lpudding,lgift){
	/*var collision = Matter.SAT.collides(lpudding,lgift);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lgift,false);	
	}*/
  giftBodyPosition=lgift.body.position
  puddingBodyPosition=lpudding.body.position
  
  var distance=dist(puddingBodyPosition.x, puddingBodyPosition.y, giftBodyPosition.x, giftBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lgift.r+lpudding.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lgift.body,false);
    }

  }