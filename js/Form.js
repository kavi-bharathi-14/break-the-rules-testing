class Form {

    constructor() {
        this.input = createInput();
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h1');
        this.continue=createButton('continue');
        this.Visiblity=255;
       this. tezt=createElement('h2');
       this.next=createButton('next');
       this.greeting2 = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();

    }

    display() {
        // this.title.style('font-family','Inconsolata');
        this.greeting.style('color:#FCF507 ')
        this.title.style('color:#FCF507 ')
        this.greeting2.style('color:#FCF507 ')
        this.title.html("break the rule's")
        this.title.position(displayWidth / 2 - 50, 0);
    
        this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
        this.button.position(displayWidth / 2 + 30, displayHeight / 2);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            
            this.greeting.html("Hello!!, " + player.name,)
            this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
            this.continue.position(displayWidth / 2 , displayHeight / 2)
           
            this.continue.mousePressed(() => {
              this.greeting.hide();
              this.continue.hide();  
              this.greeting2.html("this a game you will like to play and more");
              this.greeting2.position(displayWidth / 2 - 70, displayHeight / 4);
              this.next.position(displayWidth / 2 , displayHeight / 2)
              this.next.mousePressed(()=>{
                gameState=1;
              })
               
              
            })
           
        });
    

    }
}