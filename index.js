// DEPENDENCIES
const express = require("express");
const app = express();
// const cors = require("cors");

// MIDDLEWARE 
require("dotenv").config();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to ...',
    })
})

// CONTROLLERS
const forSaleItemsController = require('')
app.use('', forSaleItemsController)




app.listen(process.env.PORT, () => {
    console.log(`💪 Signal on port: ${process.env.PORT}`);
});