import React from 'react';

function PermissionsPanel({ fileName, sharedWith }) {
    return (
    <div>
        <h3>Partage de : {fileName}</h3>
        <ul>
        {sharedWith.map((user, index) => (
            <li key={index}>{user}</li>
        ))}
        </ul>
        <button>Partager avec un nouvel utilisateur</button>
    </div>
    );
}

export default PermissionsPanel;
