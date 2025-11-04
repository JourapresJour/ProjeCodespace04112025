const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../models/db');

router.post('/register', async (req, res) => {
    res.status(200).json({ message: "Inscription réussie (mock)" });
});

router.post('/login', async (req, res) => {
    const { username } = req.body;
    try {
        const db = await connectToDatabase();
        const collection = db.collection('users');
        
        // Tâche 11: collection.findOne()
        const user = await collection.findOne({ username });

        if (user) {
            res.json({ message: "Utilisateur trouvé", user: user.username });
        } else {
            res.status(401).json({ message: "Nom d'utilisateur incorrect" });
        }
    } catch (error) {
        res.status(500).send('Erreur lors de la connexion.');
    }
});
module.exports = router;