var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas( 1200,600 );

	// fairyVoice.play();

	fairy = createSprite(200, 465);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.2;
	

	star = createSprite(800,30);
	star.addImage(starImg);
	star.scale = 0.05;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  if (keyDown("LEFT_ARROW")) {
    fairy.velocityX=-6;
  }
  if (keyDown("RIGHT_ARROW")) {
    fairy.velocityX=6;
  }
  
  if (keyDown("DOWN_ARROW")) {
    star.velocityY=10;
  }

  if(fairy.isTouching(star)){
      star.velocity=0;
	  text("YOU WIN",500,200);
	  text  

  }

     fairy.debug=true
	 star.debug=true
	 fairy.debug=1

  drawSprites();

}

function keyPressed() {
	//write code here
}
