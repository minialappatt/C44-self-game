class Player {
  constructor(){
    this.index = null;
    this.BOOKName= null;
    this.name = null;
    this.rank = null;
    this.in = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
         
         
         BookName:this.BOOKName,
         name:this.name
      
    });
}

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
        
         BOOKName:this.BOOKName,
      
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getCarsAtEnd(){
    database.ref('CarsAtEnd').on("value",(data)=>{
       this.rank=data.val();
    })

    }

    static updateCarsAtEnd(rank){
      database.ref('/').update({
        CarsAtEnd:rank
      })
    }

 
    

 



}
