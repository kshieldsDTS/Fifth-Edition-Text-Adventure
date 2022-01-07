import React from 'react';

function Options(props) {
    function selectOption() {
		if (props.option.restartGame) {
			props.restartGame()
		} else if (props.option.enemyName) {
			props.fetchEnemy(props.option.enemyName)
		} else if (props.option.equipWeapon) {
			props.setPlayerStats({ ...props.playerStats, items: {
				...props.playerStats.items, weapon: props.option.equipWeapon}
			})
		} else if (props.option.equipArmor) {
			props.setPlayerStats({ ...props.playerStats, items: {
				...props.playerStats.items, armor: props.option.equipArmor}
			})
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
