function hlightPage() {

	if (!document.getElementsByTagName)  return false;
	if (!document.getElementById) return false;
	var headers =document.getElementsByTagName("header");
	if (headers.length == 0) return false;

	var navs = headers[0].getElementsByTagName("nav");
	if (navs.length == 0) return false;
	
	var links = navs[0].getElementsByTagName("a");
	
		console.log(links);
		for (var i = 0 ; i< links.length; i++ ) {
			var linkurl;

			linkurl = links[i].getAttribute("href");
			console.log(linkurl);
		


			var test = window.location.href;
			console.log(test);
			//var a = typeof(linkurl);
			//console.log(a);
			 //ar test1 =  links[i].getAttribute("href");
			  //console.log(test1);
			//var reg = RegExp(/linkurl[i]/);
			 //var test2 = reg.test (test);
			 //console.log(test2);
			 var test3 = test.search (linkurl[i]);
			 console.log(test3);
			 if (test.indexOf (linkurl[i]) !== -1) {
				 links[ i ].className = "cname";
				 	console.log(links[ i ]);
				 	console.log("ok");	
					var linktext = links[i].lastChild.nodeValue.toLowerCase();
					document.body.setAttribute("id",linktext);
			 }
			 //console.log(test3);
			 //var test3 = test.search (linkurl[i]);
			 //console.log(test3);
			 

			 }
		//if (test.indexOf (linkurl[0])  !=  -1) {
						
				//links[ i ].className = "cname";
					//console.log(links[ i ]);
					//console.log("ok");	
	
		//}

}



addLoadEvent(hlightPage);

//window.onload = function(){
//hlightPage()
//}