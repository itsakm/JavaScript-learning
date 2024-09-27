const express = require('express');
const router = express.Router();
const Idea = require('../modals/Idea');

const ideas = [
    {
        id:1,
        text: 'I am Iron Man',
        tag: 'Technology',
        username: 'Tony Stark',
        data: '2022-01-02',
    },
    {
        id:2,
        text: 'I can do this All Day',
        tag: 'Inspiration',
        username: 'Steve Rogers',
        data: '2022-01-02',
    },
    {
        id:3,
        text: 'I am invetible',
        tag: 'Proud',
        username: 'Thanos',
        data: '2022-01-02',
    }
]

//get All Ideas
router.get('/', async (req,res) => {
   
    try{
        const ideas = await Idea.find();
        res.json({success:true,data:ideas})
    }
    catch
    {
        console.log(err);
        res
        .status(500)
        .json({success:false, error: 'Something Went Wrong'})
    }
})

//Get one Idea
router.get('/:id', async (req,res) => {

    try
    {
        const idea = await Idea.findById(req.params.id);
        res.json({success:true,data:idea})
    }
    catch(err)
    {
        return res
        .status(404)
        .json({success:false,error:'Resource not found'});
    }
})

//add a idea
router.post('/',async (req,res) => {
    const idea = new Idea ({
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username
    })

    try
    {
        const savedIdea = await idea.save();
        res.json({success: true, data: savedIdea });
    }
    catch(err)
    {
        console.log(err);
        res
        .status(500)
        .json({success: false, error:'Resource not found'  });
    }

});

//update Idea
router.put('/:id',async (req,res) => {

    try
    {
        const updatedIdea = await Idea.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    text: req.body.text,
                    tag: req.body.tag
                }
            },
            {new : true}
        );
        res.json({success:true,data:updatedIdea})
    }
    catch(err)
    {
        console.log(err);
        return res
        .status(404)
        .json({success:false,error:'Resource not found'});
    }
})

//Delet Idea
router.delete('/:id',async (req,res) => {

    try
    {
        await Idea.findByIdAndDelete(req.params.id);
        res.json({success:true,data:{} })
    }
    catch(err)
    {
        return res
        .status(404)
        .json({success:false,error:'Resource not found'});
    }
})


module.exports = router;