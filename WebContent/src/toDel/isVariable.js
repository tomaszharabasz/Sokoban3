     isVariableReference = function(arr) {

    	//Przypisanie do liczby
    	var ifVariableStatement = /^war\s(\w*)\s?\=\s?(\d.*)/;
		
    	var reg = /^([A-Z]\w*)\s(\D.*)/;
		var len = arr.length;
		var arr_var = []
		var arr_moves = []
 		for ( var i = arr.length - 1; i > -1; i--) {
 		//	window.alert(arr);	
 			//window.alert(arr[i]);
			if (ifVariableStatement.exec(arr[i])) {
				key = arr[i].match(ifVariableStatement)[1];
				variable = arr[i].match(ifVariableStatement)[2];
				variables(key, variable);
				arr_tmp.push(arr[i])
				arr.splice(i,1);
			}
			if (reg.exec(arr[i])) {
				for ( var j = i-1 ; j > -1; j--) {
					window.alert("KURWAA" +reg.exec(arr[i]) + "    " +  ifVariableStatement.exec(arr[j]))
					if (ifVariableStatement.exec(arr[j])) {
						//window.alert(reg.exec(arr[i]))
						var regName = reg.exec(arr[i])[2]
						var warName = ifVariableStatement.exec(arr[j])[1]
						if(regName===warName) {
							var add = reg.exec(arr[i])[1] + " " + eval(ifVariableStatement.exec(arr[j])[2]);
							window.alert("AAADDDDD" + add)
							arr.splice(i,1);
							arr.splice(i, 0, add);
							break;
						}
					} 
				}
			}
		}
 		window.alert("after" + arr)
    }
     
     
isVariableReferenceLevel5 = function(arr) {
  		
     	//Konwersja war'ów
     	var ifVariableStatement = /^war\s(\w*)\s?\=\s?(.*)/;
     	var reg = /^([A-Z]\w*)\s(\D.*)/;
 		var len = arr.length;
 		var arr_var = []
 		var arr_moves = []
  		for ( var i = arr.length - 1; i > -1; i--) {
  		
  			if (ifVariableStatement.exec(arr[i])) {
  				var operator = ifVariableStatement.exec(arr[i])
  				returnEvalArr(i,arr,operator)
  				}
  			
  		}


 		// Wpisywanie do kierunku = war a
 		for ( var i = arr.length - 1; i > -1; i--) {

 			if (reg.exec(arr[i])) {
 				for ( var j = i-1 ; j > -1; j--) {
 					if (ifVariableStatement.exec(arr[j])) {
 						var regName = reg.exec(arr[i])[2]
 						var warName = ifVariableStatement.exec(arr[j])[1]
 						if(regName===warName) {
 							var add = reg.exec(arr[i])[1] + " " + ifVariableStatement.exec(arr[j])[2];
 							arr.splice(i,1);
 							arr.splice(i, 0, add);
 							break;
 						}
 					} 
 				}
 			}
 		}	
     }

	function returnEvalArr(index,array,operator) {
     	var ifVariableStatement = /^war\s(\w*)\s?\=\s?(.*)/;
     	var wartosc = operator[2]
     	wartosc = wartosc.replace(/\s+/g,'');
     	var ResultString = "";
     	
     	for(i=0; i<=wartosc.length; i++) {
     		try {
    		//alert(i + ': ' + eval(wartosc.charAt(i)));
     			eval(wartosc.charAt(i))
     		if (i==wartosc.length) {
    			throw "OstatnieSprawdzenie";
    		}
     		} catch (e) {

     			if (/\+/.test(wartosc.charAt(i)) 
     				|| /\-/.test(wartosc.charAt(i))
     				|| /\*/.test(wartosc.charAt(i))
     				|| /\//.test(wartosc.charAt(i)) 
     				|| i==wartosc.length) 
     			{
     				if (ResultString) {
     					var arrIterator=index;
     					for (arrIterator-1; arrIterator>-1;arrIterator--) {
     						if (ifVariableStatement.exec(arr[arrIterator])) {
     	 						var warName = ifVariableStatement.exec(arr[arrIterator])[1]
     	 						var warValue = ifVariableStatement.exec(arr[arrIterator])[2]
     	 							if (ResultString==warName) {
     	 							//window.alert(warName + " = " + warValue + " toChg= " + ResultString + " at " + arr[index]);
     	 							arr[index] = arr[index].replace(ResultString,warValue);
     	 							}
     							
     						}
     					}
     					ResultString = "";
     				}
     			} else {
     				ResultString = ResultString.concat(wartosc.charAt(i))
     				}
     		} 
     		
     	}
     	try {
		window.alert(eval(ifVariableStatement.exec(array[index])[2]))
     	} catch (e) {
     		operator = ifVariableStatement.exec(arr[index]);
     		returnEvalArr(index,array,operator)
     		//window.alert(arr+ " index " + index + " operaor: " + operator)
     	}
  
}