import React from 'react';
import { useState } from 'react'

function CombatModal(props) {
    const [playerTurn, setPlayerTurn] = useState(true)
    const [combatMessage, setCombatMessage ] = useState(`The ${props.enemyStats.nameLower} sizes you up. You get into a combat stance and prepare to strike!`)
    function closeModal() {
        props.setEnemyStats({})
    }
    function playerAttack() {
            const damage = Math.floor(Math.random()*props.playerStats.items.weapon.maxDamage +props.playerStats.items.weapon.minDamage)+props.playerStats.damageBonus;
			if (Math.floor(Math.random()*20+1)===20) {
				props.setEnemyStats({ ...props.enemyStats, currentHP: props.enemyStats.currentHP - damage*2 });
				setCombatMessage(`You make a devastating strike on the ${props.enemyStats.nameLower} with your ${props.playerStats.items.weapon.name} for ${damage*2} damage!`)	
			} else if (Math.floor(Math.random()*20+1+props.playerStats.attackBonus)>=props.enemyStats.armorClass) {			
				props.setEnemyStats({...props.enemyStats,currentHP: props.enemyStats.currentHP-damage,});	
				setCombatMessage(`You land a solid strike on the ${props.enemyStats.nameLower} with your ${props.playerStats.items.weapon.name} for ${damage} damage!`);	
			} else if (Math.floor(Math.random()*20+1+props.playerStats.attackBonus)<props.enemyStats.armorClass) {
				setCombatMessage(`You miss the ${props.enemyStats.nameLower} with your attack!`)
			} else if (Math.floor(Math.random()*20+1) === 1) {
                const counterDamage = Math.floor(Math.random()*props.enemyStats.maxDamage+props.enemyStats.minDamage+props.enemyStats.damageBonus);	
			    setCombatMessage(`You make a critical misstep, giving the ${props.enemyStats.nameLower} and opening to counter attack! You take ${counterDamage} damage!`)
                props.setPlayerStats({ ...props.playerStats, currentHP: props.playerStats.currentHP - counterDamage })  
			}
            setPlayerTurn(false)
		}			
    function enemyAttack() {
        const damage = Math.floor(Math.random()*props.enemyStats.maxDamage+props.enemyStats.minDamage)+props.enemyStats.damageBonus;
			if (Math.floor(Math.random()*20+1)===20) {		
				props.setPlayerStats({ ...props.playerStats,currentHP: props.playerStats.currentHP-damage*2 });
				setCombatMessage(`The ${props.enemyStats.nameLower} makes a devastating strike against you! You take ${damage*2} damage!`)
			} else if (Math.floor(Math.random()*20+1+props.enemyStats.attackBonus)>=props.playerStats.armorClass) {
			    props.setPlayerStats({ ...props.playerStats, currentHP: props.playerStats.currentHP - damage });
                setCombatMessage(`The ${props.enemyStats.nameLower} makes a solid hit against you! You take ${damage} damage!`)
			} else if (
				Math.floor(Math.random() * 20 + 1 + props.enemyStats.attackBonus) <props.playerStats.armorClass) {
				setCombatMessage(`The ${props.enemyStats.nameLower} attacks you, but misses. You prepare to attack!`)
			} else if (Math.floor(Math.random() * 20 + 1) === 1) {
                const counterDamage = Math.floor(Math.random()*props.playerStats.items.weapon.maxDamage+props.playerStats.items.weapon.minDamage)+props.playerStats.damageBonus
                props.setEnemyStats({ ...props.enemyStats, currentHP: props.enemyStats.currentHP - counterDamage })
				setCombatMessage(`The ${props.enemyStats.nameLower} fumbles its attack, allowing you to counter attack for ${counterDamage}`)
			}
            setPlayerTurn(true)
		}
    return (
			<div className='combat-modal'>
				<p>{props.enemyStats.nameUpper}</p>
				<p>HP: {props.enemyStats.currentHP}/{props.enemyStats.maxHP}</p>
				<p>Armor Class: {props.enemyStats.armorClass}</p>
				<p>Attack Bonus: {props.enemyStats.attackBonus}</p>
				<p>Minimum Damage: {props.enemyStats.minDamage}</p>
				<p>Maximum Damage: {props.enemyStats.maxDamage}</p>
				<p>Bonus Damage: {props.enemyStats.damageBonus}</p>
				<p>{combatMessage}</p>
                {playerTurn ? 
                    <div>
                        <button onClick={playerAttack}>Attack the {props.enemyStats.nameLower}!</button>
                        <button>Flee!</button>
                    </div> :
                    <button onClick={enemyAttack}>Prepare for the {props.enemyStats.nameLower}'s attack!</button>
                }
			</div>
		);
}

export default CombatModal;