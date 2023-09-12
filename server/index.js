const express = require('express');
require('dotenv').config()
const cors = require('cors');
const bodyParser = require('body-parser')
const router = require('./routers/router');

const Port = process.env.PORT || 8000;

const app = express();


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use(router);

app.listen(Port, () =>{
    console.log(`Server is runnig at ${Port}`)
})
