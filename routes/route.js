const express = require('express');
const routes = express.Router();


// CORS Configure
const cors = require('cors');
routes.use(cors());


// MongoDB Configure 
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://utkarsh:utkarsh@tradeapi.2q7fmtv.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);
const database = client.db("test");
const collection = database.collection("stocks");


// ADD Schemas
const Stock = require('../model/stockSchema');


// Routes
routes.post('/postdata', async (req, res) => {
    const { id, name, price, percentage} = req.body;
    if( !id || !name || !price || !percentage ){
        return res.status(422).json({ error: "please fill all the fields" });
    }
    const stock = new Stock({ id, name, price, percentage});
    try{
        const saveStock = await stock.save();
        if(saveStock){
            res.status(201).json({ message: "data posted successfully" });
        }
        else{
            res.status(500).json({ error: "failed to post data" });
        }
    }  
    catch(err){
        console.log(err);
    }
});


routes.get('/dashboard', async (req, res) => {
    try{
        await client.connect();
        const response = await collection.find().toArray();
        res.send(response);
    }
    catch(err){
        console.log(err)
    }
    finally {
        await client.close();
    }
});


 
module.exports = routes;