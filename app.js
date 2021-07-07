const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Saaspect Testing file for ci/cd pipeline!!!!Nandani!!!!!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
