function submitFormAjax(thisformer, dive){
	console.log("sfa");
	//var  forms = document.getElementsByTagName("form");
	//for (var j= 0 ; j<forms.length; j++){
		//var thisformer = forms[j];
		//}
		//var dive = document.getElementsByTagName("div")[0];
		console.log(dive);
	var request = getHTTPobject();
	if (!request){
		return false;
	}
	console.log("ok");
	displayAjax(dive);

	var dataParts =[];
	var elementer;
	for(var  i=0; i<thisformer.elements.length; i++){
	elementer = thisformer.elements[i];
	console.log(elementer);
	if (elementer.type !== 'submit' ){
	dataParts[i] = elementer.name + '=' + encodeURIComponent(elementer.value);
	}
	console.log(dataParts);
}
var data = dataParts.join('&');
console.log(data);


request.open( 'get', thisformer.getAttribute("action"), false );
	console.log(thisformer.getAttribute("action"));
//request,setRequestHeader("content-type", "application/x-www-form-urlencoded");
request.onreadystatechange = function (){
	if (request.readyState == 4){
		if (request.status == 200  || request.status == 0) {
				console.log("ok");
			//var matchs = request.responseText.match(/<article>([\s\s]+)<\/article>/g);
			var html= request.responseText;
			//var article = document.getElementById("cle");
			//console.log(article);
	//var matchs = new Array();
	var htmlnow = html.match(/<article[^>]*>([\s\S]*?)<\/article>/g);
	console.log(htmlnow);
			//if (htmlnow.length >0 ){
				dive.innerHTML = htmlnow;
			//} else {
				//dive.innerHTML = '<p>Opps,there was an error,sorry.</p>' ; }
		//} 
		//else {
			//dive.innerHTML = '<p>' +request.statusText+'</p>' ;
		}
		}
	
}
request.send(data);
return true;
}
//addLoadEvent(submitFormAjax);