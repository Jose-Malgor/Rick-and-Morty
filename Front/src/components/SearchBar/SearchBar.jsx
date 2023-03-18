import { useState } from "react";


export default function SearchBar({onSearch, random}) {

   const [character, setCharacter] = useState("");

   const handleChange = (e) => {
      const { value } = e.target;
      setCharacter(value)
   }


   return (
      <div>
         <input type='search' placeholder="Buscar" onChange={handleChange} />
         <button onClick={() => onSearch(character)}>Agregar</button>
         <button onClick={random}>Random Character</button>
      </div>
   );
}
// Onclick ={props.onSearch()}  se genera un bucle infinito por ese debo hacer una funcion flecha.