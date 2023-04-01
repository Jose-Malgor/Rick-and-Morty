export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const GET_FAVS = 'GET_FAVS';


// export function addFavorite(fav){
//     return {
//         type: ADD_FAVORITE,
//         payload: fav,
//     }
// }

// export function deleteFavorite(id){
//     return {
//         type: DELETE_FAVORITE,
//         payload: id,
//     }
// }

export function addFavorite(fav, idUser) {
    return async function (dispatch) {
        try {
            const data = await fetch(`http://localhost:3001/fav?idUser=${idUser}`, {
                method: 'POST',
                body: JSON.stringify(fav),     // Convierte foramto JS a Jason
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((response) => response.json());
            if (data) dispatch({
                type: ADD_FAVORITE,
                payload: data,
            })
        } catch (error) {
            console.log(error);
        }
    };
}

export function deleteFavorite(id, idUser) {
    return async function (dispatch) {
        try {
            const data = await fetch(`http://localhost:3001/fav/${id}?idUser=${idUser}`, {
                method: 'DELETE',
            })
                .then((response) => response.json())
            if (data.success) dispatch({
                type: DELETE_FAVORITE,
                payload: id,
            })
        } catch (error) {
            console.log(error);
        }
    };
}

export function getFavorites(idUser) {
    return async function (dispatch) {
        try {
            const data = await fetch(`http://localhost:3001/fav?idUser=${idUser}`
            ).then((response) => response.json());

            if (data) dispatch({ type: GET_FAVS, payload: data });

        } catch (error) {
            console.log(error);
        }
    };
}

export function filterCards(status) {
    return {
        type: FILTER,
        paylor: status,
    };
}

export function orderCards(id) {
    return {
        type: ORDER,
        payload: id,
    };
}
export function login(email, password) {
    return async function (dispatch) {
      try {
        const obj = await fetch(
          `http://localhost:3001/login?email=${email}&password=${password}`
        ).then((response) => response.json());
        
        if (obj.access) dispatch({ type: "LOGIN", payload: obj.id });
      } catch (error) {
        console.log(error);
      }
    };
  }