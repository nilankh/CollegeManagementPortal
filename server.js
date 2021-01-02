const c = require('config');
const express = require('express');

const app = express();

app.get('/',(req, res) => res.send({msg: 'Welcome to the College Management Portal'}));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));