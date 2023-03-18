const cors = require("cors");
const router = require('./routes/index.js')
const express = require('express');
const app = express();

const corsOptions = {    
    origin: "*",
    credentials: true,  // access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.unsubscribe(cors(corsOptions));   // para darle acceso a todas la dependencias

app.use(express.json());   //Middleware
app.use('/', router);      // Middleware

module.exports = app;