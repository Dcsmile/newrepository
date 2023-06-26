function preSlideshow(){
	console.log("ok");
	if ( ! document.getElementsByTagName) return  false;
		if ( ! document.getElementById) return  false;
		console.log("ok");
		if ( !document.getElementById( "into " ))  return  false;
	
var intro = document.getElementById("into ");

var slideshow = document.createElement("div");
slideshow.setAttribute("id","slideshow");
//var frame = document.createElement("img");
//frame.setAttribute("src", "./img/frame.jpg");
//frame.setAttribute("alt", "");
//frame.setAttribute("id", "frame");
//slideshow.appendChild(frame);
var preview = document.createElement("img");
preview.setAttribute("src", "./img/turn1.jpg");
preview.setAttribute("alt", "turn");
preview.setAttribute("id", "preview");
slideshow.appendChild(preview);
//console.log(slideshow);
//console.log(intro);
//var parent = document.getElementsByTagName("article");
//var parent = document.getElementById("acinto");
//console.log(parent);
//parent.appendChild(slideshow);
insertAfter(slideshow, intro);	



		//preview.style.left = "0px";
		//preview.style.top = "0px";
		//preview.style.width = "750px";
		//preview.style.height = "150px";
		
	

var linkers = intro.getElementsByTagName("a");
	console.log(linkers);
//var destion;
//for (var i=0; i < linkers.length; i++) {
	linkers[0].onmouseover = function(){
		moveElement("preview", -150, 0, 5);
		}
		linkers[1].onmouseover = function(){
			moveElement("preview", -300, 0, 5);
			}
			linkers[2].onmouseover = function(){
				moveElement("preview", -450, 0, 5);
				}
				linkers [3].onmouseover = function(){
					moveElement("preview", -600, 0, 5);
					}
					linkers [4].onmouseover = function(){
						moveElement("preview", 0, 0, 5);
						}
		/*destion = linkers[i].getAttribute("href");
	console.log(destion);
linkers [i].onmouseover = function(){

	if (destion.indexOf("index.html") !== -1) {
		moveElement("preview", 0, 0, 5);
		}
			console.log(destion[0]);
		if (destion.indexOf("about.html") !== -1) {
			moveElement("preview", -150, 0, 5);
			}
			if (destion.indexOf("photo.html") !== -1) {
				moveElement("preview", -300, 0, 5);
				}
				if (destion.indexOf("fliv.html") !== -1) {
					moveElement("preview", -450, 0, 5);
					}
					if (destion.indexOf("contact.html") !== -1) {
						moveElement("preview", -600, 0, 5);
						}
}*/
//}
}

addLoadEvent(preSlideshow);