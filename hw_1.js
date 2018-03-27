var light_switch = true;
console.log(light_switch);

var email = "hav206@yahoo.com"
console.log(email);

var spaceship = {hull : "round", laserBlaster: "energy", tractorBeam: "beam", warpDrive: "6-engines"};

//var listOfName = {last : "Ha", first : "van"}

function listOfName (lastName, firstName)
{
	this.lastName = lastName;
	this.firstName = firstName;
}

 var myname = new listOfName("van", "Ha");
 console.log(myname);
 var jack = new listOfName("Jack", "Pound");

listOfClassName = [];

listOfClassName.push(myname);
listOfClassName.push(jack);

console.log(listOfClassName);

function listOfName1 (firstname, lastname, location)
{
	this.firstname = firstname;
	this.lastname = lastname;
	this.location = location;
}

var listOfClassName1 = [];

var nameMe = new listOfName1("ha", "van", "lynnwood");
var jackName = new listOfName1("Pound", "Jack", "Seattle");
listOfClassName1.push(nameMe);
listOfClassName1.push(jackName);

console.log(listOfClassName1);



   