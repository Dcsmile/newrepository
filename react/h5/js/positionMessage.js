function positionMessage(){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";	
	//moveElement( "message", 200, 100, 1000 );
	movement = setTimeout('moveElement( "message", 200, 100, 50 )', 2000);
}
addLoadEvent(positionMessage);
console.log("ok");

