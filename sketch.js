var back
var start
var welcome

function setup() {
  
  createCanvas(1360, 625);
  start1 = createSprite(100,100,100,100)

}

//

function preload(){

  back = loadImage("back.jpg")
  start = loadImage("start.png")
  welcome = loadImage("welcome.png")

}

//

function draw() {
  
  //background
   background("white");

    image(back,1,1,1360, 625)
    //image(start,500,480,200,100)
    image(welcome,400,100,500,200)

    start.addImage(start1)

    drawSprites();

}



  
    
  


