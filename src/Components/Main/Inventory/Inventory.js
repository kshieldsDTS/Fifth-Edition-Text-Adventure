import React from 'react';

function Inventory(props) {
    // console.log(props.playerItems.weapon);
    return (
        <div className='inventory-container'>
            <h3>Weapon: {props.playerItems.weapon.name}</h3>
            <p>Damage: {props.playerItems.weapon.minDamage}-{props.playerItems.weapon.maxDamage} slashing</p>
            <p>{props.playerItems.weapon.description}</p>
            <h3>Armor: {props.playerItems.armor.name}</h3>
            <p>Armor Class: {props.playerItems.armor.armor}</p>
            <p>{props.playerItems.armor.description}</p>
        </div>
    );
}

export default Inventory;