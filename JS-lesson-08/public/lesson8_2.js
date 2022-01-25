menu.onclick = function () {
	let elem = document.querySelectorAll("li");
	let visibility = elem[0].style.visibility;

	for (let i = 0; i < elem.length; i++) {
		if (visibility == "hidden") {
			elem[i].style.visibility = "";			
		} else {
			elem[i].style.visibility = "hidden";			
		}
	}
}