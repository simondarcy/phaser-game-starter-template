/*
game.js
The actual game
*/

var score = 0; //Making this global so it can be used on end screen state
var Game = {
    init: function () {
            //reset game paramters
            this.time = 30;
            this.speed = 300;
            score = 0;
    },
    preload: function () {},
    create: function () {

        //Setup physics
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.checkCollision.down = false;
  
        //Add text to display score
        textStyle = { font: "32px Fredoka One" , fill: '#ffffff', align:'center', boundsAlignH: "center", boundsAlignV: "middle" };
        this.scoreText = game.add.text(18, 10, "Score: " + score, textStyle);

        //Add text to display time
        textStyle = { font: "32px Fredoka One" , fill: '#ffffff', align:'center', boundsAlignH: "center", boundsAlignV: "middle" };
        this.timeText = game.add.text(game.width-150, 10, "Time: " + this.time, textStyle);

         //Create our countdown timer
        this.timer = game.time.create(false);

        //Set a timer event to occur after second
        this.timer.loop(1000, function(){
                //Reduce time      
                this.time--;
                //Update time text
                this.timeText.setText("Time: " + this.time);
                //When time runs out, go to the end screen
                if(this.time == 0){
                    game.state.start('EndScreen');
                }
        }, this);

        //Start the game timer  
        this.timer.start();

        //Prevent music playing over itself
        if(typeof this.backgroundMusic == "undefined"){
                this.backgroundMusic = game.add.audio('music'); //Load music
                this.backgroundMusic.play(); //Play music
        }
        
        //Load kicking sound
        this.kickAudio = game.add.audio('kick');

        //add some instructions to the bottom of the stage
        textStyle = { font: "50px Fredoka One" , fill: '#ffffff', align:'center', boundsAlignH: "center", boundsAlignV: "middle" };
        this.heading = game.add.text(game.world.centerX, game.height-80, "Tap the ball!", textStyle);
        this.heading.anchor.set(0.5);

        //Create a ball
        this.ball = game.add.sprite(game.world.centerX, 0, 'ball');
        //some ball attributes
        this.ball.scale.set(0.2);
        this.ball.anchor.set(0.5);

        //Set up ball physics
        game.physics.enable(this.ball, Phaser.Physics.ARCADE);
        this.ball.body.bounce.set(0.8);
        this.ball.body.velocity.set(0, this.speed);
        this.ball.body.collideWorldBounds = true;
        this.ball.checkWorldBounds = true;
        
        //make ball clickable
        this.ball.inputEnabled = true;

        //Handle ball click event
        this.ball.events.onInputDown.add(function(e){
                //Play kick sound
                this.kickAudio.play();
                //send ball in other direction
                this.ball.body.velocity.x = -1*5*(game.input.x-this.ball.x);
                this.ball.body.velocity.y = -this.speed;
                //update game speed
                this.speed += 25;
                //update score
                score++;
                //Udate score text
                this.scoreText.setText("Score: " + score);
        }, this);

        //When ball goes out of bounds go to the end screen
        this.ball.events.onOutOfBounds.add(function(){
                game.state.start('EndScreen');
        }, this);
        

        //GA event
        gtag('event', 'view', {
                'event_category': 'screen',
                'event_label': 'Game',
        });

    },
    update: function () {}
};