// funkcja do gwiazdek
function _checkIfScoreLevel4(arr,score) {
	var reg = /(\D*)\s(\d.*)/;	
	 

	this._checkIfScore1Level4 = function(score,arr) {
		 ifChecker(score,arr); 	
		 }
	 
	 this.ifChecker = function(score,arr) {
		 var ifStatement = /^if\s\((.*)\)\s\{/;
		  if (ifStatement.exec(arr[0])) {
			  validator(arr);
			  
			 var klamraDlaZero = arrKlamrowe[0]['c'];
			 var operator = (ifStatement.exec(arr[0])[1]);
				
			 switch (true) {
		      case /stars/.test(operator):
		    	  	var starsStatement = /^stars(.*)/;
		      		var matcher = (operator.match(starsStatement)[1]);
		      		// true	
		      		if (eval(score+""+matcher)) {
				    	  	arr.splice(klamraDlaZero,1)
					 		arr.splice(0,1);
		      			}
		      		// false
		      		else {
			    	  		for (var k=0; k<=klamraDlaZero; k++) {
					 			arr.splice(0,1); 
					 		}
		      			}
		      		break;
		      case /true/.test(operator):
		    	  window.alert("true before " + arr)
		    	  		// true
		    	  	arr.splice(klamraDlaZero,1)
			 		arr.splice(0,1);
				 window.alert("after true " + arr);
		      	  break;
		      case /false/.test(operator):
		    	  window.alert("false before " + arr)
		    	  	// false
		    	  		for (var k=0; k<=klamraDlaZero; k++) {
			 			arr.splice(0,1); }
		      	window.alert("false after " + arr)
		      	  break;
		     default: 
		    	// true
		    	  if (eval(operator)) {
			    	  window.alert(" DEFAULT true before " + arr);
			    	  	arr.splice(klamraDlaZero,1)
				 		arr.splice(0,1);
			    	  window.alert("DEFAULT after true " + arr);
		    	  	} 
		    	  // false
		    	  else {
		    		  window.alert(" DEFAULT false before " + arr);
		    	  		for (var k=0; k<=klamraDlaZero; k++) {
				 			arr.splice(0,1); 
				 		}
		    	  		 window.alert(" DEFAULT false after " + arr)
		    	  }
		      	break;
		    	}
		 	}
	 }
	 // Kurwa nie wiem czy to tu ma byc, ale bez tego arr wywala blad
	 // jesli zaczynam ifem. W konsoli napierdala teraz divami
	 // najwyzej do wyjebania
	 ifChecker(score,arr);
	 window.alert("AAAA" + arr[0])
		if (!reg.exec(arr[0])){
			 ifChecker(score,arr); 
		}
	 
}


