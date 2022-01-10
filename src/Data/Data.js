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
		text: 'You head south toward the riverside house. As you draw near, you see a figure step out from behind a small wall surrounding the home. The figure appears to be a young woman with straw-colored hair, dressed in a simple smock. The woman, upon seeing you, hurriedly runs back toward the building.',
		text2: '"Stay away!", she shouts, with a look of terror on her face.',
		options: [
			{
				text: 'Call out to the woman and identify yourself.',
				nextID: 7,
			},
			{
				text: 'Leave her be, and continue along the river.',
				nextID: 12,
			},
		],
	},
	{
		id: 7,
		text: 'The young woman stops in her tracks and turns to face you. She scrutinizes you for a moment.',
		text2: `"Y-you don't look like a soldier!" she shouts. She begins to turn away, when she notices the blood on your hand, and the red that stains the shoulders of your tunic.`,
		text3: `"You're hurt!" she exclaims, and her expression changes to that of someone who has just been struck by a revelation. "You're the soldier my father found! Come in, come in!" she says, motioning for you to follow her into the house.`,
		options: [
			{
				text: 'Thank her for the kind offer, but decline, and continue walking down the river.',
				nextID: 12,
			},
			{
				text: 'Accept the hospitality and enter the house.',
				nextID: 8,
				healing: 5,
			},
		],
	},
	{
		id: 8,
		text: 'You follow the young woman into the house. It is a small residence, with two small beds in the far corner, and a small fireplace on the far wall. The woman motions for you to sit in one of the simple wooden chairs that flanks the fireplace. You oblige her and make your way to one of the chairs.',
		text2:
			'As you take a seat, the young woman unwraps the bandage around your head. You hear her give a slight gasp as the last wrap falls off. She quickly composes herself, and begins pulling herbs and salves from assorted jars that are scattered about the many shelves that line the walls. She mixes up the ingredients into a sickly green paste, and applies it to your wound. While it burns initially, a cooling wave of relief washes over the wound.',
		text3: `"Did you happen to see my father?" she asks, worry washing over her face once more. "He's been gone for several hours, and I'm starting to get worried."`,
		options: [
			{
				text: 'Say that you have not seen her father.',
				nextID: 9,
			},
		],
	},
	{
		id: 9,
		text: `As you begin to explain your circumstances, a the door swings open wide. A stocky man, with similar facial features and hair color as the young woman, barges into the house. He clutches his stomach, which appears to be bleeding profusely.`,
		text2: `"You're here? Thank the gods!" he exclaims. "A goblin is chasing me! Help!"`,
		options: [
			{
				text: 'Prepare for battle!',
				enemyName: 'goblin',
				nextID: 10,
			},
		],
	},
	{
		id: 10,
		text: `The goblin lays dead on the ground. You gasp heavily from the exertion, and slump down on the ground, trying to catch your breath. The young woman uses some of the paste she had applied to your head wound to her father's wound. The man sits up against a wall, and speaks once he catches his breath.`,
		text2: `"Guess it was a good thing I tried to patch you up when I found you," he says, wincing from the pain in his stomach, as he shuffles over toward you. "Bartholomew Daleborn, at your service. No offense friend, but you still look pretty rough, and that tussle with the goblin didn't help. Let Delilah here patch you up some more and you should get some rest."`,
		options: [
			{
				text: 'Accept the offer and stay the night.',
				healing: 10,
				nextID: 11,
			},
			{
				text: `Decline the offer and continue along the river.`,
				nextID: 12,
			},
		],
	},
	{
		id: 11,
		text: `You spend the night at the riverside home. It is an uneasy rest, as you try to stay awake to keep watch against any further goblin incursions. However, your recent ordeal has left you exhausted, and you find sleep irrestistable.`,
		text2: `You awaken the following morning to the smell of food. You open your eyes to find that Delilah has made soup for the three of you. After a brief meal, with little conversation, you gather yourself and prepare to leave. As you do, Bartholomew asks that you wait a moment. He rummages through a chest and produces a simple studded leather armor chestpiece and hands it to you.`,
		text3: `"You'll probably need this more than I do, and you'll make better use of it. Take it, and take care!" he says. The armor does not fit particularly well, but it will help keep you from harm.`,
		options: [
			{
				text: 'Thank Bartholomew and Delilah for their help, then continue along the river.',
				equipArmor: Items[3],
				nextID: 12,
			},
		],
	},
	{
		id: 12,
		text: `You continue down the river, pondering what had occurred prior to waking up in the field. Your thoughts are cut short, however, as you soon hear the sounds of metal weapons clashing. As you move closer to the source of the sounds, you eventually see two combatants. One, a soldier from Calashar, and the other, a vicious orc warrior.`,
		text2: `You watch the conflict for a few moments. The orc, clearly much stronger and more aggressive than the soldier, presses the offensive. The soldier is kept on his heels, and before long, he lets his guard down. The orc takes advantage and slashes him across the chest with its jagged axe. The soldier collapses on the ground, and the orc begins to reach down to inspect his kill, but turns at the last moment and sees you nearby. The orc charges you, axe raised high!`,
		options: [
			{
				text: 'Prepare to battle the orc!',
				nextID: 13,
				enemyName: 'orc',
			},
		],
	},
	{
		id: 13,
		text: `The orc warrior attempts to block your final attack with its axe, but the weapon's poor quality and shoddy worksmanship are no match for your strength. The axe shatters and your weapon buries itself in its chest. It flails pitifully for a few moments before succumbing to its wounds.`,
		text2: `The orc's leather armor and weapon are ruined and unusuable. Inspecting the soldier's corpse, he has the look of a farmhand, barely old enough to shave his own facial hair. His eyes are locked open in terror, with the image of the hungry orc burned into them forever. His armor is ruined beyond repair by the orc's savage attacks, but his short sword appears well made, and may come in handy.`,
		options: [
			{
				text: `Take the sword. He doesn't need it anymore.`,
				nextID: 14,
				equipWeapon: Items[4],
			},
			{
				text: `Respect the soldier's body and leave the sword behind.`,
				nextID: 14,
			},
		],
	},
	{
		id: 14,
		text: `You continue further down the river. As you walk along, you eventually see a large crystalline obelisk to your east. You recall that the Grand Army would use the obelisk, known as the Sword of Arboreas, as a landmark for to regroup, should there be a need for it. That would be the best place to start to figure out where to regroup with the army.`,
		text2: `You turn away from the river and begin heading toward the obelisk. As the base of the obelisk comes into view, you hear a gutteral growling from behind you. You whirl to face the sound and find yourself facing off with a massive wolf. It stands nearly four feet tall at the shoulder, and its gray matted fur is bristling. It howls before running toward you, teeth bared.`,
		options: [
			{
				text: `Defend yourself against the wolf!`,
				nextID: 15,
				enemyName: 'wolf',
			},
		],
	},
	{
		id: 15,
		text: `The wolf snarls as you attack it again and again. Its primal fury is quickly overcome by your attacks, and it gives a low whine as it eventually falls. You catch your breath and continue onward to the Sword of Arboreas.`,
		text2: `Your long trek ends as you reach the base of the obelisk. While the Grand Army is no longer here, you can easily track it from the footprints and mud left in their wake. However, the sun is beginning to set, and it would be prudent to rest. You see a crate left behind by the army, and inside you find a pair of healing potions.`,
		options: [
			{
				text: `Take the potions and rest.`,
				nextID: 16,
				addPotion: 2,
			},
		],
	},
	{
		id: 16,
		text: `You climb up onto a ledge to provide some measure of protection from wandering creatures before resting. Sleep does not come easily, as you keep a watchful eye and listen for any possible threats. However, you do eventually sleep as the miles of walking catch up to you.`,
		text2: `You awaken as the sun rises. Its blinding light and heat rousing you from your slumber. You drop from the ledge and stretch a bit before following the army's tracks.`,
		options: [
			{
				text: `Follow the tracks.`,
				nextID: 17,
			},
		],
	},
	{
		id: 16,
		text: `You climb up onto a ledge to provide some measure of protection from wandering creatures before resting. Sleep does not come easily, as you keep a watchful eye and listen for any possible threats. However, you do eventually sleep as the miles of walking catch up to you.`,
		text2: `You awaken as the sun rises. Its blinding light and heat rousing you from your slumber. You drop from the ledge and stretch a bit before following the army's tracks.`,
		options: [
			{
				text: `Follow the tracks.`,
				nextID: 17,
			},
		],
	},
];