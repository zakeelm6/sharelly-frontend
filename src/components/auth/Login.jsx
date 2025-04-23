import React from 'react';

function Login() {
    return (
    <div>
        <h2>Connexion</h2>
        <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mot de passe" required />
        <button type="submit">Se connecter</button>
        </form>
    </div>
    );
}

export default Login;
