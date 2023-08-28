const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://DewniManamperi:ASHAra99@sit725.09sxxbx.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("Successfully connected to MongoDB!");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

connectToMongoDB();

module.exports = client;