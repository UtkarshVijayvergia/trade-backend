const mongoose = require('mongoose');


// Construct Schema
const stockSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    percentage:{
        type: Number,
        required: true,
    }
})


// Export Schema
const Stock = mongoose.model('STOCK', stockSchema);     //inside qotes is the name of collection ('s' is added at the end of the collection name)
module.exports = Stock;