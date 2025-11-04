const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connexion MongoDB locale simple
mongoose.connect('mongodb://127.0.0.1:27017/giftlink', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Connecté à MongoDB'))
.catch(err => console.log('❌ Erreur MongoDB:', err.message));

// Modèle de données
const giftSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    description: String
});
const Gift = mongoose.model('Gift', giftSchema);

// Routes de base
app.get('/', (req, res) => {
    res.json({ message: 'API GiftLink fonctionne!' });
});

// Route pour voir tous les gifts (Task 13)
app.get('/api/gifts', async (req, res) => {
    try {
        const gifts = await Gift.find();
        res.json(gifts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route pour un gift par ID (Task 16)
app.get('/api/gifts/:id', async (req, res) => {
    try {
        const gift = await Gift.findById(req.params.id);
        res.json(gift);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route de recherche par catégorie (Task 17)
app.get('/api/gifts/search', async (req, res) => {
    try {
        const category = req.query.category;
        const gifts = await Gift.find({ category: new RegExp(category, 'i') });
        res.json(gifts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('🚀 Serveur démarré sur http://localhost:3000');
});
