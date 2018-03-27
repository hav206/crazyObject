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

var rainbow = ["blue", "orange", "green", "red", "white"];

for (var i = 0; i < rainbow.length; i++){
	if (rainbow[i] === "blue")
		console.log(rainbow[i]);
		///return rainbow[i];
	//return -1;
}

//console.log("test");
var obj = {food : "Pho", hobby : "FootBall", town: "lynnwood", data : "string"};
console.log(Object.keys(obj)[1]);
console.log(Object.keys(obj));
console.log(Object.values(obj)[1]);

///////////////////////////////////////////////////////////////

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

console.log(Object.keys(inception));
console.log(Object.values(inception));

//////////////////////////////////////////////////////////////


const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1].name);

const inception1 = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

console.log(inception1.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null);



   