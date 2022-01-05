import React from 'react';

function Status(props) {
    return (
        <div className='character-status'>
            <img src='https://www.scabard.com/user/Grimmtales/image/armor_plate_mail.png' alt='Player Icon' className='icon'></img>
            <div className='hp'>
                <p>HP: {props.playerCurrentHP}/{props.playerMaxHP}</p>
            </div>
            <div className='armor'>
                <p>Armor: {props.playerArmorClass}</p>
            </div>
            <div className='atb'>
                <p>Attack Bonus: {props.playerAttackBonus}</p>
            </div>
        </div>
    );
}

export default Status;