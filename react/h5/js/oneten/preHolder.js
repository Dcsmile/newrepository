function preHolder(){
	if (!document.createElement) return false;
		if (!document.createTextNode) return false;
				if (!document.getElementById) return false;
				if (!document.getElementById("imagegallery")) return false;
				
				var holder = document.createElement("img");
				holder.setAttribute("id","holder");
				holder.setAttribute("src","./img/photo/1a.jpg");
				holder.setAttribute("alt","choose");
				var pp = document.createElement("p");
				pp.setAttribute("id","pp");
				var ptext = document.createTextNode("Choose an image.");
				pp.appendChild(ptext);
				var gallery = document.getElementById("imagegallery");
				var a = gallery.childNodes.length;
				console.log(a);
				insertAfter(pp,gallery);
				insertAfter(holder,pp);	
}
addLoadEvent(preHolder);