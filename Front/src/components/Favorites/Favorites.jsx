import { connect } from "react-redux";
import Card from "../Card/Card";
import { orderCards, filterCards, getFavorites} from "../../redux/actions";
import { useDispatch } from "react-redux";

export function Favorites({ myFavorites }) {

    const dispatch = useDispatch();
    const handleDispatch = (e) => {
        const { name, value } = e.target;

        if (name === 'order') {
            return dispatch(orderCards(value))
        }
        if (name === 'filter') {
            return dispatch(filterCards(value))
        }
    }

    return (
        <div>
            <div>
                <select name='order' onClick={handleDispatch}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>

                <select name='filter' onClick={handleDispatch}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
            {myFavorites?.map((fav,i) => (
                <Card
                    id={fav.id}
                    name={fav.name}
                    gender={fav.gender}
                    image={fav.image}
                    key={i++}
                    onClose={false}
                    fav = {true}
                />
            ))}
        </div>
    )
}

export function mapSateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}
export default connect(mapSateToProps, null)(Favorites);