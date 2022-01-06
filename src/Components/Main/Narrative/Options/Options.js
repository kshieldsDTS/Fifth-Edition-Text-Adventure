import React from 'react';

function Options(props) {
    function handleCombat() {
        const { enemyCurrentHP, enemyDamage } = props.enemyStats;
        const { playerCurrentHP, playerItems, playerDamageBonus } = props.playerStats
       console.log(enemyCurrentHP);
       console.log(enemyDamage);
       console.log(playerItems.weapon.maxDamage);
       console.log(playerCurrentHP);
       props.setEnemyStats({...props.enemyStats, enemyCurrentHP: (enemyCurrentHP-Math.floor(Math.random()*playerItems.weapon.maxDamage)-playerDamageBonus)})
       props.setPlayerStats({...props.playerStats, playerCurrentHP:(playerCurrentHP-enemyDamage)})
    }
    return (
        <div className='options-container'>
            <button onClick={handleCombat}>Fight!</button>
            <button className='option1 option'>Prepare for Battle!</button>
            <button className='option2 option'>Try to reason with the orc</button>
            <button className='option3 option'>Try to run from the orc</button>
            <button className='option4 option'>Call out for help</button>
        </div>
    );
}

export default Options;