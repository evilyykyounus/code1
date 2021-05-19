

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy
var launchingForce=100;
var life=3;



function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
//Home=new home();
//Hospital=new hospital();
car=new Car(200,200);
cat1 =new Cat1(400,150);
cat2 =new Cat2(200,150);
cat3 =new Cat3(90,350);
cat4 =new Cat4(500,350);
cat5 =new Cat5(800,350);
cat9 =new Cat9(800,50);
cat11=new Cat11(900,50);
cat12=new Cat12(1000,350);
	Engine.run(engine);
if(isTouching(car,cat1)){
	life=life-1;
	console.log(life)
}
}
function draw() {



  background(0);
  Engine.update(engine)
 //Home.display();
 //Hospital.display();
 car.display();
 cat1.display();
 cat2.display();
 cat3.display();
 cat4.display();
 cat5.display();
 cat9.display();
 cat11.display();
 cat12.display();

}
function isTouching(object1,object2) {

	if(object1.x-object2.x < object1.width/2+object2.width/2 ||
		object2.x-object1.x < object2.width/2+object1.width/2||
		object1.x-object2.x < object1.width/2+object2.width/2||
		object2.x-object1.x < object2.width/2+object1.width/2){
			return true;
		}
}
