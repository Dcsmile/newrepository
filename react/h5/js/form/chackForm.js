function chackForm(chack2){
	console.log("chack");
	for(var i=0; i<chack2.elements.length; i++){
		var element = chack2.elements[i];
		//if (element.required == "required"){
			if (element.type !== "email" ){
			if (!isFill(element)){
				alert( "please fill in the "+element.name+"field. " );
				return false;
			}
		}
		if (element.type == "email" ){
			if (!isEmail(element)) {
				alert( "The  " +element.name+ "field must be a valid email address.");
				return false;
			}
		}
	}
	return true;
}
//addLoadEvent(chackForm(chack));