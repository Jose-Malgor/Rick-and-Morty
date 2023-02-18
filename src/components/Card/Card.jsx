import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


export function Card(props) {

   const [isFav, setIsFav] = useState (props.fav);

   function handleFavorite (){
      if(isFav){
         setIsFav (false);
         props.deleteFavorite(props.id)
      } else {
         setIsFav (true);
         props.addFavorite({
            name: props.name,
            species: props.species,
            gender: props.gender,
            image: props.image,
            id: props.id})
      }
    }

    useEffect(() => {
      props.myFavorites && props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);
   // cada vez que se produzca un camnbio la lista de favoritos se ejecuta el useEffect

   return (
      <div className={styles.card}>
         {
            isFav ? (
            <button onClick={handleFavorite}>❤️</button>
                     ) : (
            <button onClick={handleFavorite}>🤍</button>
                         )
         }

         <button className={styles.closeButton} onClick={props.onClose}>X</button>
         <img src={props.image} alt="imagen" />
         <div className={styles.textContainer}>
         <Link to = {`/detail/${props.id}`}><div className={styles.titulo}>{props.name}</div ></Link>
         <div className={styles.textDetails}>
            <div className={styles.titulo}>{props.species}</div >
            <div className={styles.titulo}>{props.gender}</div >
         </div>
         </div>
      </div>
   );
}

export function mapDispatchToProps(dispatch){
   return({
      addFavorite: function(fav){
         dispatch(addFavorite(fav))
      },
      deleteFavorite: function(id){
         dispatch(deleteFavorite(id))
      }
   })
}

export function mapSateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapSateToProps, mapDispatchToProps)(Card);
