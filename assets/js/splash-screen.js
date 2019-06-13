/*
splash-screen.js
typical splash or intro screen
*/
var SplashScreen = {
    init: function () {},
    preload: function () {},
    create: function () {

        //Add main game heading
        textStyle = { font: "72px Fredoka One" , fill: '#ffffff', align:'center', boundsAlignH: "center", boundsAlignV: "middle" };
        var heading = game.add.text(game.world.centerX, 120, "My New Game", textStyle);
        heading.anchor.set(0.5);

        //Add a game logo
        var logo = game.add.sprite(game.world.centerX, game.world.centerY-100, 'dude');
        logo.anchor.set(0.5);

        //Add some animation to the game logo
        var tween = game.add.tween(logo).to({
                width: logo.width*1.3,
                height:logo.height*1.3
           }, 600, "Linear", true, 0, -1); 
           tween.yoyo(true);

        //Add some instructions    
        textStyle = {
        font: '32px Fredoka One',
        fill: '#ffffff',
        align: 'center',
        boundsAlignH: "center",
        boundsAlignV: "middle",
        };
        var txtString = "A short blurb explaining how to play the game!"
        var introTxt = game.add.text(game.world.centerX, 610, txtString, textStyle); 
        introTxt.anchor.setTo(0.5, 0);
        introTxt.wordWrap = true; //Enable word wrapping
        introTxt.wordWrapWidth = 367; //Wrap long text
    
        //Add a play button using sprite
        var playButton = game.add.sprite(game.world.centerX, game.height-100, 'button');
        playButton.anchor.set(0.5);
        playButton.inputEnabled = true;

        //Change frame on hover
        playButton.events.onInputOver.add(function(){
            playButton.frame = 1;
        });
        //Change back on hover out
        playButton.events.onInputOut.add(function(){
            playButton.frame = 0;
        });
        //Button click event 
        playButton.events.onInputDown.add(function(){
                game.state.start('Game'); //Go to game screen
        });

        //GA event
        gtag('event', 'view', {
                'event_category': 'screen',
                'event_label': 'Splash',
        });

    },
    update: function () {}
};
