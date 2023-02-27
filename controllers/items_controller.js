const express = require('express')
const items = express.Router()
const Items = require('../models/items.js')

 // INDEX
 items.get('/', (req, res) => {
    Items.find()
        .then(foundItems => {
            res.render('index', {
                Items: foundItems,
                title: 'Index Page'
            })
        })
})

//FIND A SPECIFIC ITEM
items.get('/:id', async (req, res) => {
    try {
        const foundItem = await Item.findOne({
            where: { items_id: req.params.id }
        })
        res.status(200).json(foundItem)
        console.log("Nice Work")
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

// EDIT
items.get('/:id/edit', (req, res) => {
    Items.findById(req.params.id)
    .then(foundItem => {
      res.render('edit', {
        item: foundItem
      })
    })
    
  })


// CREATE
items.post('/', async(req, res) => {
    try {
        const newItem = await Items.create(req.body)
        res.status(200).json(newItem);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// DELETE 
items.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await Item.destroy({
            where: {
                item_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted`
        })
    } catch(err) {
        res.status(500).json(err)
        console.log("broken")
    }
})

// in the new route
items.get('/new', (req, res) => {
    Items.find()
        .then(foundItems => {
            res.render('new', {
                items: foundItems
            })
      })
})

//UPDATE
items.put('/:id', (res, req) => {
    Items.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then(updatedItem => {
      console.log(updatedItem) 
      res.redirect(`/items/${req.params.id}`) 
    })
})


module.exports = items