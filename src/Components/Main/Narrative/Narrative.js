import React from 'react';
import Options from './Options/Options'
import { useState } from 'react'
import CombatModal from './CombatModal/CombatModal';

function Narrative(props) {
    const [enemyStats, setEnemyStats] = useState({});
	function fetchEnemy(name) {
		const url = `https://www.dnd5eapi.co/api/monsters/${name}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				const damageString = res.actions[0].damage[0].damage_dice;
				const numberOfDice = parseInt(damageString.slice(0, 1));
				const diceDamage = parseInt(damageString.slice(2, 4));
				setEnemyStats({
					nameLower: res.index,
					nameUpper: res.name,
					maxHP: parseInt(res.hit_points),
					currentHP: parseInt(res.hit_points),
					armorClass: parseInt(res.armor_class),
					minDamage: parseInt(numberOfDice),
					maxDamage: parseInt(numberOfDice * diceDamage),
					attackBonus: parseInt(res.actions[0].attack_bonus),
					damageBonus: parseInt(damageString.slice(-1)),
					active: true
				});
			});
	}
    return (
			<div className='narrative-container'>
				<div className='narrative'>
					{enemyStats.active ? (
						<CombatModal
							nextID={props.story[props.currentTextID].options[0].nextID}
							setCurrentTextID={props.setCurrentTextID}
							enemyStats={enemyStats}
							playerStats={props.playerStats}
							setEnemyStats={setEnemyStats}
							setPlayerStats={props.setPlayerStats}
							restartGame={props.restartGame}
						/>
					) : null}
					{enemyStats.active ? null : (
						<div>
							<p>{props.story[props.currentTextID].text}</p>
							<p>{props.story[props.currentTextID].text2}</p>
							<p>{props.story[props.currentTextID].text3}</p>
							<p>{props.story[props.currentTextID].text4}</p>
						</div>
					)}
					{enemyStats.active
						? null
						: props.story[props.currentTextID].options.map((e, index) => {
								return (
									<Options
										key={`${props.story[props.currentTextID].id}${
											props.story[props.currentTextID].options[index].text
										}`}
										optionsText={
											props.story[props.currentTextID].options[index].text
										}
										option={props.story[props.currentTextID].options[index]}
										text={props.story[props.currentTextID]}
										playerStats={props.playerStats}
										setPlayerStats={props.setPlayerStats}
										setCurrentTextID={props.setCurrentTextID}
										restartGame={props.restartGame}
										fetchEnemy={fetchEnemy}
									/>
								);
						  })}
				</div>
			</div>
		);
}

export default Narrative;