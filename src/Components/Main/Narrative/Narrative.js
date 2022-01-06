import React from 'react';
import Options from './Options/Options'
import { useState } from 'react'

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
    function handleTest(){
        console.log(props.story[props.currentTextID].text);
        props.setCurrentTextID(1)
    };
    return (
        <div className='narrative-container'>
            <div className='narrative'>
                <p>{props.story[props.currentTextID].text}</p>
                <button onClick={handleTest}>Test</button>
                <Options
                    playerStats={props.playerStats}
                    enemyStats={enemyStats} 
                    setPlayerStats={props.setPlayerStats}
                    setEnemyStats={setEnemyStats}/>
            </div>
        </div>
    );
}

export default Narrative;