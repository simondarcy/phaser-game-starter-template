/*
boostrap.js
A simple boostrap script to set everything up
*/
var BootStrap = {
	preload: function(){ 
                game.load.image("loading", "assets/img/loading.png"); 
	},
  	create: function(){
                game.stage.backgroundColor = '#03A9F4';
                game.scale.pageAlignHorizontally = true;
                game.scale.pageAlignVertically = true;
                game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	        game.state.start("Preloader");
	}
}