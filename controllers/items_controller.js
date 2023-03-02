const express = require('express')
const items = express.Router()
const Items = require('../models/items.js')




 // INDEX
items.get("/", async (req, res) => {
    try {
      const foundItem = await Items.find({});
      res.status(200).json(foundItem);
    } catch (error) {
      res.status(500).json(error);
      console.log(error)
    }
});

//FIND A SPECIFIC ITEM
items.get('/:id', async (req, res) => {
    try {
        const item = await Items.findById(req.params.id)   
        res.json(item)
    } catch (error) {
        res.status(500).json(error);
        console.log(error)
    }
})



// EDIT PAGE
items.get('/:id/edit', async (req, res) => {
    let id = req.params.id
        const item = await Items.findById({id})
        
        if (!item) {
            res.status(404).json({ message: `Could not find movie with id "${id}"` })
        } else {
            res.json(item)
        }
    
  })

//UPDATE
  items.put('/:id', async (req, res) => {
    const item = Items.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then(updatedItems => {
      console.log(updatedItems)
      res.json(item)
    })
    
  })

// DELETE
items.delete('/:id', async (req, res) => {
        const item = await Items.findByIdAndDelete(req.params.id)
        res.json(item)
})

// NEW ITEM
items.get('/new', (req, res) => {
    Items.find()
        .then(foundItems => {
            res.render('new', {
                items: foundItems
            })
      })
})


//CREATE
items.post('/', async (req, res) => {
  console.log(req.body)
    const item = await Items.create(req.body)
    res.json(item)

})


module.exports = items