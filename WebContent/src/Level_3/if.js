var NowaFunkcja = function (arrIf,i,j,len2,arrKlamrowe,toDel) {
		var reg = /\((.*)\)/;
    	var opertor = eval(reg.exec(arrIf[0])[1]);
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