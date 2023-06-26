function displayabb(){
	 console.log("ok");
	if(!document.getElementsByTagName  && !document.createElement && !document.createTextNode) return false;
	 var abbrvitions = document.getElementsByTagName("abbr");
	 if(abbrvitions.length <1) return false;
	 console.log(abbrvitions);
	 var defs = new Array();
	 for( var i = 0; i<abbrvitions.length; i++){
		 var current_abbr = abbrvitions[i];
		  console.log(current_abbr.childNodes.length);
		 if(current_abbr.childNodes.length<1) continue;
		 var titles = current_abbr.getAttribute("title");
		 console.log(current_abbr);
		 var key = current_abbr.lastChild.nodeValue;
		  console.log(key);
		  console.log(titles);
		  defs[key] = titles;
	 }
	 var dlistl = document.createElement("dl");
	 for (key in defs) {
		  console.log("ok");
		 var titles = defs[key];
		 var dlistt = document.createElement("dt");
		 var dlistt_text = document.createTextNode(key);
		 console.log(dlistt_text);
		dlistt.appendChild(dlistt_text);
		var dlistd = document.createElement("dd");
		var dlistd_text = document.createTextNode(titles);
		dlistd.appendChild(dlistd_text);
		dlistl.appendChild(dlistt);
		dlistl.appendChild(dlistd);
	 }
	 if (dlistl.childNodes.length<1) return false;
	 var header = document.createElement("h3");
	 var header_text = document.createTextNode("abbrvitions");
	  console.log(header_text);
	 header.appendChild(header_text);
	 var artic = document.getElementById("arti");
	
	 artic.appendChild(header);
	  artic.appendChild(dlistl);
}
addLoadEvent(displayabb);