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
	movement = setTimeout("moveMessage()", 10);
}
function moveMessage(){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	var xpos = parseInt( elem.style.left) ;
	var ypos =  parseInt(  elem.style.top) ;
	if (xpos == 200 && ypos == 100){
		return true;
	}
	if (xpos<200){
		xpos++ ;
	}
	if (xpos>200){
		xpos-- ;
	}
	if (ypos<100){
		xpos++ ;
	}
	if (ypos>100){
		xpos-- ;
	}	
	elem.style.left = xpos + "px";
	console.log(xpos)
	elem.style.top = ypos + "px";
		console.log(ypos)
	movement = setTimeout("moveMessage()", 5);
}
addLoadEvent(positionMessage);


function isEmail(chack1){
	console.log("Email");
	return (chack1.value.indexOf("@") !== -1&&chack1.value.indexOf(".") !== -1);
}

function isFill(chack){
	console.log("mingzhi");
	//if (chack.value.replace(' ' , '').length == 0) return false;
	if (chack.value.length == 0) {
		return false;
	}else{
		var placeholder = chack.placeholder;
		return (chack.value != placeholder);
	}
	
}