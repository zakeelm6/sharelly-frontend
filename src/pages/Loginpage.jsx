// src/pages/LoginPage.js
import React, { useState } from 'react';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
    e.preventDefault();
    // Ajoute ici la logique d'authentification (API, validation, etc.)
    console.log('Login:', email, password);
    };

    return (
    <div>
        <h1>Connexion</h1>
        <form onSubmit={handleLogin}>
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Se connecter</button>
        </form>
    </div>
    );
}

export default LoginPage;

