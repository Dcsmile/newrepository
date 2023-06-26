function gallery(){
	console.log("ok");
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	console.log(gallery);
	var linkimg = gallery.getElementsByTagName("a");
	console.log(linkimg);
	for (var i=0; i<linkimg.length; i++ ){
		console.log("ok");
		linkimg[i].onclick = function(){
			return showPic(this);
		}
	}	
}
addLoadEvent(gallery);