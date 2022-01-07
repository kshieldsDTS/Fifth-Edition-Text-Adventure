import React from 'react';

function Inventory(props) {
    return (
        <div className='inventory-container'>
            <div className='equipment'>
                <h3 className='item-name'>Weapon: {props.items.weapon.nameUpper}</h3>
                <p className='item-stat'>Damage: {props.items.weapon.minDamage}-{props.items.weapon.maxDamage}</p>
                <p className='item-description'>{props.items.weapon.description}</p>
                <h3 className='item-name'>Armor: {props.items.armor.nameUpper}</h3>
                <p className='item-stat'>Armor Class: {props.items.armor.armorClass}</p>
                <p className='item-description'>{props.items.armor.description}</p>
                <h3 className='item-name'>Potions: {props.items.consumables.potion.name}</h3>
                <p className='item-stat'>Healing: {props.items.consumables.potion.minHealing}-{props.items.consumables.potion.maxHealing}HP</p>
                <p className='item-description'>{props.items.consumables.potion.description}</p>
            </div>
            <div className='key-items'>
                <h3 className='item-name'>Key Items: None</h3>
            </div>
        </div>
    );
}

export default Inventory;