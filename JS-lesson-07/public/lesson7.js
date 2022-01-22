function fillData() {

	let contentElement = document.querySelectorAll("li");
	
	for(let i = 0; i < contentElement.length; i++){
		contentElement[i].innerHTML = (i + 1) +" some text";
	}
	let numberOfElements = contentElement.length;
	
	alert('You have ' + numberOfElements +' elemnts.');
	console.log('You have ' + numberOfElements +' elemnts.');
}
