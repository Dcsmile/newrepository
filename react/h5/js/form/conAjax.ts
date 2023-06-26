function conAjax() {
	console.log("conA");
if (!document.getElementsByTagName) return false;
//if (!modernizr.input.placeholder) return false;
	console.log("form");
	var  formes = document.getElementsByTagName("form");
	var diver = document.getElementsByTagName("div") [0];
	for (var j= 0 ; j<formes.length; j++){
		var thisforms = formes[j]
		console.log(thisforms);
		thisforms.onsubmit = function(){
			console.log("onsub");
			if (submitFormAjax(thisforms,diver)) return false;
			 return true;
		}
	}
		}


addLoadEvent(conAjax);