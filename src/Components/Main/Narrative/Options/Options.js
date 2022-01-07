import React from 'react';

function Options(props) {
    function selectOption() {
		if (props.option.victory) {
			props.setCurrentTextID(0)
		} else if (props.option.enemyName) {
			props.fetchEnemy(props.option.enemyName)
		} else {
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
