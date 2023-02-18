import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail() {
   const {detailId} = useParams();   // useParams es un objeto que tiene todos los parametros que se han pasado por url.

   
    const [character, setCharacter] = useState({
        name:'',
        status:'',
        specie:'',
        gender:'',
        origin:{},
        image:'',
    });

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    
    
    return(
      <div>
        <div>
            {character.name && (<h1>Name: {character.name}</h1>)}    
            {character.status && (<h1>Status:{character.status}</h1>)}
            {character.specie && (<h1>Specie:{character.specie}</h1>)}
            {character.gender && (<h1>Gender:{character.gender}</h1>)}
            {character.origin.name && (<h1>Origin:{character.origin.name}</h1>)}
             
            <img src={character.image} alt=''/>
        </div>
        <button onClick={()=>navigate('/home')}>Back to Home</button>
        </div>
    )
}

// {character.specie && ( si existe la propiedad specie lo va a mostrar de lo contrario no.