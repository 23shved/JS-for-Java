function Robot() {
	this.name;
	this.action;

	this.construct = function Robot(name, action) {
		this.name = name;
		this.action = action;
	}

	this.construct("Robot", " я просто працюю");

	this.work = function work() {
		console.log("Я " + this.name + this.action);
	}
}

function CoffeeRobot() {
	Robot.call(this);
	this.construct("CoffeeRobot", " я просто варю квау");
}

function RobotDancer() {
	Robot.call(this);
	this.construct("RobotDancer", " я просто танцюю");
}

function RobotCooker() {
	Robot.call(this);
	this.construct("RobotCooker", " я просто готую");
}



let robot = new Robot();
let coffeeRobot = new CoffeeRobot();
let robotDanсer = new RobotDancer();
let robotCooker = new RobotCooker();

robot.work();
coffeeRobot.work();
robotDanсer.work();
robotCooker.work();

console.log('--------------');

let arrayOfRobots = [];
arrayOfRobots[0] = robot;
arrayOfRobots[1] = coffeeRobot;
arrayOfRobots[2] = robotDanсer;
arrayOfRobots[3] = robotCooker;

for (let i = 0; i < arrayOfRobots.length; i++) {
	arrayOfRobots[i].work();
}