function moveElement(elementID, final_x,  final_y, interval) {
console.log("ok");
	if(!document.getElementById) return false;
console.log("ok");
	if(!document.getElementById(elementID) ) return false;
	console.log(elementID);
	var elem = document.getElementById(elementID);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	if (!elem.style.left ) {
		elem.style.left = "0px";
	}
	if (!elem.style.top ) {
		elem.style.top = "0px";
	}
	var xpos = parseInt( elem.style.left) ;
	console.log(xpos);
	var ypos =  parseInt( elem.style.top) ;
		console.log(ypos);
	var dist = 0;

console.log(final_x);
console.log(final_y);


	if (xpos == final_x && ypos == final_y) {
	return true;
	}
	if (xpos<final_x){
		dist = Math.ceil((final_x-xpos)/10) ;  //Math.ceil 赋值dist为大于或者等于参数
		xpos = xpos +dist;
	}
		
	if (xpos>final_x){
		dist = Math.ceil((xpos-final_x)/10) ;
		xpos = xpos - dist;
	}
	console.log("ok");
	if (ypos<final_y){
		dist = Math.ceil((final_y-ypos)/10) ; 
		ypos = ypos +dist;
	}
	console.log("ok");
	if (ypos>final_y){
		dist = Math.ceil((ypos-final_x)/10) ;
		ypos = ypos - dist;
	}	

	elem.style.left = xpos + "px";
	console.log(xpos);
	elem.style.top = ypos + "px";
		console.log(ypos);
				console.log(interval);
		
//var repeat = moveElement(elementID, final_x,  final_y, interval) ;
elem.movement = setTimeout(moveElement (elementID, final_x,  final_y, interval) ,interval );
}