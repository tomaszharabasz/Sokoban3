BasicGame = {
/* Here we've just got some global level vars that persist regardless of State swaps */
score: 0,
/* If the music in your game needs to play through-out a few State swaps, then you could reference it here */
music: null,
/* Your game can check BasicGame.orientated in internal loops to know if it should pause or not */
orientated: false
};

var boot = function(game){
	console.log("%cStarting my awesome game", "color:white; background:red");
};
  
boot.prototype = {
	preload: function(){
          this.game.load.image("loading","assets/loading.png"); 
	},
  	create: function(){
  		//this.game.add.plugin(Phaser.Plugin.Debug);
  		/**this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.setScreenSize();
		**/
		this.game.state.start("Preload");
	}
}