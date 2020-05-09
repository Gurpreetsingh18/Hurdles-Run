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
      player.getCount();
      form = new Form();
      form.display();
    }
    player1 = createSprite(120,200,80,80);
    player2 = createSprite(220,200,80,80);
    player3 = createSprite(320,200,80,80);
    player4 = createSprite(420,200,80,80);
   
  }
}
