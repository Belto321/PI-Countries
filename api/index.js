//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Country } = require('./src/db')
const getCountries = require('./src/helps/fechapi')

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  //llamar fn externa 
    try{
  getCountries().then( async res => {
    res.forEach(async e =>{ 
     
      await Country.create({
      id: e.id,
      name: e.name,
      flag: e.flag,
      continet: e.continet,
      capital: e.capital,
      subregion: e.subregion,
      area: e.area,
      population: e.population
    })
 
  })
  })
}catch(err){
    console.log(err)
  }
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
