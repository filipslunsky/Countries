const express = require('express');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

app.use(cors());

app.get('/countries', (req, res) => {
    const countries = require('./config/data/data.json');
    res.json(countries);
});

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});
