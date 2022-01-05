import React from 'react';

function Options(props) {
    return (
        <div className='options-container'>
            <button className='option1 option'>Prepare for Battle!</button>
            <button className='option2 option'>Try to reason with the orc</button>
            <button className='option3 option'>Try to run from the orc</button>
            <button className='option4 option'>Call out for help</button>
        </div>
    );
}

export default Options;