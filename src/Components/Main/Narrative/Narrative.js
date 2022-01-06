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
    return (
        <div className='narrative-container'>
            <div className='narrative'>
                <p>{props.story[props.currentTextID].text}</p>
                {props.story[props.currentTextID].options.map((e, index) => {
                    return (
						<Options
							key={`${props.story[props.currentTextID].id}${props.story[props.currentTextID].options[index].text}`}
                            optionsText={props.story[props.currentTextID].options[index].text}
                            nextID={props.story[props.currentTextID].options[index].nextID}
							text={props.story[props.currentTextID]}
							playerStats={props.playerStats}
							enemyStats={enemyStats}
							setPlayerStats={props.setPlayerStats}
							setEnemyStats={setEnemyStats}
                            setCurrentTextID={props.setCurrentTextID}
						/>
					);
                })}<p>Orc HP: {enemyStats.enemyCurrentHP}/{enemyStats.enemyMaxHP}</p>
            </div>
        </div>
    );
}

export default Narrative;