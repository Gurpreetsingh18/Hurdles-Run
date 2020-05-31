class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

   async start(){
    if(gameState === 0){
      player = new Player();
      form = new Form()
      form.display();
    }

    player1 = createSprite(100,200,20,20);
     stroke("red");
      strokeWeight(3);
      fill("blue");
    player2 = createSprite(300,200,20,20);
     stroke("red");
    strokeWeight(3);
    fill("blue");
    ellipse(player.x,player.y,60,60)
    player = [player1,player2];
  }
}
