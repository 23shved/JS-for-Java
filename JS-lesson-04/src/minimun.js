let array = [1, 14, 32, 312, -12, -33, 178, 8788, 0, 21, 9999, 764, 54, -21, -1, 3321, 999, 1, 983, 656, 89, -222, -9999, 423];

console.log(array.sort());
console.log('-------------');
function sortASC(n1, n2){
	return n1-n2;	
}
function sortDESC(n1, n2){
	return (-1)*(n1-n2);	
}
array.sort(sortASC);
console.log('ASC sorting--------->' + array);


array.sort(sortDESC);
console.log('DESC sorting--------->' + array);

function filterPositive(number){
	return number>=0;	
}
function nagativePositive(number){
	return number<0;	
}

let newPositiveArray = array.filter(filterPositive);
console.log('Only positive and zero--------->' + newPositiveArray);

let newNegativeArray = array.filter(nagativePositive);
console.log('Only negative--------->' + newNegativeArray);
