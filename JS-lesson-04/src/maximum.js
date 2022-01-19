let student1 = { yearOfStudying: 6, facultyName: "IT" };
let student2 = { yearOfStudying: 2, facultyName: "Medic" };
let student3 = { yearOfStudying: 2, facultyName: "Finance" };
let student4 = { yearOfStudying: 1, facultyName: "PM" };
let student5 = { yearOfStudying: 2, facultyName: "Real estate" };
let student6 = { yearOfStudying: 3, facultyName: "Economic" };
let student7 = { yearOfStudying: 6, facultyName: "Management" };
let student8 = { yearOfStudying: 5, facultyName: "Tech" };
let student9 = { yearOfStudying: 6, facultyName: "International relations" };
let student10 = { yearOfStudying: 1, facultyName: "Math" };

let arrayOfStudents = [];
arrayOfStudents.push(student1, student2, student3, student4, student5, student6, student7, student8, student9, student10);

function facultyName(object){
	return object.facultyName;
}

console.log('-------------');

let arrayOfFaculty = arrayOfStudents.map(facultyName).sort();

console.log(arrayOfFaculty);

function sumOfYears(sum, object){
	return sum + object.yearOfStudying;
}

let sumOfYearsTotal = arrayOfStudents.reduce(sumOfYears, 0);

console.log(sumOfYearsTotal);

