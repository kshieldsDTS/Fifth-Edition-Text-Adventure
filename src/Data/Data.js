import { Items } from './Items'
export const Story = [
	{
		id: 0,
		text: 'Welcome to the world of Hydraxus! In this text adventure, you will be playing the role of a soldier in the Grand Army of Syndri. The Grand Army has recently clashed with the enemy from the nation of Calashar. During the battle, you were wounded and knocked unconscious. Your adventure begins as your eyes begin to open... ',
		text2: 'Testing',
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
		text2: 'Yeet',
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
				text: "Take the dagger. A rogue's weapon is better than no weapon.",
				equipWeapon: Items[2],
				nextID: 5,
			},
		],
	},
	{
		id: 5,
		text: 'With a weapon in hand, you scan the surrounding area. You recognize the area as the Plains of Arboreas, a few miles from where your forces had met with the enemy. Getting your bearings, you see a small building to the south with a waterwheel along a river. To the north, the the plains begin to turn into hills, and just beyond the next hill, you can see a plume of smoke rising. You could head toward the river and try to find help, or see what is happening up north.',
		options: [
			{
				text: "Head south. There's bound to be someone you can talk to there.",
				nextID: 6,
			},
			{
				text: 'Head north. Someone might need your help!',
				nextID: 1000000,
			},
		],
	},
	{
		id: 6,
		text: 'You head south toward the riverside house. As you draw near, you see a figure step out from behind a small wall surrounding the home. The figure appears to be a woman, who upon seeing you, hurriedly runs back toward the building.',
		text2: '"Stay away!", she shouts, with a look of terror on her face.',
		options: [
			{
				text: 'Call out to the woman and identify yourself.',
				nextID: 7,
			},
			{
				text: 'Leave her be, and continue along the river.',
				nextID: 1000000,
			},
		],
	},
	{
		id: 7,
		text: 'The young woman stops in her tracks and turns to face you. She scrutinizes you for a moment.',
		text2: `"Y-you don't look like a soldier!" she shouts. She begins to turn away, when she notices the blood on your hand, and the red that stains the shoulders of your tunic.`,
		text3: `"You're hurt!" she exclaims, and her expression changes to that of someone who has just been struck by a realization. "You're the soldier my father found!`,
		options: [
			{
				text: "",
				nextID: 7,
			},
			{
				text: "",
				nextID: 1000000,
			},
		],
	},
];