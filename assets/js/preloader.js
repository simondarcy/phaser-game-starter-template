var Preloader = {
	preload: function(){ 
        game.scale.refresh();


        game.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

        var loadingBar = game.add.sprite(game.width / 2, game.height / 2, "loading");
        loadingBar.anchor.setTo(0.5);
        game.load.setPreloadSprite(loadingBar);

        game.load.onLoadStart.add(this.loadStart, this);
        game.load.onFileComplete.add(this.fileComplete, this);
        game.load.onLoadComplete.add(this.loadComplete, this);
            
        
        //FONTS
        WebFontConfig = {
            active: function() {
                game.time.events.add(Phaser.Timer.SECOND, function() {}, this);
            },
            google: {
                families: ['Fredoka One']
            }
        };
        
        //SpriteSheets
        game.load.spritesheet('button', 'assets/img/button-sprite.png', 300, 85, 2);
            
        //Images
        game.load.image('dude', 'assets/img/dude.png'); 
        game.load.image('ball', 'assets/img/ball.png'); 

        //Audio
        game.load.audio('music', ['assets/audio/music.mp3']);
        game.load.audio('kick', ['assets/audio/kick.mp3']);
            
        //loading text
        textStyle = {
            font: '32px Fredoka One',
            fill: '#ffffff',
            align: 'center',
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        loadingText = game.add.text(game.world.centerX, game.height-100, 'Loading', textStyle);
        loadingText.anchor.set(0.5);
        game.load.start();
    },
    loadStart : function(){
        loadingText.setText("Loading ...");
    },
    loadComplete : function(){
        game.state.start('SplashScreen');
    },
    fileComplete : function(progress, cacheKey, success, totalLoaded, totalFiles){
        loadingText.setText("Loading: " + progress + "%");
    },
    create: function () {
    }
}