const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Import des routes
const giftRouter = require('./routes/giftRoutes');
const searchRouter = require('./routes/searchRoutes'); 
const authRouter = require('./routes/authRoutes');

// Définition des routes
app.use('/api/gifts', giftRouter);
app.use('/api/auth', authRouter);

// Tâche 7: Route qui sert /api/gifts/search (Note: utilise le router pour /api/gifts/search)
app.use('/api/gifts/search', searchRouter); 

app.get('/', (req, res) => {
    res.send('API Giftlink fonctionne!');
});

app.listen(port, () => {
    console.log(`Serveur écoutant au port ${port}`);
});
