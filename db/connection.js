const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://utkarsh:utkarsh@tradeapi.2q7fmtv.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoURI)
    .then(() => {
        console.log('connected to MongoDB');
    })
    .catch((err) => {
        console.log('MongoDB connection failed with error: ' + err)
    });

