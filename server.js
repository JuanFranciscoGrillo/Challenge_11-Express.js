const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');


const api_Routes = require('./routes/ApiRoutes/ApiRoutes');
const html_Routes = require('./routes/htmlRoutes');


app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());


app.use('/api', api_Routes);
app.use('/', html_Routes);

app.listen(PORT, () => {
    //debugging
    console.log(`API server now on port ${PORT}!`);
});