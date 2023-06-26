function addLoadEvent (func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

function positionMessage(){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";	
	//moveElement( "message", 200, 100, 1000 );
	movement = setTimeout(moveElement( "message", 200, 100, 500 ), 50);
}
addLoadEvent(positionMessage);
console.log("ok");



function moveElement(elementID, final_x,  final_y, interval){
console.log("ok");
	if(!document.getElementById) return false;
console.log("ok");
	if(!document.getElementById(elementID) ) return false;
	console.log(elementID);
	var elem = document.getElementById(elementID);
	var xpos = parseInt( elem.style.left) ;
	var ypos =  parseInt(  elem.style.top) ;
	console.log(xpos);
	console.log(ypos);
	console.log(final_x);
	console.log(final_y);
	if (xpos == final_x && ypos == final_y) {
	return true;
	}
	if (xpos<final_x){
		xpos++ ;
	}
		
	if (xpos>final_x){
		xpos-- ;
	}
	console.log("ok");
	if (ypos<final_y){
		xpos++ ;
	}
	console.log("ok");
	if (ypos>final_y){
		xpos-- ;
	}	

elem.style.position = "absolute";
	elem.style.left = xpos + "px";
	console.log(xpos);
	elem.style.top = ypos + "px";
		console.log(ypos);
				console.log(interval);
		
//var repeat = moveElement(elementID, final_x,  final_y, interval) ;
	movement = setTimeout(moveElement (elementID, final_x,  final_y, interval) ,interval );
}