import React from 'react';
import { useState } from 'react'

function Options(props) {
    function selectOption() {
		props.setCurrentTextID(props.nextID);
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
