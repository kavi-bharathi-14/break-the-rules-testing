class Game {
    constructor() {

    }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        });

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if (gameState === 0) {

            player = new Player();
            
            form = new Form()
            form.display();
        }
    }
    play(){
      if(gameState===1){
          bg1.addImage("image",backgroundImg);
          bg1.velocityX=-5;
        if(bg1.x < 0){
            bg1.x = bg1.width/2;
          }
      }


    }
}