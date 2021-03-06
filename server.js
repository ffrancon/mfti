const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('dist'));

// app.get('/', (req, res) => { res.send('Nothing here')});
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/dist/index.html')));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
