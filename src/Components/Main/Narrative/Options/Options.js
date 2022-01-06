import React from 'react';

function Options(props) {
    function handleCombat() {
        const { enemyCurrentHP, enemyDamage } = props.enemyStats;
        const { playerCurrentHP, playerItems, playerDamageBonus } = props.playerStats
       props.setEnemyStats({...props.enemyStats, enemyCurrentHP: (enemyCurrentHP-Math.floor(Math.random()*playerItems.weapon.maxDamage)-playerDamageBonus)})
       props.setPlayerStats({...props.playerStats, playerCurrentHP:(playerCurrentHP-enemyDamage)})
    }
    function handleClick(){
        console.log(props.text);
    }
    function consoleLog(){
        console.log(props.optionsText);
    }
    function selectOption(){
        props.setCurrentTextID(props.nextID)
    }
    return (
        <div className='options-container'>
            {/* <button className='option1 option' onClick={handleCombat}>Combat Test</button>
            <button className='option2 option' onClick={handleClick}>Option Test</button>
            <button className='option3 option' onClick={consoleLog}>Console Log</button> */}
            <button className='option' onClick={selectOption}>{props.optionsText}</button>
        </div>
    );
}

export default Options;