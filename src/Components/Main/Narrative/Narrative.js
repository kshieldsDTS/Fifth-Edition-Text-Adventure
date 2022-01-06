import React from 'react';
import Options from './Options/Options'
import { useState } from 'react'

function Narrative(props) {
        const [enemyStats, setEnemyStats] = useState({});
				function handleCombat() {
                    if (Math.floor(Math.random() * 20 + 1) === 20) {
						console.log('Critical Hit');
                        const damage = Math.floor(Math.random()*props.playerStats.playerItems.weapon.maxDamage+props.playerStats.playerItems.weapon.minDamage)*2+props.playerStats.playerDamageBonus;
                        console.log(damage, 'crit');
                        setEnemyStats({...enemyStats, currentHP: enemyStats.currentHP-damage })
					} else if (
						Math.floor(Math.random() * 20 + 1 + props.playerStats.playerAttackBonus) >= enemyStats.armorClass) {
						console.log('You hit');
                        const damage = Math.floor(Math.random()*props.playerStats.playerItems.weapon.maxDamage +props.playerStats.playerItems.weapon.minDamage)+props.playerStats.playerDamageBonus;	
                        console.log(damage, 'hit');	
                        setEnemyStats({...enemyStats, currentHP: enemyStats.currentHP-damage })
					} else if (
						Math.floor(Math.random() * 20 + 1 + props.playerStats.playerAttackBonus) < enemyStats.armorClass) {
						console.log('You miss');
					} else if (Math.floor(Math.random() * 20 + 1) === 1) {
						console.log('Critical Miss');
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
								name: res.index,
								maxHP: parseInt(res.hit_points),
								currentHP: parseInt(res.hit_points),
								armorClass: parseInt(res.armor_class),
								minDamage: parseInt(numberOfDice),
								maxDamage: parseInt(numberOfDice * diceDamage),
								AttackBonus: parseInt(res.actions[0].attack_bonus),
								DamageBonus: parseInt(damageString.slice(-1)),
							});
						});
				}
    return (
			<div className='narrative-container'>
				<div className='narrative'>
                    <p>{enemyStats.currentHP}/{enemyStats.maxHP}</p>
					<button onClick={fetchEnemy}>Fetch Orc</button>
					<button onClick={handleCombat}>Fight Orc</button>
					<p>{props.story[props.currentTextID].text}</p>
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