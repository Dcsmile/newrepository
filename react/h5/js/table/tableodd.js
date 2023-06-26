function tableodd(){
	if (!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName("table");
	for(var i=0; i<tables.length; i++)  {
var odd = false;
var rows = tables[0].getElementsByTagName("tr");
console.log(rows);
for(var j=0; j<rows.length; j++)  {
	console.log("ok");
if (odd == true) {
	addClass(rows[j],"odd");
	odd = false;
}	else {
	odd = true;
}
}
}
}
addLoadEvent(tableodd);