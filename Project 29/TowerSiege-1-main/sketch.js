const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
    polygonimg=loadImage("polygon.png");
}

function setup(){
    createCanvas(1200,400);
    engine=Engine.create();
    world=engine.world;
    Engine.run(engine);

    ground=new Ground(width/2,390,1200,15);

    ground2= new Ground(500,320,300,15);

    //level 1
    
    block1= new Box(410,235,50,50);
    block2=new Box(470,235,50,50); 
    block3=new Box(530,235,50,50);
    block4= new Box(590,235,50,50); 
   
    //level 2
  
    block5= new Box(435,190,50,50);
    block6=new Box(495,190,50,50);
    block7= new Box(555,190,50,50);
    
    //level 3
   
    block8= new Box(460,155,50,50);
    block9= new Box(520,155,50,50);
  
    //level 4
   
    block10= new Box(485,120,50,50);

    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot= new SlingShot(polygon,{x:100,y:200});

    

}

function draw(){
    background("white");
    imageMode(CENTER);
    image(polygonimg, polygon.position.x,polygon.position.y,40,40);
    
    slingShot.display();
    ground.display();
    ground2.display();
    
    fill("red");
    block1.display();
    block2.display();
    block3.display();
    block4.display();

    fill("blue");
    block5.display();
    block6.display();
    block7.display();
    
    fill("yellow");
    block8.display();
    block9.display();

    fill("green");
    block10.display();

    slingShot.display();
  
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}
