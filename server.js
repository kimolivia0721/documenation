/* server.js - Express server*/
'use strict';

const express = require('express')
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, '')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'examples.html'));
});


const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
})