const express = require('express');
const Model = require('../model/model');
const router = express.Router()

//Post method
router.post('/post', async (req,res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    //console.log(req.body)
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave )
    } catch(error) {
        res.status(400).json({message: error.message})
    }
})

//Get all method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }catch(error) {
        res.status(500).json({message: error.message})
    }
})

//Get by ID method
router.get('/getOne/:id', async(req,res) => {
    try{
        const data = await Model.findById(req.params.id)
        res.json(data)
    }catch(error) {
        res.status(500).json({message:error.message})
    }
})

//Update by ID Method
router.put('/update/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new:true};
        const result = await  Model.findByIdAndUpdate(
            id, updatedData, options
        )
        res.status(200).send(result)
    } catch(error) {
        res.status(400).json({message:error.message})
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
   try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.status(200).send(`Document with ${data.name} has been deleted...`)
   }catch(error){
        res.status(400).json({message:error.message})
   }
})


module.exports = router;