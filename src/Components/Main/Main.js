import React from 'react';
import './Main.css'
import { useState } from 'react';
import Status from './Status/Status';
import Inventory from './Inventory/Inventory';
import Narrative from './Narrative/Narrative';

const initialPlayerStats = {
    hp: 50,
    armor: 16,
    attackBonus: 5,
}
function Main(props) {
    const [ playerStats, setPlayerStats ] = useState(initialPlayerStats)
    return (
        <div className='main-container'>
            <Status 
                hp={playerStats.hp}
                armor={playerStats.armor}
                atb={playerStats.attackBonus}
            />
            <Inventory />
            <Narrative />       
        </div>
    );
}

export default Main;