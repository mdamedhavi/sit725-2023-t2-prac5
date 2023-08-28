var express = require("express")
let router = express.Router()
let dogController = require('../controllers/dogController')

router.post('/add-dog', (req, res) => {
    dogController.addDog(req, res);
})

router.get('/get-all-dogs-mongo', dogController.getAllDogs);

router.get('/', (req, res) => {
    res.render('index');
})


module.exports = router;