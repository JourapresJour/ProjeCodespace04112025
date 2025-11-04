const mongoose = require('mongoose');

// Connexion MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/giftlink', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const giftSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    description: String
});

const Gift = mongoose.model('Gift', giftSchema);

const sampleGifts = [
    {name: "Livre Python", category: "Education", price: 25, description: "Apprendre Python"},
    {name: "Café Premium", category: "Boisson", price: 12, description: "Café arabica"},
    {name: "Thé Vert", category: "Boisson", price: 8, description: "Thé vert bio"},
    {name: "Stylo", category: "Bureau", price: 3, description: "Stylo plume"},
    {name: "Cahier", category: "Bureau", price: 5, description: "Cahier 100 pages"},
    {name: "Casque Audio", category: "Électronique", price: 80, description: "Casque sans fil"},
    {name: "Chargeur", category: "Électronique", price: 15, description: "Chargeur rapide"},
    {name: "T-shirt", category: "Vêtement", price: 20, description: "T-shirt coton"},
    {name: "Chaussures", category: "Vêtement", price: 45, description: "Chaussures sport"},
    {name: "Sac", category: "Accessoire", price: 35, description: "Sac à dos"},
    {name: "Montre", category: "Accessoire", price: 60, description: "Montre intelligente"},
    {name: "Parfum", category: "Beauté", price: 40, description: "Parfum floral"},
    {name: "Crème", category: "Beauté", price: 18, description: "Crème hydratante"},
    {name: "Ballon", category: "Sport", price: 15, description: "Ballon de football"},
    {name: "Raquette", category: "Sport", price: 30, description: "Raquette tennis"},
    {name: "Jeu Société", category: "Loisir", price: 22, description: "Jeu familial"}
];

async function importData() {
    try {
        await Gift.deleteMany({});
        await Gift.insertMany(sampleGifts);
        
        const count = await Gift.countDocuments();
        console.log(`✅ ${count} documents importés dans MongoDB!`);
        process.exit(0);
    } catch (error) {
        console.log('❌ Erreur:', error.message);
        process.exit(1);
    }
}

importData();
