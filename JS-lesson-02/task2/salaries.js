let employeeSalaries = {
	CEO: 10000,
	Architect: 7500,
	Developer: 5000,
	PM: 3000,
};
console.log(employeeSalaries);

let sum = 0;

for (let salary in employeeSalaries) {
	sum += employeeSalaries[salary];
}
console.log('Загальний фонд оплати праці: ' + sum + ' EUR');
