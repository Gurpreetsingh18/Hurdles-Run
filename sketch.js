var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var player;

var form, game;
var player1,player2,player3,player4;


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();   
  
}


function draw(){
  player1.display();
  player2.display();
  player3.display();
  player4.display();

}
