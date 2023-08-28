let client = require('../db/dbConnection')
let collection = client.db('sit_725').collection('dogs');


function addDog(dog) {
    return collection.insertOne(dog);
}

async function getAllDogs() {
    return await collection.find({}).toArray();
}

module.exports = { addDog, getAllDogs }