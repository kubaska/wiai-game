function statystyki()
{
	var ORC = {
		hp: 120,
		power: 25,
		attack: 50,
		strength: 40,
		skill: 70,
		armor: 0
	};
	document.querySelector("#hp").innerHTML=ORC.hp;
	document.querySelector("#power").innerHTML=ORC.power;
	document.querySelector("#attack").innerHTML=ORC.attack;
	document.querySelector("#strength").innerHTML=ORC.strength;
	document.querySelector("#skill").innerHTML=ORC.skill;
	document.querySelector("#armor").innerHTML=ORC.armor;
}
statystyki();