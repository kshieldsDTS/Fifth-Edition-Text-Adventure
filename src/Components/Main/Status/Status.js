import React from 'react';

function Status(props) {
    return (
		<div className='character-status'>
            <h1>Currently undergoing maintenance!</h1>
			<div className='hp'>
				<p>
					HP: {props.currentHP}/{props.maxHP}
				</p>
				<progress id='health' value={props.currentHP} max={props.maxHP} />
			</div>
			<div className='bonuses'>
				<p>Armor Class: {props.armorClass}</p>
				<p>Attack Bonus: {props.attackBonus}</p>
			</div>
		</div>
	);
}

export default Status;