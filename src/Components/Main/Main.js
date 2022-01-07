import React from 'react';
import './Main.css'
import { useState } from 'react';
import Status from './Status/Status';
import Inventory from './Inventory/Inventory';
import Narrative from './Narrative/Narrative';
import { Story } from '../../Data/Data'
const longsword = {
    name: 'Longsword',
    minDamage: 1,
    maxDamage: 8,
    description: 'A fine steel longsword, forged by the finest blacksmiths in the kingdom.'
}
const chainmail = {
    name: 'Chain Mail',
    armor: 16,
    description: 'A suit of chainmail, designed to protect against slashing attacks.'
}
const healingPotion = {
    name: 'Healing Potion',
    description: 'A simple vial with a bright, crimson liquid within. Imbibe the contents to heal your wounds.',
    minHealing: 8,
    maxHealing: 20,
}
const initialPlayerStats = {
    currentHP: 50,
    maxHP: 50,
    armorClass: 16,
    attackBonus: 5,
    damageBonus: 3,
    items: {
        weapon: longsword,
        armor: chainmail,
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
    // restartGame();
    return (
        <div className='main-container'>
            <Status
                currentHP={playerStats.currentHP} 
                maxHP={playerStats.maxHP}
                armorClass={playerStats.armorClass}
                attackBonus={playerStats.attackBonus}
                items={playerStats.items}
            />
            <Inventory 
                items={playerStats.items}
                consumables={playerStats.items.consumables.healingPotion}
                healingPotionCount={playerStats.items.consumables.healingPotionCount}
            />
            <Narrative
                story={Story} 
                setPlayerStats={setPlayerStats}
                playerStats={playerStats}
                currentTextID={currentTextID}
                setCurrentTextID={setCurrentTextID}
            />     
        </div>
    );
}

export default Main;