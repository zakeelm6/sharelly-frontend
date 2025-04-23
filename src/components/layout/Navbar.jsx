import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <nav>
        <Link to="/">Accueil</Link>
        <Link to="/files">Mes fichiers</Link>
        <Link to="/login">Connexion</Link>
    </nav>
    );
}

export default Navbar;
