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

function addClass (element , value) {
	if (!element.className) {
		element.className = value;
	} else {
		newClassName = element.className;
		newClassName += "" ;
		newClassName += value;
		element.className = newClassName;
	}
}

function className2(){
	console.log("haode");
}

window.onload = function(){
className2()
}

function positionMessage(){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";	
	movement = setTimeout('moveMessage("message",400,100,5000)', 2000);
}
function moveMessage(ement,xment,yment,inter){
	if(!document.getElementById) return false;
	if(!document.getElementById(ement)) return false;
	var elem = document.getElementById(ement);
	var xpos = parseInt( elem.style.left) ;
	var ypos =  parseInt(  elem.style.top) ;
	if (xpos == xment && ypos == yment){
		return true;
	}
	if (xpos<xment){
		xpos++ ;
	}
	if (xpos>xment){
		xpos-- ;
	}
	if (ypos<yment){
		xpos++ ;
	}
	if (ypos>yment){
		xpos-- ;
	}	
	elem.style.left = xpos + "px";
	console.log(xpos)
	elem.style.top = ypos + "px";
		console.log(ypos)
	movement = setTimeout(moveMessage(ement,xment,yment,inter) , inter);
}
addLoadEvent(positionMessage);
