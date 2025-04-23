import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
    <div style={styles.sidebar}>
        <h2>Sharelly</h2>
        <ul style={styles.navList}>
        <li><Link to="/">🏠 Accueil</Link></li>
        <li><Link to="/files">📁 Mes fichiers</Link></li>
        <li><Link to="/upload">⬆️ Déposer</Link></li>
        <li><Link to="/users">👥 Utilisateurs</Link></li>
        <li><Link to="/login">🔐 Connexion</Link></li>
        </ul>
    </div>
    );
}

const styles = {
    sidebar: {
    width: '200px',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    position: 'fixed',
    left: 0,
    top: 0,
    },
    navList: {
    listStyle: 'none',
    padding: 0,
    }
};

export default Sidebar;
