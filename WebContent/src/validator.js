// Walidator zmeiniony. Liczy ilosc klamer i wtedy wywala blad
// undefined dla klamer na samym poczatku[0,1...]

function validator(arr,validator_arr) {

    	 var container = { }; // main object
    	 arrKlamrowe = {};
    	 var len = arr.length
    	 var KlamraStart = /\{/;
    	 var KlamraEnd = /\}/;
    	 var keys = Object.keys(container).length;
    	 var LiczbaKlamerStart = 0;
    	 var LiczbaKlamerEnd = 0;
    	 try { 
    	 for(var i = 0; i <= len ; i++) {
    	     if (KlamraStart.exec(arr[i])){ 
    	    	 LiczbaKlamerStart++;
    	    	 container[i]  = { 'c': undefined }; 
    	     } else if (KlamraEnd.exec(arr[i])){ 
    	    	 	LiczbaKlamerEnd++;
    	             // Last Undefined
    	             var z = Object.keys(container).length;
    	             
    	     	 	 for(var j=z-1; j>-1; j--) {
    	     	 		 var klucz = Object.keys(container)[j]
    	     	 		 var wartosc = container[klucz]['c'];
    	     	 		 if (wartosc==undefined) {
    	     	 			container[klucz] = {'c' : eval(i)};
    	    	            arrKlamrowe[klucz] = { 'c': eval(i) };
    	     	 			 break;
    	     	 		 	}
    	     	 		 }
    	     	}
    	 }

    	for(var j=0; j< Object.keys(container).length; j++) {
    		 var klucz = Object.keys(container)[j]
    		 var wartosc = container[klucz]['c'];
    		 console.log('<Validator>'+ klucz + " " +wartosc+'</div>');
    		 // Jak tego nie ma, to jak wywoluje validator(arr) - z jednym argumentem
    		 // to łapie error - validator arr undefined, i reload leci
    		 	if (arguments.length==2) {
    		 		validator_arr[wartosc] = klucz;}
    	}

    	 } catch (error) {
    			if (error.name === 'TypeError') {
    			location.reload();
    		 	window.alert("BLAD SKLADNI!  e " +  error)}
    	 }
         if (LiczbaKlamerStart!=LiczbaKlamerEnd) {
        	 alert("BLAD SKLADNI! + LKL " +  LiczbaKlamerStart + LiczbaKlamerEnd);
        	 
				//location.reload();
				throw new Error("Something went badly wrong!"); 
         }
    	 return arrKlamrowe;
    }