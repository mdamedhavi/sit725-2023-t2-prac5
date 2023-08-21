// server.js
const express = require('express');
const mongoose = require('mongoose');
const dogController = require('./controllers/dogController');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://DewniManamperi:ASHAra99@sit725.09sxxbx.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(dogController);

// Set default route to fetch and display all dogs
app.get('/', async (req, res) => {
  try {
      const dogs = await Dog.find({});
      console.log(dogs);
      res.status(200).render('index', { dogs });
  } catch (error) {
      res.status(500).json({ error: 'Internal server error!' });
  }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
