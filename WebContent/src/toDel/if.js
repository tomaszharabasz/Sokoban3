/*    var NowaFunkcja = function (arrIf,i,j,len2,arrKlamrowe,toDel) {
		var reg = /\((.*)\)/;
    	var opertor = eval(reg.exec(arrIf[0])[1]);
    	window.alert(reg.exec(arrIf[0])[1])
    	for(var p in arrKlamrowe) {
    			var innerObj = arrKlamrowe[p];
    			console.log('<div>'+ p + "  " + innerObj['c'] + '</div>');
    		}
    	switch (opertor) {
    		case true:
  				z = eval(arr[i].match(reg)[2]);
  				len2 = len2 + z;
  				return len2;			
  				break;
    		case false:
    			toDel.push(i);
    			toDel.push(arrKlamrowe[i]['c']-i);
    			break;
    		}

}

// funkcja do gwiazdek
function _checkIfScore(arr,score) {
	//var ifStatement = /^if\s\(.*\)\s\{/;

	this._checkIfScore1 = function(score,arr) {
		 ifChecker(score,arr); 
		}
	 
	 this.ifChecker = function(score,arr) {
		 validator(arr);
		 var ifStatement = /^if\s\((.*)\)\s\{/;
		  if (ifStatement.exec(arr[0])) {
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
		      case /'true'/.test(operator):
		    	  window.alert("'true'")
		    	  		// true
		    	  	arr.splice(klamraDlaZero,1)
			 		arr.splice(0,1);
		      	  break;
		      case /'false'/.test(operator):
		    	  window.alert("false")
		    	  	// false
		    	  		for (var k=0; k<=klamraDlaZero; k++) {
			 			arr.splice(0,1); }
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
	 ifChecker(score,arr); 

}



*/