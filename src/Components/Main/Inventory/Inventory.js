import React from 'react';
import { useState } from 'react'

function Inventory(props) {
    function usePotion() {
        const healing = Math.floor(Math.random()*13+8);
        if (props.consumables.healingPotionCount>0) {
            if (props.playerStats.currentHP+healing>props.playerStats.maxHP) {
                props.setPlayerStats({...props.playerStats, currentHP: props.playerStats.maxHP, items: {...props.playerStats.items, consumables: {...props.playerStats.items.consumables, healingPotionCount: props.playerStats.items.consumables.healingPotionCount-1}}})
            } else {
			    props.setPlayerStats({...props.playerStats, currentHP: props.playerStats.currentHP+healing, items: {...props.playerStats.items, consumables: {...props.playerStats.items.consumables, healingPotionCount: props.playerStats.items.consumables.healingPotionCount-1}}})
            }
        }
    }
	const [inventoryToggle, setInventoryToggle] = useState(false)
	function toggleInventory(ev) {
		setInventoryToggle(!inventoryToggle)
	}
    return (
			<div className='inventory-container'>
				{inventoryToggle ? (
					<div className='equipment'>
						<h3 className='item-name'>
							Weapon: {props.items.weapon.nameUpper}
						</h3>
						<p className='item-stat'>
							Damage: {props.items.weapon.minDamage}-
							{props.items.weapon.maxDamage}
						</p>
						<p className='item-description'>{props.items.weapon.description}</p>
						<h3 className='item-name'>Armor: {props.items.armor.nameUpper}</h3>
						<p className='item-stat'>
							Armor Class: {props.items.armor.armorClass}
						</p>
						<p className='item-description'>{props.items.armor.description}</p>
						<h3 className='item-name'>
							{props.consumables.potion.name}({props.healingPotionCount})
						</h3>
						<p className='item-stat'>
							Healing: {props.items.consumables.potion.minHealing}-
							{props.items.consumables.potion.maxHealing}HP
						</p>
						<p className='item-description'>
							{props.items.consumables.potion.description}
						</p>
						<button className='use-potion' onClick={usePotion}>
							Use Potion
						</button>
					</div>
				) : null}
				<div className='inventory-menu' onClick={toggleInventory}>
					{inventoryToggle ? 'Close Inventory ↑' : 'Open Inventory ↓'}
				</div>
			</div>
		);
}

export default Inventory;