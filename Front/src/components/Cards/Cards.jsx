import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return <div className={styles.container}>
      {characters.length ===0 ?
      (<p style={{color: "white", marginTop: "150px", fontSize: "24px"}}>
         Busca un Personaje!
      </p>)
      :  
      (characters.map((char) => (
         <Card
            key={char.name}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
            id = {char.id}
            onClose={() => props.onClose(char.id)}
         />)
      ))}

   </div>;
}
