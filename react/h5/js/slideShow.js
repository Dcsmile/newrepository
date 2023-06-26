function slideShow(){
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
		if (!document.getElementById("linklist")) return false;
		var slideshow = document.createElement("div");
		slideshow.setAttribute("id","slideshow");
		var preview = document.createElement("img");
		preview.setAttribute("src","./img/turn.jpg");
		preview.setAttribute("alt","webdesign");
		preview.setAttribute("id","preview");
		slideshow.append(preview);
		var list = document.getElementById("linklist")
		insertAfter(slideshow, list);
console.log(preview);
console.log(slideshow);
		preview.style.position = "absolute";
		preview.style.left = "0px";
		preview.style.top = "0px";
		
		var list = document.getElementById("linklist");
		var links = list.getElementsByTagName("a");
		
		links[ 0 ].onmouseover = function() {
			moveElement("preview", -100, 0, 10);
		}
		links[ 0 ].onmouseout = function() {
			moveElement("preview", 0, 0, 10);
		}

		links[ 1 ].onmouseover = function() {
			moveElement("preview", -200, 0, 10);
		}
		links[ 1 ].onmouseout = function() {
			moveElement("preview", 0, 0, 10);
		}
		
		links[ 2 ].onmouseover = function() {
			moveElement( "preview", -300, 0, 10);
		}	
		links[ 2 ].onmouseout = function() {
			moveElement("preview", 0, 0, 10);
		}
		
}
addLoadEvent(slideShow);