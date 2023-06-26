function hightRows(){
	console.log("hello");
	if(!document.getElementsByTagName) return false;
	console.log("hello");
	//var tables = document.getElementsByTagName("table");
	var rowes = document.getElementsByTagName("tr");
	console.log(rowes);
	for(var i = 0; i<rowes.length; i++ ){
		rowes[i].oldClassName = rowes[i].className;
		rowes[i].onmouseover = function(){
			addClass(this,"hightRows");
		}
		rowes[i].onmouseout = function(){
			this.className = this.oldClassName;
		}
	}
}
addLoadEvent(hightRows);