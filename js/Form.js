class Form {

    constructor() {
      this.in = createInput("BOOKName");
      this.name = createInput("Name");
      this.button = createButton('sell');
      this.greeting = createElement('h2');
      this.bu = createButton('proceed to checkout');
      this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.name.hide();
      
    }
  
    display(){
       
      this.in.position(displayWidth/2-80,displayHeight/2-50);
      this.bu.position(displayWidth/2 + 100, displayHeight/2 - 40)
      this.name.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        this.name.hide();
        this.button.hide();
        player.name = this.name.value();
        player.BOOKName = this.in.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
  
    }
  }
  