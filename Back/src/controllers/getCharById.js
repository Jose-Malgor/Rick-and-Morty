const axios = require('axios');

// const getCharById = (res, id)=>{
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response =>response.data)
//     .then(data =>{
//         let obj ={
//             id: data.id,
//             name: data.name,
//             image: data.image,
//             gender: data.gender,
//             species: data.species
//         }
//         res
//         .writeHead(200, {"Content-type": "application/json"})
//         .end(JSON.stringify(obj));
//     })
//     .catch((err) => {
//         res
//         .writeHead(500, {"Content-Type": "text/plain"})
//         .end(`El personaje con id:${id} no fue encontrado`)
//     })
// }

function filterData(data){
    return{
        id: data.id,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
    };
}
const URL = 'https://rickandmortyapi.com/api/character/';

    // OPCION CON PROMESAS

    //const getCharById = (req, res) =>{
    //    const params = req.params;
    // axios.get(`${URL}${params.id}`).then(({data}) =>{
    //     const char = filterData(data);
    //     res.status(200).json(char);
    // }).catch((err) => {
    //     res.status(500).json({message: err})
    // })

    //OPCION CON ASYNC AWAIT

const getCharById = async (req, res) =>{
    const params = req.params;
    try {
        const { data } = await axios.get(`${URL}${params.id}`)
        const char = filterData(data);
        res.status(200).json(char); 
    } catch (error) {
        res.status(500).json({message: error})
    }
}

module.exports = { getCharById, filterData, URL };