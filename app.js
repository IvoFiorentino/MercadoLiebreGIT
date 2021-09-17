const express = require('express');
const app = express ();
const path = require ('path')
const PORT = process.env || 3000;

const pathPublico = path.join (__dirname,'./public');

app.use(express.static(pathPublico));

app.listen(PORT, () => console.log('server up at: http://localhost:3000/'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'./views/home.html')));


