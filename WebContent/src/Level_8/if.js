// funkcja do gwiazdek
function _checkIfScore(arr,score) {
	alert("level8_check if score asd")
	var reg = /(\D*)\s(\d.*)/;	
	
	this._checkIfScore1 = function(score,arr) {
		alert (arr)
		 ifChecker(score,arr); 	
		 }
	
	this.ifChecker = function(score,arr) {
			alert("ifChecker")		 
		 var ifStatement = /^if\s\((.*)\)\s\{/;
		  if (ifStatement.exec(arr[0])) {
			  validator(arr);
			 var klamraDlaZero = arrKlamrowe[0]['c'];
			 var operator = (ifStatement.exec(arr[0])[1]);
				alert(operator)
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
		    	  //window.alert("true before " + arr)
		    	  		// true
		    	  	arr.splice(klamraDlaZero,1)
			 		arr.splice(0,1);
				 //window.alert("after true " + arr);
		      	  break;
		      case /false/.test(operator):
		    	  //window.alert("false before " + arr)
		    	  	// false
		    	  		for (var k=0; k<=klamraDlaZero; k++) {
			 			arr.splice(0,1); }
		      	//window.alert("false after " + arr)
		      	  break;
		     default: 
		    	// true
		    	  if (eval(operator)) {
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
		    	}
		 	}
	 }
	 // Kurwa nie wiem czy to tu ma byc, ale bez tego arr wywala blad
	 // jesli zaczynam ifem. W konsoli napierdala teraz divami
	 // najwyzej do wyjebania
			if (!reg.exec(arr[0])){
			 ifChecker(score,arr); 
		}	 
}

function _checkIfScoreZero8(arr, klamroweMap, score) { 
	var ifStatement = /^if\s\((.*)\)\s\{/;
		 var operator = (ifStatement.exec(arr)[1]);
		 alert("kwak" + arr);
		 alert(operator)
		 switch (true) {
		      case /stars/.test(operator):
		    	  	var starsStatement = /^stars(.*)/;
		      		var matcher = (operator.match(starsStatement)[1]);
		      		// true	
		      		if (eval(score+""+matcher)) {
				    	  alert("stars true")
				    	  klamroweMap.boolean = true;
		      			}
		      		// false
		      		else {
		      			alert("stars false")
		      			klamroweMap.boolean = false;
		      			}
		      		break;
		      case /true/.test(operator):
		    	  alert("bolean true")
		    	  klamroweMap.boolean = true;
		    	  break;
		      case /false/.test(operator):
		    	  alert("bolean false")
		    	  klamroweMap.boolean = false;
		      	  break;
		     default: 
		    	// true
		    	  if (eval(operator)) {
		    		  alert("eval true")
		    		  klamroweMap.boolean= true;
	      			} 
		    	  // false
		    	  else {
		    		  alert("eval false")
		    		  klamroweMap.boolean = false;
	      			}
		      	break;
			
		 }
}



