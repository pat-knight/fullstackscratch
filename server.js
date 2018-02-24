const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/api/all', (req, res) => res.send('resulting data'));

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});