import React from 'react';

function Options(props) {
    function selectOption() {
		console.log(props.option);
		if (props.option.enemyName) {
			props.fetchEnemy(props.option.enemyName)
		}
		props.setCurrentTextID(props.option.nextID)
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
