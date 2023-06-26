function showPic(whichpic){
	if (!document.getElementById("holder")) return true;
	var source = whichpic.getAttribute("href");
	var holder = document.getElementById("holder");
	holder.setAttribute("src",source);
		if (!document.getElementById("pp")) return false;
		if (whichpic.getAttribute("title")){
			var text = whichpic.getAttribute("title");
		} else {
			var text = "";
		}
	var pp = document.getElementById("pp");
	if (pp.firstChild.nodeType ==3){
		pp.firstChild.nodeValue = text;
	}
	return false;
}