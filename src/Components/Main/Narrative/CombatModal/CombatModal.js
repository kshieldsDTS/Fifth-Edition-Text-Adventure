import React from 'react';
import { useState } from 'react'

function CombatModal(props) {
    const [playerTurn, setPlayerTurn] = useState(true)
    function closeModal() {
        props.setEnemyStats({})
    }
    function playerAttack() {
            const damage = Math.floor(Math.random()*props.playerStats.items.weapon.maxDamage +props.playerStats.items.weapon.minDamage)*2+props.playerStats.damageBonus;
			if (Math.floor(Math.random()*20+1)===20) {
				props.setEnemyStats({ ...props.enemyStats, currentHP: props.enemyStats.currentHP - damage*2 });
				console.log('playerCrit');	
			} else if (Math.floor(Math.random()*20+1+props.playerStats.attackBonus)>=props.enemyStats.armorClass) {			
				props.setEnemyStats({...props.enemyStats,currentHP: props.enemyStats.currentHP-damage,});	
				console.log('player hit');
			} else if (Math.floor(Math.random()*20+1+props.playerStats.attackBonus)<props.enemyStats.armorClass) {
				console.log('player miss');
			} else if (Math.floor(Math.random() * 20 + 1) === 1) {	
			    console.log('player crit miss');
			}
		}			
    function enemyAttack() {
        const damage = Math.floor(Math.random()*props.enemyStats.maxDamage+props.enemyStats.minDamage)+props.enemyStats.damageBonus;
			if (Math.floor(Math.random()*20+1)===20) {		
				props.setPlayerStats({ ...props.playerStats,currentHP: props.playerStats.currentHP-damage*2 });
				console.log('orc crit');
			} else if (Math.floor(Math.random()*20+1+props.enemyStats.attackBonus)>=props.playerStats.armorClass) {
			    props.setPlayerStats({ ...props.playerStats, currentHP: props.playerStats.currentHP - damage });
                console.log('orc hit');
			} else if (
				Math.floor(Math.random() * 20 + 1 + props.enemyStats.attackBonus) <props.playerStats.armorClass) {
				console.log('orc miss');
			} else if (Math.floor(Math.random() * 20 + 1) === 1) {
				console.log('orc crit miss');
			}
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
				<button onClick={closeModal}>Close Modal</button>
                {playerTurn ? 
                    <div>
                        <button onClick={playerAttack}>Attack the {props.enemyStats.lowerName}</button>
                        <button>Flee!</button>
                    </div> :
                    <button onClick={enemyAttack}>Prepare for the {props.enemyStats.lowerName}'s attack!</button>
                }
			</div>
		);
}

export default CombatModal;