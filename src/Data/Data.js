export const Story = [
	{
		id: 0,
		text: 'You struggle to open your eyes as you awaken; your eyelids feel as heavy as stone. You find yourself in the middle of a field, sitting upright against a lone tree. You find your longsword in its scabbard on your waist, and the weight of your chainmail presses heavily upon your body. You need to get up and find out what is happening.',
		options: [
			{
				text: 'Stand up and scan your surroundings.',
				nextID: 1,
			},
		],
	},
	{
		id: 1,
		text: 'You hear a bellowing roar from behind you, and you turn to find yourself face to face with an orc warrior, covered in blood, wielding a massive axe. He licks his lips angrily as he charges toward you!',
		options: [
			{
				text: 'Fight the orc.',
				nextID: 2,
				enemyName: 'orc',
			},
			{
				text: 'Attempt to run.',
				nextID: 3,
			},
		],
	},
	{
		id: 2,
		text: 'The orc lays dead at your feet, slashed to ribbons by your longsword.',
		options: [
			{
				text: 'Claim Victory!',
				nextID: 2,
				restartGame: true
			},
		],
	},
];