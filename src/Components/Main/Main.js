import React from 'react';
import { useState } from 'react';
import { PlayerData } from './Data';
import { EnemyData } from './Data';
import Status from './Status/Status';
import Inventory from './Inventory/Inventory';
import Narrative from './Narrative/Narrative';

function Main(props) {
    const [playerData, setPlayerData] = useState({
        hp: 50,
        ac: 16,
        attackBonus: 5,
        inventory: [{
            weapon: true,
            armor: true,
            shield: true,
        }
        ]
    })
    const [enemyData, setEnemyData] = useState({})
    return (
        <div>
            Hello from Main
            <PlayerData.Provider value={{ playerData, setPlayerData }}>
                <Status />
                <Inventory />
            <EnemyData.Provider value={{enemyData, setEnemyData }}>
                <Narrative />
            </EnemyData.Provider>
            </PlayerData.Provider>         
        </div>
    );
}

export default Main;