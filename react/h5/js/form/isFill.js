function isFill(chack){
	console.log("mingzhi");
	//if (chack.value.replace(' ' , '').length == 0) return false;
	if (chack.value.length == 0) return false;
	var placeholder = chack.placeholder;
	return (chack.value != placeholder);
}