function displayAjax(thetarget){
	console.log("display")
	while (thetarget.hasChildNodes()) {        //检查是否有子节点
		thetarget.removeChild(thetarget.lastChild);
	}

	console.log("display");

		console.log(thetarget);
	var content = document.createElement("img");
	content.setAttribute("src", "./img/loading.gif");
	content.setAttribute("alt","loading");
		console.log("display");
		console.log(content);
	thetarget.appendChild(content);
}
