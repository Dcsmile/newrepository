function preform(){
if (!document.getElementsByTagName) return false;
//if (!modernizr.input.placeholder) return false;
	console.log("form");
	var  forms = document.getElementsByTagName("form");
	var diver = document.getElementsByTagName("div") [0];
	for (var j= 0 ; j<forms.length; j++){
		var thisform = forms[j]
		console.log(thisform);
		resetph(thisform);
		thisform.onsubmit = function(){
			console.log("onsub");
			if (!chackForm(this)) return false;
			 //return chackForm(this);
			 //return submitFormAjax(ths,diver);
			if (submitFormAjax( thisform, diver)) return false;
			 return true;
		}

	//console.log(forms[0]);
		//resetph(forms[0]);
	/*
	for(var i =0; i<document.forms.length; i++ )  {
		var thisform = document.forms[i];
		console.log(thisform);
			resetph(thisform);
			
		thisform.onsubmit = function(){
			console.log("onsub");
			return chackForm(this);
			//if (chackForm(this)){
			//console.log("onsub");
			//var dive = document.getElementsByTagName("div") [0];
			//if (submitFormAjax(ths,dive)) return false;
			//return true;
		//}
		}*/
	}
		}

	//console.log(check);
	
	//for(var j=0; j<forms.elements.length; j++){
		//var element = forms.element[j];
	//}

	
//}

addLoadEvent(preform);