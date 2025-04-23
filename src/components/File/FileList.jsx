import React from 'react';
import FileCard from './FileCard';

function FileList() {
    const files = [
    { fileName: 'rapport.pdf', owner: 'Amine' },
    { fileName: 'devis.xlsx', owner: 'Zahra' }
    ];

    return (
    <div>
        <h2>Fichiers disponibles</h2>
        {files.map((file, index) => (
        <FileCard key={index} fileName={file.fileName} owner={file.owner} />
        ))}
    </div>
    );
}

export default FileList;
