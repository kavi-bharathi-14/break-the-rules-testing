const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var database, gameState = 0;
var form, player;
var tezt,background;
var bg1;
function preLoad() {
    loadFont('assets/inconsolata.otf');
   
}
function setup() {

    engine = Engine.create();
    world = engine.world;
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    bg1=createSprite(0,0,1000,1000);
    if (gameState===0){
        bg="images/city.png";
        backgroundImg=loadImage(bg);
        
         }
       
}

function draw() {
    background(backgroundImg);
    Engine.update(engine);
     console.log(gameState);
    if(gameState===1){
     backgroundImg=loadImage("image/night3.j");
     game.play();
    }
}
function background23(){

    
}