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

// Find specific user
user.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findById( req.params.id )
        res.status(200).json(foundUser)
        console.log("Nice Work")
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

 // Login
 user.get("/login", async (req, res) => {
    try {
      const foundUser = await User.find({});
      res.status(200).json(foundUser);
    } catch (error) {
      res.status(500).json(error);
      console.log(error)
    }
});

// Sign Up
user.get("/signup", async (req, res) => {
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

// Update user
user.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { 
            // $set - replaces the value with new value 
            $set: req.body,
            where: { user_id: req.params.id } });
        res.status(200).json(updatedUser);
    } catch(err) {
        res.status(500).json(err)
        console.log("broke")
    }
});


// Delete user 
user.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.body, {
            where: { user_id: req.params.id }
        });
        res.status(200).json(deletedUser);
    } catch(err) {
        res.status(500).json(err)
        console.log("broken")
    }
})

module.exports = user