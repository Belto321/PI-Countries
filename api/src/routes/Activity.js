const { Router } = require('express');
const axios = require('axios')
const router = Router();
const { Turist_activity, Country} = require('../db')
// no se si no tendria q importarlo de models

router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, countries} = req.body;
    try{
    const newActivity = await Turist_activity.create({
        name,
        difficulty,
        duration,
        season,
        countries
    })

    if(countries){
        countries.forEach(async (c) => {
            const index = await Country.findOne({
                where: {
                    name: c.trim()
                }
            })
            await newActivity.addCountry(index)
        });
    }
    res.json(newActivity)
}catch(err){
    console.log(err)
}
})

router.get( '/' ,async (req, res) => {
    try {
        const activities = await Turist_activity.findAll()
        res.json(activities)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;