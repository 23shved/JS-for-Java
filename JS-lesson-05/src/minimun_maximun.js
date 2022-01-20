 function makeBuffer() {
	let newBuffer = "";

	function myBuffer() {
		return newBuffer;
	}

	myBuffer.add = function(value) {
		if (isNaN(value))
			newBuffer += value + " ";
		else
			newBuffer += value;
	}

	myBuffer.print = myBuffer; 

	myBuffer.clear = function() {
		newBuffer = "";
	}

	return myBuffer;
}
let buffer = makeBuffer();

buffer.add("JavaScript");
buffer.add("Вчити");
buffer.add("Потрібно!");

console.log(buffer.print());
console.log('------------------');

let buffer2 = makeBuffer();

buffer2.add(0);
buffer2.add(1);
buffer2.add(0);
console.log (buffer2.print()); 
console.log('------------------');

let buffer3 = makeBuffer();
buffer3.add("Тест");
buffer3.add("тебе не з'їсть");
console.log (buffer3.print()); 
console.log('------------------');
buffer3.clear ();
console.log (buffer3.print()); 


