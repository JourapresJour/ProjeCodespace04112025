const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../models/db');

// Tâche 6: Code pour filtrer sur category
router.get('/', async (req, res) => {
    const { category } = req.query; 
    let filter = {};
    if (category) {
        filter.category = category; // Logique de filtrage requise
    }

    try {
        const db = await connectToDatabase();
        const gifts = await db.collection('gifts').find(filter).toArray();
        res.json(gifts);
    } catch (error) {
        res.status(500).send('Erreur lors de la recherche.');
    }
});
module.exports = router;