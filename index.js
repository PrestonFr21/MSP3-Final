// DEPENDENCIES
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

// MIDDLEWARE 
app.use(cors())
require("dotenv").config();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.set('views', __dirname + '/views')
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())

//connect to mondgodb 
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to ...',
    })
})

// CONTROLLERS
const itemsController = require('./controllers/items_controller')
app.use('/items', itemsController)

const userController = require('./controllers/users_controller')
app.use('/users',userController)

// 404 PAGE



app.listen(process.env.PORT, () => {
    console.log(`💪 Signal on port: ${process.env.PORT}`);
});