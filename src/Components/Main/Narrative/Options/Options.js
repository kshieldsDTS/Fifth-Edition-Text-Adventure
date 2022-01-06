import React from 'react';

function Options(props) {
	let enemyMaxHP = 0;
	let enemyCurrentHP = 0;
	let enemyArmorClass = 0;
    let enemyMinDamage = 0
	let enemyMaxDamage = 0;
	let enemyAttackBonus = 0;
	let enemyDamageBonus = 0;
	function handleCombat() {
		console.log(enemyMaxHP, 'maxhp');
		console.log(enemyCurrentHP, 'currentHP');
        console.log(enemyArmorClass, 'AC');
        console.log(enemyMinDamage, 'Min Damage');
        console.log(enemyMaxDamage, 'Max Damage');
        console.log(enemyAttackBonus, 'ATB');
        console.log(enemyDamageBonus, 'Damage Bonus');   
		//     const { enemyCurrentHP, enemyDamage } = props.enemyStats;
		//     const { playerCurrentHP, playerItems, playerDamageBonus } = props.playerStats
		//    props.setEnemyStats({...props.enemyStats, enemyCurrentHP: (enemyCurrentHP-Math.floor(Math.random()*playerItems.weapon.maxDamage)-playerDamageBonus)})
		//    props.setPlayerStats({...props.playerStats, playerCurrentHP:(playerCurrentHP-enemyDamage)})
	}
	function fetchEnemy() {
		const url = 'https://www.dnd5eapi.co/api/monsters/orc';
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				const damageString = res.actions[0].damage[0].damage_dice;
				enemyDamageBonus = parseInt(damageString.slice(-1));
				const numberOfDice = parseInt(damageString.slice(0, 1));
                enemyMinDamage = numberOfDice;
				const diceDamage = parseInt(damageString.slice(2, 4));
				enemyMaxDamage = parseInt(numberOfDice) * parseInt(diceDamage);
				enemyMaxHP = parseInt(res.hit_points);
				enemyCurrentHP = parseInt(res.hit_points);
				enemyArmorClass = parseInt(res.armor_class);
				enemyAttackBonus = parseInt(res.actions[0].attack_bonus);
			});
	}
	function selectOption() {
		props.setCurrentTextID(props.nextID);
	}
	return (
		<div className='options-container'>
			<button onClick={fetchEnemy}>Fetch Orc</button>
			<button onClick={handleCombat}>Fight Orc</button>
			<button className='option' onClick={selectOption}>
				{props.optionsText}
			</button>
		</div>
	);
}

export default Options;
