var express = require("express")
var app = express()
var bodyParser = require('body-parser')
app.use(express.static(__dirname + '/'))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

require('./db/dbConnection')
let router = require('./routes/router')

app.set('views', 'public/views');
app.set('view engine', 'ejs')

app.use('/add-dog', router);
app.use('/get-all-dogs', router);
app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
