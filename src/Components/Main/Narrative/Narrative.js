import React from 'react';
import Options from './Options/Options'

function Narrative(props) {
    return (
        <div className='narrative-container'>
            <div className='narrative'>
                <p>You are interrupted by a bellowing roar from behind you. You turn to face an orc, covered in blood and wielding a wicked looking axe. The orc is charging at you with its axe raised high, preparing to strike!</p>
                <Options />
            </div>
        </div>
    );
}

export default Narrative;