import React from 'react';

function Inventory(props) {
    // console.log(props.playerItems.weapon);
    return (
        <div className='inventory-container'>
            <h3 className='item-name'>Weapon: {props.playerItems.weapon.name}</h3>
            <p className='item-stat'>Damage: {props.playerItems.weapon.minDamage}-{props.playerItems.weapon.maxDamage} slashing</p>
            <p className='item-description'>{props.playerItems.weapon.description}</p>
            <h3 className='item-name'>Armor: {props.playerItems.armor.name}</h3>
            <p className='item-stat'>Armor Class: {props.playerItems.armor.armor}</p>
            <p className='item-description'>{props.playerItems.armor.description}</p>
            <h3 className='item-name'>Potions: {props.playerItems.consumables.potion.name}</h3>
            <p className='item-stat'>Healing: {props.playerItems.consumables.potion.minHealing}-{props.playerItems.consumables.potion.maxHealing}HP</p>
            <p className='item-description'>{props.playerItems.consumables.potion.description}</p>
            <h3 className='item-name'>Key Items: None</h3>
        </div>
    );
}

export default Inventory;