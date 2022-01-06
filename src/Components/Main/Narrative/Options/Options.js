import React from 'react';

function Options(props) {
    // function handleCombat() {
    //     const { enemyCurrentHP, enemyDamage } = props.enemyStats;
    //     const { playerCurrentHP, playerItems, playerDamageBonus, playerAttackBonus } = props.playerStats
    //    props.setEnemyStats({...props.enemyStats, enemyCurrentHP: (enemyCurrentHP-Math.floor(Math.random()*playerItems.weapon.maxDamage)-playerDamageBonus)})
    //    props.setPlayerStats({...props.playerStats, playerCurrentHP:(playerCurrentHP-enemyDamage)})
    // }
    return (
        <div className='options-container'>
            <button className='option1 option'>Option 1</button>
            <button className='option2 option'>Option 2</button>
            <button className='option3 option'>Option 3</button>
            <button className='option4 option'>Option 4</button>
        </div>
    );
}

export default Options;