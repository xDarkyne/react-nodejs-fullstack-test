const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
/*
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'viewer',
    password: '//viewdb1'
});*/

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});