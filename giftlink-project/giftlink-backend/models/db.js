const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/giftlink');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Connection error:', error);
    }
};

module.exports = connectToDatabase;
