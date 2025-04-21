// src/components/Header.jsx
import React from 'react';
import './Header.css'; // Si tu veux ajouter des styles spécifiques pour le header

const Header = () => {
    return (
    <header className="header">
        <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
        </ul>
        </nav>
    </header>
    );
};

export default Header;
