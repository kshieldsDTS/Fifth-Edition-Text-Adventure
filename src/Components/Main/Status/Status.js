import React from 'react';

function Status(props) {
    return (
        <div className='character-status'>
            <div className='hp'>
                <p>HP: {props.currentHP}/{props.maxHP}</p>
                <progress id='health' value={props.currentHP} max={props.maxHP}/>
            </div>
            <div className='armor'>
                <p>Armor Class: {props.armorClass}</p>
            </div>
            <div className='atb'>
                <p>Attack Bonus: {props.attackBonus}</p>
            </div>
        </div>
    );
}

export default Status;