class Form {

  constructor() {
    this.input = createInput(" Please Enter Your Name");
    this.button = createButton('Play');
    this.title = createElement('h2');
  }


  display(){
    this.title.html("Hurdles Run Game");
    this.title.position(displayWidth/2 - 60, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.greeting = createElement('h3');
      this.greeting.html("Hello");
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
    });  
}
  }






