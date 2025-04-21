// src/pages/Login.jsx
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Ici tu ajouteras la logique pour appeler l'API de connexion
    };

    return (
    <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
        />
        <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
        />
        <button type="submit">Login</button>
        </form>
    </div>
    );
};

export default Login;
