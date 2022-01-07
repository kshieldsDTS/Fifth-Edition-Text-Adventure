import React from 'react';

function CombatModal(props) {
    function closeModal() {
        props.setEnemyStats({})
    }
    return (
        <div className='combat-modal'>
            Combat Modal Test 1
            <button onClick={closeModal}>Close Modal</button>
        </div>
    );
}

export default CombatModal;