import React from 'react';

function Options(props) {
    function handleCombat() {
        const enemy = props.enemyStats
        const player = props.playerStats
        enemy.enemyCurrentHP = enemy.enemyCurrentHP - Math.floor(Math.random()*player.playerItems.weapon.maxDamage+player.playerAttackBonus)
        props.setEnemyStats(enemy)
        console.log(props.enemyStats);
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