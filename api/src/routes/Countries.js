const { Router } = require('express');
const { Op } = require('sequelize');
const { Country, Turist_activity} = require('../db');
const router = Router();

router.get('/', async(req, res)=> {
    const {page, name, Porder, Norder, Cfilter, Afilter} = req.query;
    let lim = 10
    if(name){
    try{    
        const country = await Country.findOne({
            where:{
                name: {[Op.iLike]: '%' + name + '%' }
            }
        })
        if(!country) return res.send("Country not found")
        res.json(country)
     }catch(err){
        res.status(404).send(err)
    }
    }else{
        if(Norder){
            if(Cfilter && Afilter){
                if(page === "0") lim = 9
            try{    
                const countries = await Country.findAll({
                    where:{
                        continet: Cfilter,
                    },
                    include: [{
                        model: Turist_activity,
                        where: { name: Afilter }, 
                      }],
                    limit: lim,
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
            if(page === "0") lim = 9
            try{
                const countries = await Country.findAll({
                    where:{
                        continet: Cfilter,
                    },
                    limit: lim,
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
            if(page === "0") lim = 9
            try {
                const countries = await Country.findAll({
                    include: [{
                        model: Turist_activity,
                        where: { name: Afilter }, 
                      }],
                limit: lim,
                offset: page,
                order:[["name", Norder]]
                })
                return res.json(countries)
                
            } catch (err) {
                console.log(err)
            }
        }else{
            if(page === "0") lim = 9

            try {
                const countries = await Country.findAll({
                limit: lim,
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
                if(page === "0") lim = 9
            try{    
                const countries = await Country.findAll({
                    where:{
                        continet: Cfilter,
                    },
                    include: [{
                        model: Turist_activity,
                        where: { name: Afilter }, 
                      }],
                    limit: lim,
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
            if(page === "0") lim = 9
            try{
                const countries = await Country.findAll({
                    where:{
                        continet: Cfilter,
                    },
                    limit: lim,
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
            if(page === "0") lim = 9
            try {
                const countries = await Country.findAll({
                    include: [{
                        model: Turist_activity,
                        where: { name: Afilter }, 
                      }],
                limit: lim,
                offset: page,
                order:[["population", Porder]]
                })
                return res.json(countries)
                
            } catch (err) {
                console.log(err)
            }
        }else{
            if(page === "0") lim = 9
            try {
                const countries = await Country.findAll({
                limit: lim,
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
        


router.get('/:code', async (req, res) => {
    const { code } = req.params;
    try {
        const countries = await Country.findByPk(code, {
            include: Turist_activity,
        })
        res.json(countries)
    } catch (err) {
        console.log(err)
    }
})




module.exports = router;