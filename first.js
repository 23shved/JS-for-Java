let name = 'John';
let admin = name;
console.log(admin)

let login = "Admin"
let password = "TheMaster"


let correctLogin = "Admin"
let correctPassword = "TheMaster"

if (login == correctLogin) {
	if (password == correctPassword) {
		console.log("Welcome")
	}
	else if (password == "Cancel") {
		console.log("Canceled")
	}
	else {
		console.log("I don't know you")
	}
}
else if (login == "Cancel") {
	console.log("Canceled")
}
else {
	console.log("I don't know you")
}

let login2 = "Admin"
let password2 = "TheMaster"
switch (login2) {

	case "Admin":
		switch (password2) {
			case "TheMaster":
				console.log("Welcome")
				break;
			case "Cancel":
				console.log("Canceled")
				break;
			default:
				console.log("I don't know you")
		}

		break;

	case "Cancel":
		console.log("Canceled")
		break;

	default:
		console.log("I don't know you")
}