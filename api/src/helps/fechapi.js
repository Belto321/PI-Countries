// traer la info delaapi con axios
// filtrar y exportar
// async await
const axios = require('axios')

const getCountries = async () => {
    let filterData = [];
    
    const request = await axios.get('https://restcountries.com/v3/all')
    const gottenData = await request.data
    try{
    await gottenData.forEach(e => {
      let obj ={};
      obj.id = e.cca3
      obj.name = e.name.common
      obj.flag = e.flags[0]
      obj.continet = e.continents[0]
      if(e.capital){
        obj.capital = e.capital[0]
        }else{
          obj.capital = 'Not found'
        }
      obj.subregion = e.subregion
      obj.area = e.area
      obj.population = e.population
      filterData.push(obj)
    }) 
    return filterData
}catch(err){
    console.log(err)
}
  }

  

  module.exports = getCountries