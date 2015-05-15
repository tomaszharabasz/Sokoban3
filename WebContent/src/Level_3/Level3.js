//********************************************************************************
// If wykonywany zanim ruszy cala gra
// w ifie: (2>1) - > true blok jest zostawiany
// w false blok jest usuwany
// unit test: sprawdzic true false


	var up = false;
	var down = false;
	var left = false;
	var right = false;
	var arr = [];
	var arr_step;
	var score = 0;
var Level3 = function (game){
	
	this.actionOnClick = function() {

		if (!empty.alive) {
			 empty.reset(215, 380);}
		

			var c1 = document.getElementById('styled').value;
			arr = c1.split(/[\n\r]/g);
			var len = arr.length;
			var len2 = 0;
			arr_tmp = [];
			var reg = /(\D*)\s(\d.*)/;	
			var ifStatement = /(if\s\(.*\)\s\{)/;
			var KlamraEnd = /\}/;
			var arrIf = [];
			validator(arr,len);
			var toDel = [];
			//Usuwanie blednych elementow skladni
			for (var i=0;i<len; i++) {
				if (ifStatement.exec(arr[i])) {
				for (var j=i;j<len;j++) {
					if (KlamraEnd.exec(arr[j])) {
						break;
					} else {arrIf.push(arr[j]);}
				}
				var funkcja = NowaFunkcja(arrIf,i,j,len2,arrKlamrowe,toDel);
				arrIf = [];
				}
			}
			
			//JESLI TO CO JEST W If (false) usuwa zawartosc i nie wykonuje go
			for(var a = toDel.length-1; a>-1; a=a-2) {
				arr.splice(toDel[a-1],toDel[a]+1)
			}

			for (var i=0;i<len; i++) {
				if (reg.exec(arr[i])){
					z = eval(arr[i].match(reg)[2]);
					q = arr[i].match(reg)[1];
					len2 = len2 + z;
					arr_tmp.push(q + " " + z);	
				} 
			}	
				
				arr = [];
				arr = arr_tmp.slice();
				//delete(arr_tmp);
				// Nowa haxiorka tablica
				
				for (var i=0;i<len2; i++)
					{		if ((arr[i].match(/(\D*)\s(\d.*)/)[2])!=1) {
							iloscPowtorzen = eval(arr[i].match(reg)[2]);//(arr[i].match(/(\D*)\s(\d*)/)[2]);
							nowyWpis = arr[i].match(reg)[1]; //(arr[i].match(/(\D*)\s(\d*)/)[1])
							arr.splice(i, 1);
							for (var j = 0; j < iloscPowtorzen ;  j++) {
								arr.splice(i+j, 0, nowyWpis + " 1");
							}
						}
					
					}
		_searchSwitch();		
	}
	
    this.searchSwitch = function() {
    	_searchSwitch.call(this);
    }

    function _searchSwitch()  {

    	var move = String(arr[0].match(/(\D*)\s(\d*)/)[1]);
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

Level3.prototype.create = function() {
		var o = new Level3();
			 mymap = this.add.tilemap('testmap');
			 mymap.addTilesetImage('grass-tiles-2-small');
			 mymap.addTilesetImage('tree2-final')
			 layerbackground = mymap.createLayer('layer3'); 
			 layersecondary = mymap.createLayer('layer2');
			 
			 player = this.add.sprite(430, 340, 'dude');	
			 player.enableBody = true;
			 this.physics.enable(player, Phaser.Physics.ARCADE);

		      player.animations.add('walk');
		    
			 animatedWalking = false; 
			 layermain = mymap.createLayer('layer1');  
			 mymap.setCollisionByExclusion([0],true, 'layer2');
			 
			 
			 stars = this.add.group();
			 stars.enableBody = true;
			     //  Create a star inside of the 'stars' group
			     //   var star = stars.create(i * 75, 230, 'star');
			    

			        var star = stars.create(380, 260, 'star');
			        var star = stars.create(440, 260, 'star');
			        var star = stars.create(240, 530, 'star');
			// player.body.setSize(30,30,0,0);

		     cursors = this.input.keyboard.createCursorKeys();
		     animatedWalking = false;  
		     
		     button = this.add.button(750, 500, 'button', o.actionOnClick, this, 2, 1, 0);
		     empty = this.add.sprite(215, 380, 'empty');
		     empty.enableBody = true;
		     this.physics.enable(empty, Phaser.Physics.ARCADE);
		     scoreText = this.add.text(16, 16, 'idziesz w kierunku: ', { fontSize: '32px', fill: '#ffff' });

};


Level3.prototype.update = function() {	
	scoreText.text = 'Ruch : ' + arr[0] + "Score " + score;

		//this.physics.arcade.collide(player, empty);	
		//this.physics.arcade.collide(star,player);
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
			        console.log('left: ', left);
			        
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
			     

			     
			    
			    function endAnimate(item)
			    {
			      console.log("END Level3 START: ");
			      console.log(arr);
			      console.log(arr_tmp);
			      player.animations.stop('walk');
			      animatedWalking = false;
			      arr.splice(0,1);
			      	var o1 = new Level3();
					if (arr.length>0){
						o1.searchSwitch(score);
					}

			    }


			    function zbierajgwiazdki (player,star) {

			    	star.kill();
					score = score + 1;
					
					if (score==10) {
						score = 0;
						//window.alert("FINISH");
						this.game.state.start("GameTitle");
						
					}
				}
			    function kolizja() {
				 	empty.kill();
			      	tweenLeft.stop();
			      	//window.alert(i++)
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
				    	    		//window.alert("przd \n" + arr);
							      arr.splice(1,1); 
							      //window.alert("po \n" + arr);
							      }
				    	    
				    	}
			    	if (arr[0]=='Up 1') {
			    		tweenLeft = this.add.tween(player.body).to({ y: '+10' },5, Phaser.Easing.Linear.None, true);
				    	  while (arr[2]=='Up 1') {
				    		  arr.splice(1,1); 
				    		 // window.alert(arr);    
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

Level3.prototype.render = function() {	
	this.game.debug.body(player);
	this.game.debug.body(stars);
	//this.game.debug.body(empty);
    this.game.debug.spriteInfo(player, 100, 32);

	
};

