import React from 'react';

function UserList() {
    const users = [
    { name: 'Zakeel', email: 'zakeel@mail.com' },
    { name: 'Sara', email: 'sara@mail.com' },
    { name: 'Amine', email: 'amine@mail.com' }
    ];

    return (
    <div>
        <h2>Utilisateurs</h2>
        <ul>
        {users.map((user, index) => (
            <li key={index}>
            <strong>{user.name}</strong> - {user.email}
            </li>
        ))}
        </ul>
    </div>
    );
}

export default UserList;
