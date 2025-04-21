// src/components/FileUpload.jsx
import React, { useState } from 'react';

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    };

    const handleUpload = () => {
    if (!file) {
        alert('Please select a file to upload.');
        return;
    }

    // Logic to upload the file (here it could be an API call)
    console.log('Uploading file:', file);
    };

    return (
    <div className="file-upload">
        <h2>Upload a File</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
    </div>
    );
};

export default FileUpload;
