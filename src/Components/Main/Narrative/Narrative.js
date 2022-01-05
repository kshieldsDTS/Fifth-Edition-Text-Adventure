import React from 'react';
import Options from './Options/Options'
import { useState, useEffect } from 'react'

function Narrative(props) {
    const orc = {
        enemyName: 'Orc',
        enemyArmor: 13,
        enemyMaxHP: 15,
        enemyCurrentHP: 15,
        enemyAttackBonus: 2,
        enemyDamage: 5,
        enemyWeapon: 'axe'
    }
    const [enemyStats, setEnemyStats] = useState(orc)
    useEffect(() => {

    }, [enemyStats, props.playerStats])
    return (
        <div className='narrative-container'>
            <div className='narrative'>
                <p>You are interrupted by a bellowing roar from behind you. You turn to face an {enemyStats.enemyName}, covered in blood and wielding a wicked looking {enemyStats.enemyWeapon}. The {enemyStats.enemyName} is charging at you with its {enemyStats.enemyWeapon} raised high, preparing to strike!</p>
                <Options
                    playerStats={props.playerStats}
                    enemyStats={enemyStats} 
                    setPlayerStats={props.setPlayerStats}
                    setEnemyStats={setEnemyStats}/>
            </div>
            <div>
                <p>{enemyStats.enemyName}</p>
                <p>HP: {enemyStats.enemyCurrentHP}/{enemyStats.enemyMaxHP}</p>
            </div>
        </div>
    );
}

export default Narrative;