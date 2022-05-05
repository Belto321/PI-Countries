const { Router } = require('express');
const { Op } = require('sequelize');
const { Country, Turist_activity} = require('../db');
const router = Router();

router.get('/', async(req, res)=> {
    const {page, name, Porder, Norder, Cfilter, Afilter} = req.query;
    
    if(name){
    try{    
        const country = await Country.findOne({
            where:{
                name: {[Op.iLike]: '%' + name + '%' }
            }
        })
        res.json(country)
     }catch(err){
        res.status(404).send(err)
    }
    }else{
        if(Norder){
            if(Cfilter && Afilter){
            try{    
                const countries = await Country.findAll({
                    where:{
                        continet: Cfilter,
                    },
                // include: Turist_activity:{
                //     where: Afilter
                // },
                    limit: 10,
                    offset: page,
                    order:[["name", Norder]]
                })
                return res.json(countries) 
            }catch(err){
                console.log(err)
            }
        }

            ////////////////////////////////////////////////////////////////

        else if(Cfilter){
            try{
                const countries = await Country.findAll({
                    where:{
                        continet: Cfilter,
                    },
                    limit: 10,
                    offset: page,
                    order:[["name", Norder]]
                })
                return res.json(countries)   
            }catch(err){
                console.log(err)
            } 
        }

        ///////////////////////////////////////////////////////////////////

        else if(Afilter){
            try {
                const countries = await Country.findAll({
                      // include: Turist_activity({
                //     where: Afilter
                // })
                limit: 10,
                offset: page,
                order:[["name", Norder]]
                })
                return res.json(countries)
                
            } catch (err) {
                console.log(err)
            }
        }else{
            try {
                const countries = await Country.findAll({
                limit: 10,
                offset: page,
                order:[["name", Norder]]
                })
                return res.json(countries)
                
            } catch (err) {
                console.log(err)
            }
        }

        } else  if(Porder){
            if(Cfilter && Afilter){
            try{    
                const countries = await Country.findAll({
                    where:{
                        continet: Cfilter,
                    },
                // include: Turist_activity({
                //     where: Afilter
                // })
                    limit: 10,
                    offset: page,
                    order:[["population", Porder]]
                })
                return res.json(countries) 
            }catch(err){
                console.log(err)
            }
        }

            ////////////////////////////////////////////////////////////////

        else if(Cfilter){
            try{
                const countries = await Country.findAll({
                    where:{
                        continet: Cfilter,
                    },
                    limit: 10,
                    offset: page,
                    order:[["population", Porder]]
                })
                return res.json(countries)   
            }catch(err){
                console.log(err)
            } 
        }

        ///////////////////////////////////////////////////////////////////

        else if(Afilter){
            try {
                const countries = await Country.findAll({
                      // include: Turist_activity({
                //     where: Afilter
                // })
                limit: 10,
                offset: page,
                order:[["population", Porder]]
                })
                return res.json(countries)
                
            } catch (err) {
                console.log(err)
            }
        }else{
            try {
                const countries = await Country.findAll({
                limit: 10,
                offset: page,
                order:[["population", Porder]]
                })
                return res.json(countries)
                
            } catch (err) {
                console.log(err)
            }
        }

        }
    }
    try {
        const countries = await Country.findAll()
        return res.json(countries)
        
    } catch (err) {
        console.log(err)
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