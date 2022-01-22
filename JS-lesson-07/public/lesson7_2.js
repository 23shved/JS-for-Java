function externalLinks(){
	
		let contentElements = document.querySelectorAll("li>a");

		for (let i = 0; i < contentElements.length; i++) {
		if ((contentElements[i].innerHTML.includes("http://") || contentElements[i].innerHTML.includes("ftp://") || contentElements[i].innerHTML.includes("http://internal.com"))) {
			contentElements[i].classList.add("external-red");
		}
	}
	
	console.log("External links are red now");
}
