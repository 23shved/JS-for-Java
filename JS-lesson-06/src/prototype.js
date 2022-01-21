function Robot() {
	this.name;
	this.act;
}

Robot.prototype.construct = function Robot(name, act) {
	this.name = name;
	this.act = act;
}

Robot.prototype.construct("Robot", " я просто працюю");

Robot.prototype.work = function work() {
	console.log("Я " + this.name + this.act);
}

function CoffeeRobot() {}
CoffeeRobot.prototype = Object.create(Robot.prototype);
CoffeeRobot.prototype.constructor = CoffeeRobot;

CoffeeRobot.prototype.construct("CoffeeRobot", " я просто варю квау");

function RobotDancer() {}
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;

RobotDancer.prototype.construct("RobotDanser", " я просто танцюю");

function RobotCooker() {}
RobotCooker.prototype = Object.create(Robot.prototype);
RobotCooker.prototype.constructor = RobotCooker;

RobotCooker.prototype.construct("RobotCooker", " я просто готую");




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