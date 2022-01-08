import React from 'react';
import './Main.css'
import { useState } from 'react';
import Status from './Status/Status';
import Inventory from './Inventory/Inventory';
import Narrative from './Narrative/Narrative';
import { Story } from '../../Data/Data'
import { Items } from '../../Data/Items'

const healingPotion = {
    name: 'Healing Potion',
    description: 'A simple vial with a bright, crimson liquid within. Imbibe the contents to heal your wounds.',
    minHealing: 8,
    maxHealing: 20,
}
const initialPlayerStats = {
    currentHP: 15,
    maxHP: 50,
    attackBonus: 5,
    damageBonus: 3,
    items: {
        weapon: Items[0],
        armor: Items[1],
        consumables: {
            potion: healingPotion,
            healingPotionCount: 3,
        }
    }
}
function Main(props) {
    const [ playerStats, setPlayerStats ] = useState(initialPlayerStats)
    const [ currentTextID, setCurrentTextID ] = useState(0)
    function restartGame(){
        setPlayerStats(initialPlayerStats)
        setCurrentTextID(0)
    }
    return (
        <div className='main-container'>
            <Status
                currentHP={playerStats.currentHP} 
                maxHP={playerStats.maxHP}
                armorClass={playerStats.items.armor.armorClass}
                attackBonus={playerStats.attackBonus}
                items={playerStats.items}
            />
            <Inventory
                playerStats={playerStats} 
                items={playerStats.items}
                consumables={playerStats.items.consumables}
                healingPotionCount={playerStats.items.consumables.healingPotionCount}
                setPlayerStats={setPlayerStats}
            />
            <Narrative
                story={Story} 
                setPlayerStats={setPlayerStats}
                playerStats={playerStats}
                currentTextID={currentTextID}
                setCurrentTextID={setCurrentTextID}
                restartGame={restartGame}
            />     
        </div>
    );
}

export default Main;