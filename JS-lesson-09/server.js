let express = require("express");
let bodyParser = require("body-parser");

let server = express();
let jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function(request, response) {
	console.log("Start");
	response.send("<h1>Welcome to Form-Ajax Lesson</h1>");
});

server.get("/userGet", function(request, response) {
	console.log(request.query);
	request.query.Surname += " GET method";
	request.query.Name += " GET method";
	request.query.Age += " GET method";
	request.query.Address += " GET method"; 
	response.send("GET method is completed: "+ JSON.stringify(request.query));
});

server.post("/userPost", function(request, response) {
	console.log(request.body);
	request.body.userSurname += " GET method";
	request.body.userName += " GET method";
	request.body.userAge += " GET method";
	request.body.userAddress += " GET method"; 
	response.send("POST method is completed: "+ JSON.stringify(request.body));
});

server.listen(3000);