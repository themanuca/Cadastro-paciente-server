const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose =  require('mongoose');
const routes = require('./src/routes');

require("dotenv/config");

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL,{
}, function(err){
    if(err){
        console.log(err)
    }else{
        console.log("MongoDB CONECTADO !")
    }
})


app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(port, function(){
    console.log("server ON");
})