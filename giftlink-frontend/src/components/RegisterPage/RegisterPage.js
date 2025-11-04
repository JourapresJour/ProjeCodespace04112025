import React, { useState } from 'react';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('/api/auth/register', {
            // Tâche 9: method et headers (Content-Type) requis
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        // ... (gestion de la réponse)
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>S'inscrire</h2>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Nom d'utilisateur" required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Mot de passe" required />
            <button type="submit">S'inscrire</button>
        </form>
    );
}
export default RegisterPage;