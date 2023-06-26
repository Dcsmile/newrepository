function resetph(whichformer){
	console.log("res");
	for( var k= 0; k<whichformer.elements.length; k++ ){
		var ph = whichformer.elements[k];
		if (ph.type == "submit") continue;  //条件符合，就忽略  并继续
	
			console.log(whichformer.elements[k]);
			//var check = ph.placeholder;
			//if (!check) continue;  //条件符合，就忽略 ，忽略非placeholder属性的内容 
			console.log(ph.placeholder);
			//console.log(ph);
			ph.onfocus = function(){
				//if (ph.type == "submit") return false; 
				console.log("ok");
				//var text = this.placeholder;
						//console.log(this.placeholder);
						//console.log(this.value);
				//if(this.value == text) {
					//var mail = whichformer.elements[1].getAttribute("type") ;
					//console.log(mail);
					//if (ph.getAttribute("type") !== mail ){
						
					console.log("ok");
				   ph.removeAttribute("placeholder");
					console.log("ok");
					this.value = " ";
				//}
			} 
			//else {
				//mail = "text";
					//console.log(mail);
				//whichform.elements[1].removeAttribute("placeholder");
				//console.log("ok");
				//this.value = " ";
			//}
				//}
		//ph.onblur = function(){
			//console.log("ok");
				//if(this.placeholder == " "){
					//return this.placeholder;  
					//return this.value;
				//}
			//}
			//ph.onblur();
	}
}