let example = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(example);

function filterRange(array, a, b) {
	let newArray = [];
	for (let i = a; i < b; i++) {
			if (!isNaN(array[i])) {
				newArray.push(array[i]);
			}
		}
		return newArray;
}
console.log(filterRange(example, 3, 8));
