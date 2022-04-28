const { Router } = require('express');
const axios = require('axios')
const router = Router();
const { Turist_activity } = require('../db')
// no se si no tendria q importarlo de models

router.post('/', async (req, res) => {
    try{
    const { name, difficulty, duration, season} = req.body;
    const activity = Turist_activity.create({
        name,
        difficulty,
        duration,
        season
    })
    res.json(activity)
}catch(err){
    console.log(err)
}
})

module.exports = router;