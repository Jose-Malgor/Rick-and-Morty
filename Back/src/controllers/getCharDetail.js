const axios = require('axios');

// const getCharDetail = (res, id)=>{
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response =>response.data)
//     .then(data =>{
//         let obj ={
//             id: data.id,
//             name: data.name,
//             image: data.image,
//             gender: data.gender,
//             species: data.species,
//             status: data.status,
//             origin: data.origin.name
//         }
//         res
//         .writeHead(200, {"Content-type": "application/json"})
//         .end(JSON.stringify(obj));
//     })
//     .catch(err => 
//         res
//         .writeHead(500, {"Content-Type": "text/plain"})
//         .end(`El detalle del personaje con id:${id} no fue encontrado`)
//         )
// }

const { filterData, URL } = require('./getCharById.js')
 
// OPCION CON AXIOS

const getCharDetail = async (req, res) =>{
    const params = req.params;
    try {
        const { data } = await axios.get(`${URL}${params.id}`)
        const char = filterData(data);
        res.status(200).json({ ...char, status: data.status, origin: data.origin.name }); 
    } catch (error) {
        res.status(500).json({message: error})
    }
}

// OPCION CON PROMESAS

// const getCharDetail = (req, res) =>{
//     const params = req.params;

//     axios.get(`${URL}${params.id}`).then(({data}) =>{
//         const char = filterData(data);
//         res.status(200).json({ ...char, status: data.status, origin: data.origin.name });
//     }).catch((err) => {
//         res.status(500).json({message: err})
//     });
// };



module.exports = { getCharDetail };