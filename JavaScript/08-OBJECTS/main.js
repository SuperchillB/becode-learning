// Using loops with objects
/*
for (let properties in objectName) {
	console.log(properties);
}
*/


// Exercice 1: PNJ (Personnage non-joueur)
	let Character1 = {
		name: "JoJo",
		age: 35,
		items_to_give: ["plate", "car", "computer"]
	}

	for (let properties in Character1) {
		console.log(Character1[properties]); // prints each value of each property
	}

	Character1["giveItem"] = function () {
		let randomItem = Math.floor(Math.random() * this["items_to_give"].length);
		console.log(this["items_to_give"][randomItem]);
	}

	Character1["giveItem"]();

	console.log("________________")


// Exercice 2 : Shop
	let toSell = [
	{
		title: "knife",
		physic: 3,
		magic: 2,
		minLevel: 5, 
		available: true
	},
	{
		title: "axe",
		physic: 6,
		magic: 5,
		minLevel: 10, 
		available: true
	},
	{
		title: "sword",
		physic: 9,
		magic: 7,
		minLevel: 13, 
		available: false
	},
	{
		title: "chainsaw",
		physic: 20,
		magic: 15,
		minLevel: 20, 
		available: false
	}]


	function show () {
		for (let i = 0; i < toSell.length; i++) {
			console.log(toSell[i]["title"]);
		}
	}

	show();

	console.log("________________")

	function available () {
		for (let i = 0; i < toSell.length; i++) {
			if (toSell[i]["available"] === true) {
				console.log(toSell[i]["title"]);
			}
		}
	}

	available();

	console.log("________________")

	function minLevel () {
		for (let i = 0; i < toSell.length; i++) {
			if (toSell[i]["minLevel"] >= 10) {
				console.log(toSell[i]["title"]);
			}
		}
	}

	minLevel();

	console.log("________________")


// Exercice 3 : Personnage
	let mainCharacter3 = {
		name: "James Bond",
		level: 45,
		life: 100,
		weapon: {
			name: "Golden Gun",
			damage: 100
		},
		attack: function () {
			console.log(mainCharacter3["name"] + " attacks with his " + mainCharacter3["weapon"]["name"] + " and causes " + mainCharacter3["weapon"]["damage"] + " points of damage");
		}
	}

	mainCharacter3["attack"]();

	console.log("________________");


// Exercice 4 : Adversaire (Bonus)

function Character(name, level, life, weapon) {
	this.name = name;
	this.level = level;
	this.life = life;
	this.weapon = {
		name: "right foot",
		damage: 5
	};
}

Character.prototype.attack = function (opponent) {
	let attackDescription = this.name + " attacks " + opponent.name + " with his " + this.weapon["name"] + " and causes him " + (this.level * this.weapon["damage"]) + " damage points: " + opponent.name + " now has " + (opponent.life - (this.level * this.weapon["damage"])) + " life points left";
	return attackDescription;
}
Character.prototype.receiveDamage = function () {
	let damageDescription = "";
	return damageDescription;
}

let mainCharacter = new Character("Bruce Li", 5, 100);
let opponentCharacter = new Character("SomeBadGuy", 3, 100);

console.log(mainCharacter.attack(opponentCharacter));

/*
// Exercice 4 : Adversaire (Bonus) with Object.create()
let Character = {
	init: function(name, level, life, weapon) {
		this.name = name;
		this.level = level;
		this.life = life;
		this.weapon = {
			name: weaponName,
			damage: damageName
		};
	},
	attack: function(opponent) {
		let attackDescription = this.name + " attacks " + opponent.name + " with his " + this.weapon["name"] + " and causes him " + (this.level * this.weapon["damage"]) + " damage points: " + opponent.name + " now has " + (opponent.life - (this.level * this.weapon["damage"])) + " life points left";
		return attackDescription;
	}
}

let mainCharacter = Object.create(Character);
mainCharacter.init("Bruce Li", 5, 100, {name: "right foot", damage: 5});

let opponentCharacter = Object.create(Character);
opponentCharacter.init("SomeBadGuy", 3, 100, {name: "missile", damage: 0});

mainCharacter.attack(opponentCharacter);

*/




