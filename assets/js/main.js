/*
main.js
Setup phaser game and various states
*/

window.onload = function() {
    var width = 640;
    var height = 960;	
    
    var windowRatio = window.innerWidth / window.innerHeight;
    if(windowRatio < width / height){
        var height = width / windowRatio;
    }

    game = new Phaser.Game(width, height, Phaser.AUTO, "");
    game.state.add('BootStrap', BootStrap);
    game.state.add('Preloader', Preloader);
    game.state.add('SplashScreen', SplashScreen);
    game.state.add('Game', Game);
    game.state.add('EndScreen', EndScreen);
    game.state.start('BootStrap');

}