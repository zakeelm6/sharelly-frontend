import React from 'react';

function FileUpload() {
    return (
    <div>
        <h2>Déposer un fichier</h2>
        <form>
        <input type="file" />
        <button type="submit">Envoyer</button>
        </form>
    </div>
    );
}

export default FileUpload;
