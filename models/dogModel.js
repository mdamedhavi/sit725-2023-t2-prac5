const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    title: String,
    sub_title: String,
    image_path: String,
});

const Dog = mongoose.model('dogs', dogSchema);

module.exports = Dog;
