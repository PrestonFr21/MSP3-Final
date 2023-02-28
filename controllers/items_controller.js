const express = require('express')
const items = express.Router()
const Items = require('../models/items.js')


//CREATE
items.post('/', async (req, res) => {
    const item = await Items.create(req.body)
    res.json(item)
})

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
    //console.log(req.params.id)
    try{
        let id = req.params.id
       // console.log(req.params.id)
        const item = await Items.findOne({where: {
            _id: id
        }})
         
    res.json(item)
    } catch (error) {
        res.status(500).json(error);
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
      
      res.redirect(`/items/${req.params.id}`) 
    })
})


module.exports = items