const user = require('express').Router();
const User = require('../models/user')




// Find all users 
user.get('/', async (req, res) => {
    try {
      const foundUser = await User.find({});
      res.status(200).json(foundUser);
    } catch (error) {
      res.status(500).json(error);
      console.log(error)
    }
  });


// Create user 
user.post("/", async(req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).json(newUser);

    } catch (error) {
        console.log(error.message);
        res.status(500).json(error);
        console.log(error)
    }
})


module.exports = user