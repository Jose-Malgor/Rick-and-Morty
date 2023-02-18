export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export function addFavorite(fav){
    return {
        type: ADD_FAVORITE,
        payload: fav,
    }
}

export function deleteFavorite(id){
    return {
        type: DELETE_FAVORITE,
        payload: id,
    }
}

export function filterCards(status){
    return{
        type: FILTER,
        paylor: status,
    }
}

export function orderCards(id){
    return{
        type: ORDER,
        payload: id,
    }
}