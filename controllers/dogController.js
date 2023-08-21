// controllers/dogController.js
const express = require('express');
const router = express.Router();
const Dog = require('../models/dogModel');

// Add a new dog
router.post('/add-dog', async (req, res) => {
    try {
        const formData = req.body;
        const newDog = new Dog(formData);
        await newDog.save();
        res.status(201).json({ message: 'Dog added successfully!', dog: newDog });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error!' });
    }
});

// Get all dogs
router.get('/all-dogs', async (req, res) => {
    try {
        const dogs = await Dog.find({});
        res.status(200).json(dogs);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error!' });
    }
});

module.exports = router;
