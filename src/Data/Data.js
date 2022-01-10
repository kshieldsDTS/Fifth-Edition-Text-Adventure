import { Items } from './Items'
export const Story = [
	{
		id: 0,
		text: 'Welcome to the world of Hydraxus! In this text adventure, you will be playing the role of a soldier in the Grand Army of Syndri. The Grand Army has recently clashed with the enemy from the nation of Calashar. During the battle, you were wounded and knocked unconscious. Your adventure begins as your eyes begin to open...',
		text2: `Due to the random nature of combat, you may not always survive your encounters. Your equipment can be upgraded to improve your chances, but sometimes fate gets its way.`,
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
		text: 'With great effort, combating your aching muscles and throbbing headache, you manage to get to your feet. You quickly take stock of your equipment: your trusty weapon and your armor are both missing, though the small pouch at your waist still contains the six healing potions you had purchased before the battle. You see a dagger embedded in the ground not far from you.',
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
				nextID: 28,
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
		text2: `You awaken as the sun rises. Its blinding light and heat rousing you from your slumber. You drop from the ledge and stretch a bit before following the army's tracks back toward the north east.`,
		options: [
			{
				text: `Follow the tracks.`,
				nextID: 17,
			},
		],
	},
	{
		id: 17,
		text: `You follow the familiar path, tracking the many muddied bootprints of your fellow soldiers. After several hours, you come across the site of the battle where you had been injured. Broken weapons, banners, and armor are strewn about. The corpses left behind appear to belong to the soldiers of Calashar, suggesting that Syndri was victorious, as they had gathered and burned their dead. Scanning the battlefield, a grouping of a half-dozen burned structures on a nearby hilltop confirms your logic.`,
		text2: `Further inspection of the battleground reveals that the army did camp about half of a mile to the north. You find the remains of some crates and tents left behind. They likely stayed for a night to rest before continuing north toward the enemy city of Velben. You can continue forward or inspect the items left behind by the army.`,
		options: [
			{
				text: `Check the crates.`,
				nextID: 18,
				equipArmor: Items[5],
			},
			{
				text: 'Check the tents.',
				nextID: 19,
				addPotion: 1,
			},
			{
				text: 'Continue tracking the army.',
				nextID: 20,
			},
		],
	},
	{
		id: 18,
		text: `Checking through the crates, you find that most of the contents appear to be broken armor pieces. A large number of and chain mail armors have been left, and most are damaged beyond repair. With some digging, you find one chain mail that sustained damage only in the area below the torso. With some effort, you pull it free.`,
		text2:
			'You remove some of the lower links and convert the chain mail into a servicable chain shirt.',
		text3: `Wiping the sweat from your brow and donning your new armor, you set out to find your comrades.`,
		options: [
			{
				text: 'Continue tracking the army.',
				nextID: 20,
			},
		],
	},
	{
		id: 19,
		text: `Checking through the skeletal frame of the tent, you appear to find very little of interest. This appears to have been a common soldiers' tent. As you begin to leave, you hear glass cracking as you take a step. You reach down to inspect the sound, and find that you have stepped on a healing potion and broken it. Unfortunate.`,
		text2: `However, that potion was part of a pair, and you pocket the intact potion for later use.`,
		text3: `With extra healing in hand, you set out to find your comrades.`,
		options: [
			{
				text: 'Continue tracking the army.',
				nextID: 20,
			},
		],
	},
	{
		id: 20,
		text: `You continue to the north east, following the tracks of the Grand Army. The bright cloudless sky quickly gives way to dark, overcast clouds as you trek in search of your allies. A scant few hours of walking along the path, you hear the booming of distant thunder, and a sudden torrential downpour assails you.`,
		text2: `You spot a copse of trees nearby that can offer some modicum of shelter from the storm. You also see what appears to be a cave in the opposite direction.`,
		options: [
			{
				text: 'Head for the trees.',
				nextID: 21,
			},
			{
				text: `Head for the cave.`,
				nextID: 22,
			},
		],
	},
	{
		id: 21,
		text: `The thick foliage of the trees provide passable shelter from the downpour, though you feel no less cold or miserable. Gathering some branches and leaves, you attempt to make a small shelter at the base of a tree. The shelter helps, but only slightly. You will not be making much more progress today, and try to ride out the storm in the makeshift shelter.`,
		text2: `Your night is miserable and wet, but you survive the storm unscathed. You welcome the morning sun, as it slowly heats you up and dries your clothing. You press forward.`,
		options: [
			{
				text: 'Continue following the army.',
				nextID: 24,
			},
		],
	},
	{
		id: 22,
		text: `You approach the cave and find that the opening seems a bit larger than you had expected. You rush inside to shelter from the storm, and hear a gutteral growling from within. Your eyes adjust to the darkness slowly, and you see that the cave is much deeper than anticipated. You continue along and see that the cave ends in a bugbear's den.`,
		text2: `The bugbear smells you and rears up threateningly as it turns to face you. You will have to fight the bugbear if you wish to shelter in the cave.`,
		options: [
			{
				text: 'Fight for the cave.',
				nextID: 23,
				enemyName: 'bugbear',
			},
			{
				text: 'Give up the cave and head to the trees.',
				nextID: 21,
			},
		],
	},
	{
		id: 23,
		text: `The bugbear falls, and with its demise you are now the owner of this cave. The bugbear appeared to have brought in wood, and other refuse, which you use to start a small fire to warm up.`,
		text2: `Safe from the rain, with a fire to warm you, you rest comfortably in the cave, and rummage through the items left behind by the deceased bugbear. Most of the items are mundane: torn clothing, simple weapons, but one object catches your eye: a glowing axe.`,
		text3: `Though shaped like a standard woodcutting axe, its blade is etched with runic symbols that glow faintly blue. Upon grasping its hilt, you feel a surge of power. This axe, however unlikely, is a powerful magic weapon. You would be wise to utilize it.`,
		text4: `You rest in the cave for the night, and in the morning you find that the storm has passed.`,
		options: [
			{
				text: 'Continue following the army.',
				nextID: 24,
				equipWeapon: Items[6],
			},
		],
	},
	{
		id: 24,
		text: `You set out after the storm has cleared, and are now making good progress towards the army. The tracks you are following are becoming clearer and more recent. They could not have moved far during last night's storm. You march forward, your goal drawing ever nearer. Shortly after the midday sun, you crest a hill and gaze upon a welcome sight, the thousands of men in their blue and green armor marching northeast, apparently intent on continuing to Velben. They are still roughly half a mile out, but you're confident you can catch up.`,
		text2: `As you are nearing the army, you hear a rustling in the grass to your right, followed by a click and a whoosh past your ear. You turn to the sound and see a lithe figure dressed in dark clothing. One of the famed Calashar drow scouts has attacked you!`,
		options: [
			{
				text: 'Defend yourself!',
				nextID: 25,
				enemyName: 'drow',
			},
		],
	},
	{
		id: 25,
		text: `The drow, though incredibly agile and skilled, finds himself no match for your furious onslaught, and lays dead at your feet.`,
		text2: `The distraction has put you further behind the army. You can pilfer the drow's belongings or try to catch up to the army before you lose sight of them.`,
		options: [
			{
				text: 'Loot the drow.',
				nextID: 26,
				equipArmor: Items[7],
			},
			{
				text: `Catch up to the army.`,
				nextID: 27,
			},
		],
	},
	{
		id: 25,
		text: `You pilfer the drow's corpse, and find that most of his possessions are useless to you in your situation. However, you feel that his chain shirt feels very light, but also seemed to deflect your attacks well in the battle. You recall that Calashar is renowned for having the region's best armorsmiths. You are sure that this drow's armor will serve you better than anything you have found up until this point.`,
		text2: `After putting on the dead drow's chain shirt, you realize you have lost sight of the army. You do not panic, as you are sure you can still catch up just by following their tracks.`,
		options: [
			{
				text: 'Find the army.',
				nextID: 27,
				equipArmor: Items[7],
			},
		],
	},
	{
		id: 27,
		text: `As the sun sets, you finally catch up to the Grand Army of Syndri as they begin to make camp for the night. Though the scouts initially attempt to sound an alarm, they realize that you are one of their own and bring you into the camp.`,
		text2: `The clerics tend to any wounds you may have, and the quartermaster outfits you with outerwear that more clearly identifies your allegiance. You report to your commander, who welcomes you back with open arms.`,
		text3: `Your commander tells you to get some rest, because tomorrow will be a big day: you lay siege to the enemy capital of Velben!`,
		options: [
			{
				text: 'Congratulations, you have completed the game!',
				nextID: 2,
			},
		],
	},
	{
		id: 28,
		text: `You head north up the hill. As you reach the crest of the hill, you look down upon a farmstead that has been razed. The smoke is billowing from the farmhouse, which is now barely a burnt skeleton of its former glory. A handful of dead farm hands litter the fields, as well as the body of a Calashar scout.`,
		text2: `The scout appeared to have been part of a raiding party. His gaunt features suggest that his party attacked this farmstead out of desperation or starvation. While the local farmers were no match for soldiers, this scout was unlucky enough to have his belly pierced by a pitchfork.`,
		text3: `You can check the farmhouse, barn, or fields to see if there is anything of value. You also see tracks leading to the east.`,
		options: [
			{
				text: `Check the farmhouse.`,
				nextID: 29,
				equipArmor: Items[8],
			},
			{
				text: `Check the barn.`,
				nextID: 30,
			},
			{
				text: `Check the fields.`,
				nextID: 31,
			},
			{
				text: `Continue east.`,
				nextID: 34,
			},
		],
	},
	{
		id: 29,
		text: `You carefully walk into the farmhouse. While the main fire has been extinguished by time, the building is still smoldering. You are careful not to place your bare hands on any hot surfaces. The far corner of the house appears relatively untouched by the flames, and you find a slightly charred footlocker. Opening the footlocker reveals a simple piece of leather armor. It's not much but it offers more protection than your tunic.`,
		text2: `You don the simple armor, and realize that the sun is beginning to set. You will need to find somewhere to stay for the night.`,
		options: [
			{
				text: 'Check the barn.',
				nextID: 30,
			},
		],
	},
	{
		id: 30,
		text: `You tread slowly into the farmhouse. Its interior is dark, perhaps aided by the sun setting below the horizon. You check the corners for any enemies. You sense movement out the corner of your eye and face your attacker, swinging your dagger.`,
		text2: `A pair of barn owls fly out indignantly, disturbed by your intrusion. A few more minutes, and you have cleared out the barn from any threats.`,
		text3: `As you complete your sweep, you find a particularly large hay bale that looks incredibly comfortable right now.`,
		text4: `You make yourself comfortable in the barn and tend to your wound as best you can.`,
		options: [
			{
				text: 'Pass out on the hay bale.',
				nextID: 32,
				healing: 10,
			},
		],
	},
	{
		id: 31,
		text: `You check through the fields to see if any of the farmhands had anything of value that could help you. One of the farmhands, face down in the dirt with three arrows in his back, had a small red glass vial in his hand. He had a healing potion that he was unable to use before being killed.`,
		text2: `You take the potion, and realize that the sun is beginning to set. You should take shelter and rest for the night before continuing on.`,
		options: [
			{
				text: 'Head to the barn to rest.',
				nextID: 30,
				addPotion: 1,
			},
		],
	},
	{
		id: 32,
		text: `You awaken with a start. You hear shuffling from outside the barn. You crouch into a defensive position as a diminuitive figure enters the barn. A small goblin, looking to loot this farmstead, shouts a battle cry and charges you with his small sword!`,
		options: [
			{
				text: 'Defend yourself!',
				nextID: 33,
				enemyName: 'goblin',
			},
		],
	},
	{
		id: 33,
		text: `You have slain the foul goblin. You find it unusual to find a solitary goblin so close to human civilization, but like the Calashar, it must have been desperate.`,
		text2: `Collecting yourself, you continue east, following the tracks that you had found previously.`,
		options: [
			{
				text: 'Head east.',
				nextID: 34,
			},
		],
	},
	{
		id: 34,
		text: `You head east from the farmstead, following the tracks left by the raiding party. Their tracks lead you into a dense forest. The foliage shelters you from the sun, and you carefully follow the tracks. Your pace slows, as you know that woods like these are perfect for ambushes.`,
		text2: `As you trek deeper into the forest, you hear the sounds of steel weapons colliding and the shouts of people fighting.You pick up the pace and head toward the source of the disturbance.`,
		text3: `You find yourself in a clearing, with a small log cabin and a tiny pond next to it. You see a soldier wearing a Calashar uniform fighting with a tall, muscular woman with short, pink hair. The woman is wielding a massive hammer, and it deftly parrying all of the soldier's attacks. Without warning, she sweeps the soldier's legs out from under him, brings the hammer back in an overhead swing, and crushes the soldier's chest. You then notice the six other dead soldiers scattered about.`,
		text4: `The woman immediately looks in your direction, and begins menacingly walking towards you.`,
		options: [
			{
				text: 'Quickly explain who you are and show you are no threat.',
				nextID: 35,
			},
			{
				text: `Back away quickly and put as much distance between you.`,
				nextID: 38,
			},
		],
	},
	{
		id: 35,
		text: `The woman regards you for a moment, before swinging her hammer up and resting it on her shoulder.`,
		text2: `"You came from the Braddock Farmstead back that way?" she asks, motioning in the direction you came from. "They all dead?" You explain that they were dead when you arrived, and you were tracking the raiders. Her expression softens. "Damn." She sighs and turns towards the log cabin. She motions for you to follow.`,
		text3: ``,
		options: [
			{
				text: 'Follow the woman to the log cabin.',
				nextID: 36,
			},
			{
				text: `Apologize and say you must be on your way.`,
				nextID: 38,
			},
		],
	},
	{
		id: 36,
		text: `Inside the cabin, the woman sets her hammer down along the wall. She moves towards a kitchenette and procures a small teapot. She pours a cup of tea for each of you, and motions for you to take a seat at the table. She places a teacup in front of you.`,
		text2: `"Name's Zaakia. I used to be a big shot adventurer, but now I'm retired. Damn soldiers don't know what's good for 'em and won't leave me well enough alone." She looks and sizes you up, and sees that you are a soldier yourself. "No offense. You Syndri folk seem nice enough. These Calashar jerks though, they could use some manners." She sips her tea. "I assume you'll be wanting to get back to your unit?" You nod. "Crash in front of the fireplace there, these woods aren't safe to travel without a guide. I'll guide you out of here in the morning.`,
		options: [
			{
				text: 'Sleep in front of the fireplace',
				nextID: 37,
				healing: 10,
			},
		],
	},
	{
		id: 37,
		text: `Zaakia wakes you just before the sun rises. She offers you a morning tea before you both set out to the woods. You notice, peculiarly, that she is carrying a very large battle axe along with her hammer. Her physical strength to wield both weapons must be the stuff of legends.`,
		text2: `Before the midday sun, Zaakia has brought you to the eastern edge of the woods. As you begin to set off, she claps a hand on your shoulder.`,
		text3: `"Wait a sec, pal. I can't have you running around with that little poker you're carrying. Take this." she says, as she hands you the hammer she had used to great effect yesterday. You grasp it, and find it is incredibly heavy, but you can manage to wield it with both hands. She chuckles as you struggle with it initially. "Good hunting, soldier. Take care." She turns and disappears into the woods once more.`,
		text4: `Ahead, you can see a purple crystal Obelisk, known as the Sword of Arboreas. You recall the army was going to make camp there, prior to the battle. It's the best chance you have of reconnecting with the army.`,
		options: [
			{
				text: 'Head toward the obelisk.',
				nextID: 39,
				equipWeapon: Items[9],
			},
		],
	},
	{
		id: 38,
		text: `Not wanting anything to do with the giant woman, you choose to put some distance between you. You charge blindly through the forest for several hours until you find yourself on the edge of the woods with a great open plain in front of you. In the distance, you can see a massive purple crystal obelisk, known as the Sword of Arboreas. You recall that the Grand Army had planned to make camp there before the battle. It's the best chance you have of reconnecting with the army.`,
		options: [
			{
				text: 'Head toward the obelisk.',
				nextID: 39,
			},
		],
	},
	{
		id: 39,
		text: `You head toward the obelisk. The Sword of Arboreas' huge size makes its distance seem deceptively small. Several hours pass before you reach the base of the obelisk. You rest to catch your breath, and realize that the obelisk has a tunnel in its side that leads into its depths. You can hear running water from inside, and a beautiful singing voice.`,
		options: [
			{
				text: `Follow the voice and enter the tunnel.`,
				nextID: 40,
			},
		],
	},
	{
		id: 40,
		text: `You enter the tunnel, and the voice gets louder and louder. It fills your ears and is the only thing you desire. As the tunnel winds, it opens into a clear underground lake with a waterful. Sitting at the lake's edge is a humanoid figure, thin and lithe. You see its arms and realize they are wings, covered in raven black feathers. You snap from your stupor, and the creature turns to face with you its horrific, disfigured face. The harpy berserker turns to attack you!`,
		options: [
			{
				text: `Defend yourself!`,
				nextID: 41,
				enemyName: 'berserker',
			},
		],
	},
	{
		id: 41,
		text: `The harpy berserker is slain, its black blood spilling onto the ground. As the creature's enchantment fades, the waterfall and lake disappear, and an awful stench assaults your senses. The creature has been luring poor souls into this room and feasting upon their flesh. Despite the smell, you feel you can find some valuable materials if you were to dig through the refuse.`,
		options: [
			{
				text: 'Check the cavern for useful items.',
				nextID: 42,
				addPotion: 5,
			},
			{
				text: `The smell is unbearable. Leave.`,
				nextID: 43,
			},
		],
	},
	{
		id: 42,
		text: `While most of the equipment was damaged by the berserker in its feeding frenzy, it apparently had, at one point, the presence of mind to keep a stock of healing potions. You find five unbroken healing potions.`,
		text2: `However, now the smell is beginning to make you feel dizzy, and you find yourself fighting your way up the tunnel back to fresh air.`,
		options: [
			{
				text: 'Breathe fresh air.',
				nextID: 43,
			},
		],
	},
	{
		id: 43,
		text: `Back on the surface, you fight the urge to retch. You gather yourself, and inspect the area.`,
		text2: `You find signs that the Grand Army had made camp here at the Sword of Arboreas, but has since moved on to the norht east. You feel that you should follow, but it is nearing sunset. You would be wise to rest for the night.`,
		options: [
			{
				text: 'Find a safe spot to rest.',
				nextID: 16,
			},
		],
	},
];