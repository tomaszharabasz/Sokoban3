    var NowaFunkcja = function (arrIf,i,j,len2,arrKlamrowe,toDel) {
		var reg = /\((.*)\)/;
    	var opertor = eval(reg.exec(arrIf[0])[1]);
    	for(var p in arrKlamrowe) {
    			var innerObj = arrKlamrowe[p];
    			console.log('<div>'+ p + "  " + innerObj['c'] + '</div>');
    		}
    	switch (opertor) {
    		case true:
    					//for (var z=i;z<j; z++) {
    					//	if (reg.exec(arr[i])){
    							z = eval(arr[i].match(reg)[2]);
    							//q = arr[i].match(reg)[1];
    							len2 = len2 + z;
    							return len2;			

    			break;
    		case false:
    			toDel.push(i);
    			toDel.push(arrKlamrowe[i]['c']-i);
    			//return toDel;
    			break;
    		}
    	
}

// funkcja do gwiazdek
function _checkIfScore(arr,score) {
	var ifStatement = /(if\s\([a-z]*(.*)\)\s\{)/;

	this._checkIfScore1 = function(score,arr) {
		 ifChecker(score,arr); 
		}
	 
	 this.ifChecker = function(score,arr) {
		 validator(arr);
	
		  if (ifStatement.exec(arr[0])) {
			 var klamraDlaZero = arrKlamrowe[0]['c'];
			 var operator = (ifStatement.exec(arr[0])[2]);
			// TRUE	
			 if (eval(score+""+operator)) {  
			 		arr.splice(klamraDlaZero,1)
			 		arr.splice(0,1);
			 	} 
			// FALSE
			 else {						
			 		for (var k=0; k<=klamraDlaZero; k++) {
			 			arr.splice(0,1);
			 		}
			 	}
			 
		 	}
	 }
	 // Kurwa nie wiem czy to tu ma byc, ale bez tego arr wywala blad
	 // jesli zaczynam ifem. W konsoli napierdala teraz divami
	 // najwyzej do wyjebania
	 ifChecker(score,arr); 

}

