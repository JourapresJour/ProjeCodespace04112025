const { MongoClient } = require('mongodb');
const url = process.env.MONGO_URI || 'mongodb://localhost:27017';
const client = new MongoClient(url);
let dbInstance;

async function connectToDatabase() {
    if (dbInstance) { return dbInstance; }
    try {
        // Tâche 3: Ligne de connexion requise
        await client.connect(); 
        console.log("Connecté à MongoDB");
        dbInstance = client.db('giftlink');
        return dbInstance;
    } catch (error) {
        console.error("Erreur de connexion à MongoDB:", error);
        throw error;
    }
}
module.exports = { connectToDatabase, client };