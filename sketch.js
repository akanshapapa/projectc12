var garden,rabbit;
var gardenImg,rabbitImg;
var leafImg,orangeLeafImg,redImageImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
  redImageImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples(){
apple = createSprite(Math.round(random(50,350),40,10,10));
apple.addImage(appleImg);
apple.scale =0.06;
apple.velocityY = +5;
}

function createleafs(){
  leaf = createSprite(Math.round(random(50,350),40,10,10));
  leaf.addImage(leafImg);
  leaf.scale =0.09;
  leaf.velocityY = +5;
  }

  function createorangeLeafs(){
    orangeLeaf = createSprite(Math.round(random(50,350),40,10,10));
    orangeLeaf.addImage(orangeLeafImg);
   orangeLeaf.scale =0.09;
    orangeLeaf.velocityY = +5;
    }

    function createredImages(){
      redImage = createSprite(Math.round(random(50,350),40,10,10));
     redImage.addImage(redImageImg);
     redImage.scale =0.09;
      redImage.velocityY = +5;
    }



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=World.mouseX
  if(frameCount%60===0){
    createApples()
  }

  if(frameCount%50===0){
    createleafs()
  }

  if(frameCount%80===0){
    createorangeLeafs()
  }

  if(frameCount%70===0){
    createredImages()
  }




  drawSprites();
}