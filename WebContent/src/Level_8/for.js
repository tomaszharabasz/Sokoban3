// funkcja do gwiazdek
function _checkFor(arr) {
	alert("level8 _checkFor")
	  	try{
		  eval("var f = function() {" +arr[0]+ "}}");
		  f();
		} catch (e) {
			alert(e + " blad w forze")
			 }
		
	this._checkFor1 = function(arr) {
		alert ("Level8 checkFor1")
		forChecker(arr); 	
	}
	
	 this.forChecker = function(arr) {
		 var forStatement = /^for\s?\((.*)\)\s\{/
			 alert ("Level8 forChecker" + arr)
			 var forGeneralParameters={};
		 	 var inSideFor = {};
		 	 var inSideForTable = []; 	 
		 	 
		 	  validator(arr);
			  var klamraDlaZero = arrKlamrowe[0]['c'];
			  var operator = (forStatement.exec(arr[0])[1]);
			  var forParameters = operator.split(/[;]/); 
			  forGeneralParameters[klamraDlaZero] = forParameters;
			
			  for (var k=1; k<klamraDlaZero; k++) {
			  		inSideForTable.push(arr[k]);
			  	}
			  inSideFor[klamraDlaZero] = inSideForTable; 
			  
			  arr.splice(klamraDlaZero,1);
			  arr.splice(0,1);
			  
			  return inSideFor; 
			}
		var test = forChecker(arr); 	
		return test;

}

