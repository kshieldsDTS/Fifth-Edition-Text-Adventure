import React from 'react';
import './Main.css'
import { useState } from 'react';
import Status from './Status/Status';
import Inventory from './Inventory/Inventory';
import Narrative from './Narrative/Narrative';
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
const initialPlayerStats = {
    playerCurrentHP: 50,
    playerMaxHP: 50,
    playerArmorClass: 16,
    playerAttackBonus: 5,
    playerItems: {
        weapon: longsword,
        armor: chainmail,
        consumables: {
            healingPotion: 3,
        }
    }
}
function Main(props) {
    const [ playerStats, setPlayerStats ] = useState(initialPlayerStats)
    return (
        <div className='main-container'>
            <Status
                playerCurrentHP={playerStats.playerCurrentHP} 
                playerMaxHP={playerStats.playerMaxHP}
                playerArmorClass={playerStats.playerArmorClass}
                playerAttackBonus={playerStats.playerAttackBonus}
                playerItems={playerStats.playerItems}
            />
            <Inventory 
                playerItems={playerStats.playerItems}/>
            <Narrative 
                setPlayerStats={setPlayerStats}/>       
        </div>
    );
}

export default Main;