import React, { useState } from 'react';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = 'MOCK_JWT_TOKEN'; // Simule un jeton
        
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            // Tâche 10: Content-Type et Authorization requis
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, 
            },
            body: JSON.stringify({ username, password }),
        });
        // ... (gestion de la réponse)
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Connexion</h2>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Nom d'utilisateur" required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Mot de passe" required />
            <button type="submit">Se connecter</button>
        </form>
    );
}
export default LoginPage;