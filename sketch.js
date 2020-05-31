var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var player;

var form, game;
var player1,player2;
var player =  [];


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();   
  
}


function draw(){
  drawSprites();

  

}
