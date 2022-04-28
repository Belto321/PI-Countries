const { Router } = require('express');
const { Op } = require('sequelize');
const { Country, Turist_activity} = require('../db');
const router = Router();

router.get('/', async(req, res)=> {
    const {name} = req.query;
    try{
    if(name){
        const country = await Country.findOne({
            where:{
                name: {[Op.iLike]: name }
                //name: name
            }
        })
        res.json(country)
    }else{
        const countries = await Country.findAll({})
        res.json(countries)  
    }
    }catch(err){
        res.status(404).send(err)
    }
})

// router.get('/', async (req, res) => {
//     try{
// const countries = await Country.findAll({})
// res.json(countries)
//     }catch(err){
//         console.log(err)
//     }
// })



router.get('/:code', async (req, res) => {
    const { code } = req.params;
    try {
        const countries = await Country.findByPk(code, {
            includes: Turist_activity,
        })
        res.json(countries)
    } catch (err) {
        console.log(err)
    }
})



module.exports = router;