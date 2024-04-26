import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function AccessButton() {
    return (
        <button className="access-button">
            <FontAwesomeIcon icon={faUser} />
            <span>Iniciar sessão</span>
        </button>
    );
}

export default AccessButton;