function navSection(){
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	var articles = document.getElementsByTagName("div");
	if (articles.length == 0) return false;
	var navs = articles[0].getElementsByTagName("nav");
		if (navs.length == 0) return false;
		var linksec = navs[0].getElementsByTagName("a");
		 for( var i =0; i<linksec.length; i++){
			 var sectionId = linksec[i].getAttribute("href").split("#")[1] ;
			 if ( !document.getElementsByTagName(sectionId)) return false;
			 console.log("ok");
			 console.log(sectionId);
			 document.getElementById(sectionId).style.display = "none";
			 linksec[i].linkid = sectionId;
			 linksec[i].onclick = function(){
				 showSection(this.linkid);
				 return false;
			 }
		 }
}
addLoadEvent(navSection);