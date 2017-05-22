var baseArcher = {
    strength: 0,
	dexterity: 0,
	build: 0,
	intelligence: 0,
    
    hp: function () { return this.build + 30 },
	mana: function() { return this.intelligence + 15 },
	attack: function() { return this.strength + 15 },
	dodge: function() { return this.dexterity + 35 }
}

var basePaladin = {
    strength: 0,
	dexterity: 0,
	build: 0,
	intelligence: 0,
	
	hp: function () { return this.build + 40 },
	mana: function() { return this.intelligence + 30 },
	attack: function() { return this.strength + 30 },
	dodge: function() { return this.dexterity + 15 }
}

var baseNecromancer = {
    strength: 0,
	dexterity: 0,
	build: 0,
	intelligence: 0,
    
    hp: function () { return this.build + 25 },
	mana: function() { return this.intelligence + 40 },
	attack: function() { return this.strength + 10 },
	dodge: function() { return this.dexterity + 30 }
}

var baseWarrior = {
    strength: 0,
	dexterity: 0,
	build: 0,
	intelligence: 0,
    
	hp: function () { return this.build + 50 },
	mana: function() { return this.intelligence + 10 },
	attack: function() { return this.strength + 40 },
	dodge: function() { return this.dexterity + 5 }
}