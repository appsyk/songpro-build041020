const express = require('express');

const router = express.Router();

//item model

const Item = require('../../models/Item');

//@route GET api/items
//@desc Get all items
//@access public

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

//@route POST api/items
//@desc Post an Item
//@access public

router.post('/', (req, res) => {
    const newPost = new Item({
        name: req.body.name
    });

    newPost.save().then(item => res.json(item));
});

//@route DELETE api/items
//@desc Delete an Item
//@access public

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => {
            item.remove().then(() => res.json({ success: true }))
        })
        .catch(err => res.status(404).json({ success: false }))
});

module.exports = router;