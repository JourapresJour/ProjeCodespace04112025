const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../models/db'); // Tâche 4: Import

// Route GET /api/gifts (Tâche 5: "/")
router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase(); // Tâche 4: Appel
        const gifts = await db.collection('gifts').find({}).toArray();
        res.json(gifts);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération des cadeaux.');
    }
});

// Route GET /api/gifts/:id (Tâche 5: "/:id")
router.get('/:id', async (req, res) => {
    const giftId = req.params.id;
    try {
        const db = await connectToDatabase();
        res.status(200).send(`Détails du cadeau: ${giftId}`); 
    } catch (error) {
        res.status(500).send(`Erreur lors de la récupération du cadeau ${giftId}`);
    }
});
module.exports = router;