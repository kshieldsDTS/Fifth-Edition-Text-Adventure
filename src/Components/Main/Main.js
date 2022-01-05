import React from 'react';
import Status from './Status/Status'
import Inventory from './Inventory/Inventory'
import Narrative from './Narrative/Narrative'

function Main(props) {
    return (
        <div>
            Hello from Main
            <Status />
            <Inventory />
            <Narrative />
        </div>
    );
}

export default Main;