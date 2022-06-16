const express = require('express');
const app = express();


// MongoDB Atlas Connection
require('./db/connection')


app.use(express.json());   // for testing purposes using postman


// Link Routes files
app.use(require('./routes/route'));


// Listen on PORT 
app.listen(3000, () => {
    console.log("server running on port 3000");
});
