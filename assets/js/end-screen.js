/*
end-screen.js
typical end or game over screen.
*/
var EndScreen = {
    init: function () {},
    preload: function () {},
    create: function () {
        //Call function that handles high score
        this.saveScore();

        //Add text to display score
        textStyle = { font: "50px Fredoka One" , fill: '#ffffff', align:'center', boundsAlignH: "center", boundsAlignV: "middle" };
        this.scoreText = game.add.text(game.world.centerX, game.world.centerY-150, "Your Score\n" + score, textStyle);
        this.scoreText.anchor.set(0.5);

        //Add text to display the overall top score
        textStyle = { font: "50px Fredoka One" , fill: '#ffffff', align:'center', boundsAlignH: "center", boundsAlignV: "middle" };
        this.highScoreText = game.add.text(game.world.centerX, this.scoreText.y+150, "High Score\n" + localStorage.getItem("lsscore") || score, textStyle);
        this.highScoreText.anchor.set(0.5);

        //Add "Tap to play again" instuction text
        textStyle = { font: "32px Fredoka One" , fill: '#FFFF00', align:'center', boundsAlignH: "center", boundsAlignV: "middle" };
        this.instructionText = game.add.text(game.world.centerX, game.height-100, "Tap anywhere to replay!", textStyle);
        this.instructionText.anchor.set(0.5);
        //Add some animation to the above
        this.instructionTextTween = game.add.tween(this.instructionText).to( { alpha: 0 }, 800, Phaser.Easing.Linear.None, true, 0, 800, true);
        this.instructionTextTween.start();

        //Tap anywhere on the screen to replay game
        game.input.onTap.add(function(){
            game.state.start('Game');
        }, this);

        //Ga Event
        gtag('event', 'view', {
                'event_category': 'screen',
                'event_label': 'End Screen',
        });
    },
    saveScore : function(){
        //Function to store the high score in local storage
        if (typeof(Storage) !== "undefined") {
            //check if score is set
            if (localStorage.getItem("lsscore") !== null) {
                //check if current score is greater than
                if( score > parseInt( localStorage.getItem("lsscore") ) ){
                    localStorage.setItem("lsscore", score);
                }
            }
            //no score set, so lets set it
            else{
                try {
                    localStorage.setItem("lsscore", score);
                }catch(e){
                    return false;
                }
            }
        }
        else { // No Local Storage
            return false;
        }//end LS check
    }///end saveScore function
};
