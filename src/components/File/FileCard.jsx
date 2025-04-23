import React from 'react';

function FileCard({ fileName, owner }) {
    return (
    <div>
        <h3>{fileName}</h3>
        <p>Propriétaire : {owner}</p>
        <button>Télécharger</button>
    </div>
    );
}

export default FileCard;
