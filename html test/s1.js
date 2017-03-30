
function a() {
	var paras = document.getElementsByTagName('p');
	for (var i = paras.length - 1; i >= 0; i--) {
		var title_text = paras[i].getAttribute("title");
		if (title_text) alert(title_text)
	}
}

/** 设置属性 */
function setAttr() {
	var shopping = document.getElementById("purchases");
	alert(shopping.getAttribute("title"));
	shopping.setAttribute("title", "a list of goods");
	alert(shopping.getAttribute("title"));
}

// 修改p标签的title值
function modifyP() {
	var paras = document.getElementsByTagName("p");
	for (var i=0; i < paras.length; i++) {
		var title_text = paras[i].getAttribute("title")
		if (title_text) {
			paras[i].setAttribute("title", "brand new title text");
			alert(paras[i].getAttribute("title"))
		}
	}
}










