	/*
	###########################################################
	###########################################################
	ZBIERANIE GWIAZDEK W IFIE
	NARAZIE BEZ WALIDATORA
	*/
	var up = false;
	var down = false;
	var left = false;
	var right = false;
	// zmienna, ktora sprawdza w czasie rzeczywistym czy wywolac _checkIfScore1.
	// true, jesli jest if (stars). False, za kazdym actionOnClick.
	var gwiazdkiIf = false;
	var arr = [];
	var arr_step;
	var score = 0;
var Level4 = function (game){
	
	this.actionOnClick = function() {	
			if (!empty.alive) {
				empty.reset(215, 380);
			}
			gwiazdkiIf = false;
			
			var c1 = document.getElementById('styled').value;
			arr = c1.split(/[\n\r]/g);
			var len = arr.length;
			arr_tmp = [];
			var reg = /(\D*)\s(\d.*)/;	
			var ifStatement = /(if\s\(.*\)\s\{)/;
			var ifScoreStatement = /(if\s\(.*stars.*\)\s\{)/;
			var KlamraEnd = /\}/;
			var arrIf = [];
			// Validator, retutn ArrKlamrowe
			//Usuwanie blednych elementow skladni
			// Szukanie Kroków > 1 (XX)
			// Szukanie if (./stars./)
			// tworzenie tablicy arr_tmp wraz z licznikiem krokow len2
			for (var i=0;i<arr.length; i++) {
				if (reg.exec(arr[i])){
					z = eval(arr[i].match(reg)[2]);
					q = arr[i].match(reg)[1];
					arr.splice(i,1);
					for (var k = 0; k < z ; k ++) {
						arr.splice(i,0, q + " " + 1)
					}
                } else {}	
            }
			validator(arr);
					_checkIfScoreLevel4(arr,score);
					gwiazdkiIf = true;


			_searchSwitch();		
	}
	
    this.searchSwitch = function() {
    	_searchSwitch.call(this);
    }

    this.checkIfScore1Level4 = function(arr,score) {
    	if (gwiazdkiIf== true) {
        	_checkIfScore1Level4.call(this,arr,score)
        	}    	
    }
    
    function _searchSwitch()  {
    	if (arr[0]!=undefined) {
    	_checkIfScoreLevel4(arr,score);
    	}
    	var move = String(arr[0].match(/(\D*)\s(\d*)/)[1]);
    	window.alert(move)
		switch (move)
		 {
		   case 'Up': 
			   		up=true;
			   		break;
		   case 'Down': 
			   		down = true;
		   			break;
		   case 'Left':
		   			left = true;
		   			break;
		   case 'Right':
		   			right = true;
		   			break;

		   default: 
			   	break;	
		 }
	
	}

};

Level4.prototype.create = function() {
		var o = new Level4();
		
			 mymap = this.add.tilemap('testmap');
			 mymap.addTilesetImage('grass-tiles-2-small');
			 mymap.addTilesetImage('tree2-final')
			 layerbackground = mymap.createLayer('layer3'); 
			 layersecondary = mymap.createLayer('layer2');
			 
			 player = this.add.sprite(430, 370, 'dude');	
			 player.enableBody = true;
			 this.physics.enable(player, Phaser.Physics.ARCADE);

		      player.animations.add('walk');
		    
			 animatedWalking = false; 
			 layermain = mymap.createLayer('layer1');  
			 mymap.setCollisionByExclusion([0],true, 'layer2');
			 
			 
			 stars = this.add.group();
			 stars.enableBody = true;
			        var star = stars.create(380, 260, 'star');
			        var star = stars.create(440, 260, 'star');
			        var star = stars.create(240, 530, 'star');

			 animatedWalking = false;  
		     
		     button = this.add.button(750, 500, 'button', o.actionOnClick, this, 2, 1, 0);
		     empty = this.add.sprite(215, 380, 'empty');
		     empty.enableBody = true;
		     this.physics.enable(empty, Phaser.Physics.ARCADE);
		     scoreText = this.add.text(16, 16, 'idziesz w kierunku: ', { fontSize: '32px', fill: '#ffff' });

};


Level4.prototype.update = function() {	
	scoreText.text = 'Ruch : ' + arr[0] + "Score " + score;

		this.physics.arcade.overlap(player, stars, zbierajgwiazdki, null, this);
		this.physics.arcade.overlap(player, empty, kolizja, null, this);

			player.body.velocity.x=0;  // reset player velocity every step
			player.body.velocity.y=0;
			player.body.collideWorldBounds = true;

			    	if (left && animatedWalking === false) {
			    		left = false;
			    		tweenLeft = this.add.tween(player.body).to({ x: '-50' },500, Phaser.Easing.Linear.None, true);
			    		//player.scale.setTo(-1, 1);
			    		animatedWalking = true;
			    		player.animations.play('walk',20,true);
			    		tweenLeft.onComplete.addOnce(endAnimate);
			    		facing = 1;
			    	}     
			      
			    	if(right && animatedWalking === false) {  
			    	  	right = false;
			    	  	tweenLeft = this.add.tween(player.body).to({ x: '+50' },500, Phaser.Easing.Linear.None, true);
			    	  	player.scale.setTo(1, 1);
			    	  	animatedWalking = true;
				        player.animations.play('walk',20,true);
				        tweenLeft.onComplete.addOnce(endAnimate);
				        facing = 2;
			        }
			      
			    	if(up && animatedWalking === false) {
			    	  	player.enableBody = true;
			 		    up = false; 
			    	    tweenLeft = this.add.tween(player.body).to({ y: '-50' },500, Phaser.Easing.Linear.None, true);
			    	    animatedWalking = true;
				        player.animations.play('up',20,true);
				        tweenLeft.onComplete.addOnce(endAnimate);
				        facing = 3;
				    }
			      
			    	if(down && animatedWalking === false ) {
			    		down = false;
			    		tweenLeft = this.add.tween(player.body).to({ y: '+50' },500, Phaser.Easing.Linear.None, true);
			    		animatedWalking = true;
			    		player.animations.play('down',20,true);
			    		tweenLeft.onComplete.addOnce(endAnimate);
			    		facing = 4;
			      }

			    	function endAnimate(item)  {
			    		player.animations.stop('walk');
			    		animatedWalking = false;
			    		arr.splice(0,1);
			      	var o1 = new Level4();
			      		if (arr.length>0) {
			      		window.alert("go to check if score o1" + arr)
			      		o1.checkIfScore1Level4(score,arr);
						window.alert("go to search swtch" + arr)
						o1.searchSwitch(score);

			      		}
			    }


			    	function zbierajgwiazdki (player,star) {
			    		star.kill();
			    		score = score + 1;
					if (score==10) {
						score = 0;
						window.alert("Koniec gry");
						this.game.state.start("GameTitle");	
					}
				}
			    	
			    function kolizja() {
				 	empty.kill();
			      	tweenLeft.stop();
			      	if (arr[0]=='Right 1') {
			    	    	tweenLeft = this.add.tween(player.body).to({ x: '-10' },5, Phaser.Easing.Linear.None, true);
			    	    	//Usuwam kolejne elementy podczas kolizji, jesli sie powtarzaja  
			    	    	while (arr[2]=='Right 1') {
			    	    		arr.splice(1,1); 
						    }
			    	    }
			    	if (arr[0]=='Left 1') {
				    	    tweenLeft = this.add.tween(player.body).to({ x: '+10' },5, Phaser.Easing.Linear.None, true);
				      		//Usuwam kolejne elementy podczas kolizji, jesli sie powtarzaja  
				    	    while (arr[2]=='Left 1') {
							      arr.splice(1,1); 
							      }
				    	    
				    	}
			    	if (arr[0]=='Up 1') {
			    		tweenLeft = this.add.tween(player.body).to({ y: '+10' },5, Phaser.Easing.Linear.None, true);
				    	  while (arr[2]=='Up 1') {
				    		  arr.splice(1,1); 
						      } 
				    	  
				    	}
			    	if (arr[0]=='Down 1') {
				    	    tweenLeft = this.add.tween(player.body).to({ y: '-10' },5, Phaser.Easing.Linear.None, true);
				    	    while (arr[2]=='Down 1') {
							      arr.splice(1,1); 
							}	
				        }

			    	endAnimate.call(this);
		    	    empty.reset(215, 380);
			 }
};

Level4.prototype.render = function() {	
	this.game.debug.body(player);
	this.game.debug.body(stars);
	//this.game.debug.body(empty);
    this.game.debug.spriteInfo(player, 100, 32);

	
};

