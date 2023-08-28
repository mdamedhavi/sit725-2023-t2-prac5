let collection = require('../models/dogModel')


function addDog(req, res) {
    const result = collection.addDog(req.body);
    res.status(201).json({ message: "Dog added successfully!", dog: result });
}

async function getAllDogs(req, res) {
    const dogs = await collection.getAllDogs();
    res.status(200).json(dogs);
}


module.exports = { addDog, getAllDogs }