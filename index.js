const express = require('express');
const {liveExcel}  = require('./Controller/liveExcel.js');

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

liveExcel();