function insertAfter(newElement, targetElement) {
	console.log("ok");
	console.log(targetElement.parentNode);
	var parent = targetElement.parentNode ;     //取的目标节点的父级节点
	console.log(parent);
	if (parent.lastChild == targetElement) {           //父级节点的最后一个节点检索
		parent.appendChild (newElement);              //加入到父级节点的最后一个子节点
	} else {
		parent.insertBefore (newElement, targetElement.nextSibling);         // 在目标节点的同级一下一个节点之前加入
	}
}