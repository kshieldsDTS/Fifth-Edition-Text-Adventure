import { Items } from './Items'
export const Story = [
	{
		id: 0,
		text: 'Welcome to the world of Hydraxus! In this text adventure, you will be playing the role of a soldier in the Grand Army of Syndri. The Grand Army has recently clashed with the enemy from the nation of Calashar. During the battle, you were wounded and knocked unconscious. Your adventure begins as your eyes begin to open... ',
		options: [
			{
				text: 'Begin the adventure!',
				nextID: 3,
			},
		],
	},
	{
		id: 1,
		text: 'Your adventure comes to an end...',
		options: [
			{
				text: 'Accept defeat and restart the game!',
				nextID: 0,
				restartGame: true,
			},
		],
	},
	{
		id: 2,
		text: 'Your long adventure has reached its glorious end! Congratulations!',
		options: [
			{
				text: 'Claim victory and restart the game!',
				nextID: 0,
				restartGame: true,
			},
		],
	},
	{
		id: 3,
		text: 'Your eyes feel as heavy as stones as they open slowly. You wince as you feel a sharp pain from the back of your head. Instinctively reaching to touch the painful area, you feel a warm wetness on your fingers. You bring your hand forth and see that you appear to be bleeding from a wound. Feeling around some more, it appears that someone had tended to your wound, though rather hastily.',
		options: [
			{
				text: 'Stand up and take stock of your situation.',
				nextID: 4,
			},
		],
	},
	{
		id: 4,
		text: 'With great effort, combating your aching muscles and throbbing headache, you manage to get to your feet. You quickly take stock of your equipment: your trusty weapon and your armor are both missing, though the small pouch at your waist still contains the three healing potions you had purchased before the battle. You see a dagger embedded in the ground not far from you.',
		options: [
			{
				text: 'Take the dagger. A small weapon is better than no weapon.',
				equipWeapon: Items[2],
				nextID: 5,
			},
		],
	},
];