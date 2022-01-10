import React from 'react';
import { useState } from 'react'

function CombatModal(props) {
    const [playerTurn, setPlayerTurn] = useState(true)
    const [combatMessage, setCombatMessage ] = useState(`The ${props.enemyStats.nameLower} sizes you up. You get into a combat stance and prepare to strike!`)
    function closeModal() {
        props.setCurrentTextID(props.nextID)
        props.setEnemyStats({})
    }
    function playerAttack() {
            const damage = Math.floor(Math.random()*props.playerStats.items.weapon.maxDamage +props.playerStats.items.weapon.minDamage)+props.playerStats.damageBonus;
            const attackRoll = Math.floor(Math.random()*21+props.playerStats.attackBonus);
			if (attackRoll-props.playerStats.attackBonus === 20) {
				props.setEnemyStats({ ...props.enemyStats, currentHP: props.enemyStats.currentHP - damage*2 });
                setCombatMessage(`You rolled a Natural 20! You make a devastating strike on the ${props.enemyStats.nameLower} with your ${props.playerStats.items.weapon.name} for ${damage*2} damage!`)
            } else if (attackRoll>=props.enemyStats.armorClass) {			
				props.setEnemyStats({...props.enemyStats,currentHP: props.enemyStats.currentHP-damage,});
                setCombatMessage(`You rolled ${attackRoll} to hit! You land a solid strike on the ${props.enemyStats.nameLower} with your ${props.playerStats.items.weapon.name} for ${damage} damage!`);
            } else if (attackRoll<props.enemyStats.armorClass) {
				setCombatMessage(`You rolled ${attackRoll} to hit! You miss the ${props.enemyStats.nameLower}!`)
			}
            setPlayerTurn(false) 
		}		
    function enemyAttack() {
        const damage = Math.floor(Math.random()*props.enemyStats.maxDamage+props.enemyStats.minDamage)+props.enemyStats.damageBonus;
        const attackRoll = Math.floor(Math.random()*21+props.enemyStats.attackBonus)
        console.log(damage);
        console.log(attackRoll);
			if (attackRoll-props.enemyStats.attackBonus === 20) {		
				props.setPlayerStats({ ...props.playerStats,currentHP: props.playerStats.currentHP-damage*2 });
				setCombatMessage(`The ${props.enemyStats.nameLower} rolled a Natural 20. The ${props.enemyStats.nameLower} makes a devastating strike against you! You take ${damage*2} damage!`)
			} else if (attackRoll>=props.playerStats.items.armor.armorClass) {
			    props.setPlayerStats({ ...props.playerStats, currentHP: props.playerStats.currentHP-damage });
                setCombatMessage(`The ${props.enemyStats.nameLower} rolled ${attackRoll} to hit! The ${props.enemyStats.nameLower} makes a solid hit against you! You take ${damage} damage!`)
			} else if (attackRoll<props.playerStats.armorClass) {
				setCombatMessage(`The ${props.enemyStats.nameLower} rolled ${attackRoll} to hit! The ${props.enemyStats.nameLower}'s attack misses.`)
			} 
            setPlayerTurn(true)
		}
    function defeat () {
        props.restartGame()
        props.setCurrentTextID(0)
        props.setEnemyStats({})
    }
    return (
			<div className='combat-modal'>
				<p>{props.enemyStats.nameUpper} Health</p>
                <progress value={props.enemyStats.currentHP} max={props.enemyStats.maxHP}/>
				{props.playerStats.currentHP > 0 ? props.enemyStats.currentHP <= 0 ?
                    <div>
                        <p>{combatMessage}</p> 
                        <p>You have slain the {props.enemyStats.nameLower}!</p>
                    </div> : <p>{combatMessage}</p> :
                    <div>
                        <p>{combatMessage}</p>
                        <p>You succumb to the wounds you have suffered in battle! You have been slain by the {props.enemyStats.nameLower}!</p>
                    </div>}
                {props.playerStats.currentHP > 0 ? props.enemyStats.currentHP <= 0 ?
                    <div>
                        <button onClick={closeModal}>Claim Victory!</button>
                    </div> :
                    playerTurn ? 
                    <div>
                        <button onClick={playerAttack}>Attack the {props.enemyStats.nameLower}!</button>
                    </div> :
                    <div>
                        <button onClick={enemyAttack}>Prepare for the {props.enemyStats.nameLower}'s attack!</button>
                    </div> :
                    <div>
                        <button onClick={defeat}>Restart Game!</button>
                    </div>}
                
                
			</div>
		);
}

export default CombatModal;