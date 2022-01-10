import React from 'react';

function Options(props) {
    function selectOption() {
		if (props.option.restartGame) {
			props.restartGame()
		} else if (props.option.addPotion) {
			props.setPlayerStats({...props.playerStats, items: {...props.playerStats.items, consumables: {...props.playerStats.items.consumables, healingPotionCount: props.playerStats.items.consumables.healingPotionCount + props.option.addPotion}}})
		} else if (props.option.healing) {
			if (props.playerStats.currentHP+props.option.healing>props.playerStats.maxHP) {
				props.setPlayerStats({...props.playerStats, currentHP: props.playerStats.maxHP})
			} else {
				props.setPlayerStats({...props.playerStats, currentHP: props.playerStats.currentHP+props.option.healing})
			}
			props.setCurrentTextID(props.option.nextID);
		} else if (props.option.enemyName) {
			props.fetchEnemy(props.option.enemyName)
		} else if (props.option.equipWeapon) {
			props.setPlayerStats({ ...props.playerStats, items: { ...props.playerStats.items, weapon: props.option.equipWeapon }})
			props.setCurrentTextID(props.option.nextID);
		} else if (props.option.equipArmor) {
			props.setPlayerStats({ ...props.playerStats, items: { ...props.playerStats.items, armor: props.option.equipArmor }})
			props.setCurrentTextID(props.option.nextID)
		}else {
			props.setCurrentTextID(props.option.nextID)
		}
	}
	return (
		<div className='options-container'>
			<button className='option' onClick={selectOption}>
				{props.optionsText}
			</button>
		</div>
	);
}

export default Options;
