import React from 'react';

function UserProfile({ name, email }) {
    return (
    <div>
        <h2>Profil</h2>
        <p>Nom : {name}</p>
        <p>Email : {email}</p>
    </div>
    );
}

export default UserProfile;
