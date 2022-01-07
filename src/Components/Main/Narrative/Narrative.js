import React from 'react';
import Options from './Options/Options'
import { useState } from 'react'
import CombatModal from './CombatModal/CombatModal';

function Narrative(props) {
        const [enemyStats, setEnemyStats] = useState({});
				function playerAttack() {
                    if (Math.floor(Math.random()*20+1)===20) {
                        const damage = Math.floor(Math.random()*props.playerStats.playerItems.weapon.maxDamage+props.playerStats.playerItems.weapon.minDamage)*2+props.playerStats.playerDamageBonus;
                        setEnemyStats({...enemyStats, currentHP: enemyStats.currentHP-damage })
						console.log('playerCrit');
					} else if (Math.floor(Math.random()*20+1+props.playerStats.playerAttackBonus)>=enemyStats.armorClass) {
                        const damage = Math.floor(Math.random()*props.playerStats.playerItems.weapon.maxDamage +props.playerStats.playerItems.weapon.minDamage)+props.playerStats.playerDamageBonus;	
                        setEnemyStats({...enemyStats, currentHP: enemyStats.currentHP-damage })
						console.log('player hit');
					} else if (Math.floor(Math.random()*20+1+props.playerStats.playerAttackBonus)<enemyStats.armorClass) {
							console.log('player miss');
					} else if (Math.floor(Math.random() * 20 + 1) === 1) {
							console.log('player crit miss');
					}					    
				}
				function enemyAttack() {
                    if (Math.floor(Math.random()*20+1) === 20) {
                        const damage = Math.floor(Math.random()*enemyStats.maxDamage+enemyStats.minDamage)*2+enemyStats.damageBonus
                        props.setPlayerStats ({...props.playerStats, playerCurrentHP: props.playerStats.playerCurrentHP-damage })
						console.log('orc crit');
					} else if (Math.floor(Math.random()*20+1+enemyStats.attackBonus)>=props.playerStats.playerArmorClass) {
                        const damage = Math.floor(Math.random()*enemyStats.maxDamage +enemyStats.minDamage)+enemyStats.damageBonus	
                        props.setPlayerStats ({...props.playerStats, playerCurrentHP: props.playerStats.playerCurrentHP-damage })
						console.log('orc hit');
					} else if (Math.floor(Math.random()*20+1+enemyStats.attackBonus)<props.playerStats.playerArmorClass) {
							console.log('orc miss');
					} else if (Math.floor(Math.random() * 20 + 1) === 1) {
							console.log('orc crit miss');
					}					    
				}
				function handleCombat(){
					if (enemyStats.currentHP > 0) {
						playerAttack()
					} else {
						console.log('the enemy is slain');
					}
					if (props.playerStats.playerCurrentHP > 0) {
						enemyAttack()
					} else {
						console.log('you are slain');
					}
					
				}
				function fetchEnemy() {
					const url = 'https://www.dnd5eapi.co/api/monsters/orc';
					fetch(url)
						.then((res) => res.json())
						.then((res) => {
							const damageString = res.actions[0].damage[0].damage_dice;
							const numberOfDice = parseInt(damageString.slice(0, 1));
							const diceDamage = parseInt(damageString.slice(2, 4));
							setEnemyStats({
								nameLower: res.index,
								nameUpper: res.name,
								maxHP: parseInt(res.hit_points),
								currentHP: parseInt(res.hit_points),
								armorClass: parseInt(res.armor_class),
								minDamage: parseInt(numberOfDice),
								maxDamage: parseInt(numberOfDice * diceDamage),
								attackBonus: parseInt(res.actions[0].attack_bonus),
								damageBonus: parseInt(damageString.slice(-1)),
								active: true
							});
						});
				}
    return (
			<div className='narrative-container'>
				<div className='narrative'>
					<p>{enemyStats.nameUpper}</p>
                    <p>HP: {enemyStats.currentHP}/{enemyStats.maxHP}</p>
					<p>Armor Class: {enemyStats.armorClass}</p>
					<p>Attack Bonus: {enemyStats.attackBonus}</p>
					<p>Minimum Damage: {enemyStats.minDamage}</p>
					<p>Maximum Damage: {enemyStats.maxDamage}</p>
					<p>Bonus Damage: {enemyStats.damageBonus}</p>
					<button onClick={fetchEnemy}>Fetch Orc</button>
					<button onClick={handleCombat}>Fight Orc</button>
					<p>{props.story[props.currentTextID].text}</p>
					{enemyStats.active ? <CombatModal /> : null}
					{props.story[props.currentTextID].options.map((e, index) => {
						return (
							<Options
								key={`${props.story[props.currentTextID].id}${
									props.story[props.currentTextID].options[index].text
								}`}
								optionsText={
									props.story[props.currentTextID].options[index].text
								}
								nextID={props.story[props.currentTextID].options[index].nextID}
								text={props.story[props.currentTextID]}
								playerStats={props.playerStats}
								setPlayerStats={props.setPlayerStats}
								setCurrentTextID={props.setCurrentTextID}
							/>
						);
					})}
				</div>
			</div>
		);
}

export default Narrative;