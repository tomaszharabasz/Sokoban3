var preload = function(game){}

preload.prototype = {
	preload: function(){ 
          var loadingBar = this.add.sprite(160,240,"loading");
          loadingBar.anchor.setTo(0.5,0.5);
          this.load.setPreloadSprite(loadingBar);
		this.game.load.spritesheet("numbers","assets/numbers.png",100,100);
		this.game.load.image("gametitle","assets/gametitle.png");
		this.game.load.image("play","assets/play.png");
		this.game.load.image("higher","assets/higher.png");
		this.game.load.image("lower","assets/lower.png");
		this.game.load.image("gameover","assets/gameover.png");
		// wczytanie assetów
		this.load.spritesheet("tiles","assets/tiles.png",40,40);
		//this.load.spritesheet("dude","assets/dude.png",32,48);
		this.load.spritesheet("dude","assets/metalslug_mummy37x45.png", 37, 45, 17);
		this.load.image("star","assets/star.png",24,22);
		this.load.image("empty","assets/empty.png");
		this.load.spritesheet("button","assets/play_button.png", 32, 32);
		this.load.image('tree2-final', 'assets/tree2-final.png');
		this.load.image('grass-tiles-2-small', 'assets/grass-tiles-2-small.png');
		this.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('testmap', 'assets/test-tilemap.json', null, Phaser.Tilemap.TILED_JSON);  
		this.load.image('test-tileset', 'assets/test-tileset.png');
		
	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}