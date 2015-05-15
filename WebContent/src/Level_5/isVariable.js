     isVariableReference = function(arr) {
    		window.alert("chuj do dupy");	
 			 
 	//Przypisanie do liczby
    	var ifVariableStatement = /^war\s(\w*)\s?\=\s?(\d.*)/;
		
    	var reg = /^([A-Z]\w*)\s(\D.*)/;
 		for ( var i = arr.length - 1; i > -1; i--) {
 		//window.alert(arr[i]);
			if (ifVariableStatement.exec(arr[i])) {
				arr_tmp.push(arr[i]);
				arr.splice(i,1);
			}
			if (reg.exec(arr[i])) {
				for ( var j = i-1 ; j > -1; j--) {
					if (ifVariableStatement.exec(arr[j])) {
						var regName = reg.exec(arr[i])[2];
						var warName = ifVariableStatement.exec(arr[j])[1];
						if(regName===warName) {
							var add = reg.exec(arr[i])[1] + " " + eval(ifVariableStatement.exec(arr[j])[2]);
							arr.splice(i,1);
							arr.splice(i, 0, add);
							break;
						}
					} 
				}
			}
		}
    };
     
 