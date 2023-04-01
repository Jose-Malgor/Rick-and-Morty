import { connect } from "react-redux";
import Card from "../Card/Card";
import { orderCards, filterCards, getFavorites } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useRef } from "react";


export function Favorites({ myFavorites }) {
    const filter = useRef(null);
    const order = useRef(null);

    const dispatch = useDispatch();

    function handleReset(e) {
        // dispatch({ type: "RESET" });
        dispatch(getFavorites());
        filter.current.value = "";
        order.current.value = "";
    }

    return (
        <div>
            <div>
                <select ref={order}
                    onChange={(e) => dispatch(orderCards(e.target.value))}
                >
                    {["Ascendente", "Descendente"].map((e, i) => (
                        <option value={e} key={i}>
                            {e}
                        </option>
                    ))}
                </select>

                <select ref={filter}
                    onChange={(e) => dispatch(filterCards(e.target.value))}
                >
                    {["Male", "Female", "unknown", "Genderless"].map((e, i) => (
                        <option value={e} key={i}>
                            {e}
                        </option>
                    ))}
                </select>

                <button value="reset" onClick={handleReset}>
                    Reset
                </button>

            </div>
            {myFavorites.length === 0 ? (
                <p style={{ color: "blue", marginTop: "150px", fontSize: "24px" }}>
                    ¡Agrega un favorito!
                </p>
            ) : (
                myFavorites?.map((fav, i) => (
                    <Card
                        id={fav.id}
                        name={fav.name}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                        onClose={false}
                        fav={true}
                        key={i++}
                    />
                )))}
        </div>
    );
}

export function mapSateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}
export default connect(mapSateToProps, null)(Favorites);