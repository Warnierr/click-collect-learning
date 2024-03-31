module.exports = MongoDBClient

require('dotenv').config(); 
const mongoose = require('mongoose');

const DB = 'marketplace'
const URI = process.env.DB_URI 

const MongoDBClient = {
    initialize: () => {
        try {
            const client = mongoose.connect(URI)
            client.then(() => console.log(`successfully connected to DB: ${DB}`))
        } catch(e) {
            throw Error(e)
        }
    }

}

module.exports = MongoDBClient;
