function getNewContent(){
	var request = getHTTPobject();
	console.log("ok");
	if (request) {
		console.log("ok");
		request.open("get","emtext.txt",true); //向服务器发出请求目标，第三个参数为是否异步方式
		console.log("ok");
		request.onreadystatechange = function() {  //onreadystatechange是服务器响应XMLHttpRequest时触发事件
			// 可以引入函数，request.onreadystatechange =doSomething； doSomething 是一个函数，不用加括号，原因是引入，而非立即执行。
			console.log("ok");
			if (request.readyState == 4){  //表示服务器向XMLHttpRequest对象传送数据完成，可以访问
			alert("Response Received");
				var pare = document.createElement("p");
				var txt = document.createTextNode(request.responseText);  //发回的数据有responseText和responseXML两个属性保存
				console.log(request.responseText);
				pare.appendChild(txt);
				document.getElementById("new").appendChild(pare);
			}
		}
		request.send(null);  //发出请求
	}else {
		alert(" Sorry");
	}
		alert(" function Done");
}
addLoadEvent(getNewContent);