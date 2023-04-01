
//UTILIZADON SERVER CON NODE PURO

// const http = require("http");
// const { getCharById }= require ("./controllers/getCharById");
// const { getCharDetail } = require("./controllers/getCharDetail")

// module.exports=
//     http.createServer((req, res)=>{
//         res.setHeader('Access-Control-Allow-Origin', '*'); //Permite el acceso al servidor desde cualquier lado (*).
//         let id = req.url.split('/').at(-1)
            
//         if(req.url.includes('onsearch')){
//                 getCharById(res, id)
//             }

//         if(req.url.includes('detail')){
//                 getCharDetail(res, id)
//             }
//         }).listen(3001, 'localhost');


//UTILIZANDO UN ARCHIVO DATA 

    //const characters = require('./utils/data.js')
    //if (req.url.includes('rickandmorty/character')){
    //    let id = req.url.split('/').at(-1) // at permite agarra posiciones especificas de un array
        //let characterFilter = characters.filter(char => char.id === Number(id)) // parceamos el id porque necesitamos pasarlo a numero porque cuando lo sacamos de la url es un string. Devuelve un array con un objeto dentro.
    //    let characterFilter = characters.find(char => char.id === Number(id)) // devuelve un objeto
    
    //    res.writeHead(200, {"Content-type": "application/json"})
    //    res.end(JSON.stringify(characterFilter)); // lo paso a string jason porque characterFilter es un objeto javascript.
    //     }



const PORT = 3001;
const app = require ('./app')
const { sequelize } = require("./DB_connection");

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, (req, res) => {
      console.log(`Server raised on port ${PORT}`);
    });
  });