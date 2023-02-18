import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from './actions';

const initialState ={
    myFavorites: [],
    allCharacters: [],

};

const rootReducer = (state = initialState, action) =>{
    switch(action.type) {
        case ADD_FAVORITE:
            return{
                ...state,
                allCharacters:[...state.allCharacters, action.payload],
                myFavorites:[...state.myFavorites, action.payload]
            }
        case DELETE_FAVORITE:
            const filteredFavorites = state.myFavorites.filter(fav=> fav.id !== action.payload)
            return{
                ...state,
                myFavorites: filteredFavorites
            }
        case FILTER:
            const filteredCopy = [...state.allCharacters]
            const filterGender = filteredCopy.filter(char=> char.gender === action.payload);
            return{
                ...state,
                myFavorites: filterGender,
            }
        case ORDER:
            const orderCopy = [...state.allCharacters];
            const order = orderCopy.sort((a,b) => {
                if(a.id > b.id){
                    return action.payload === "Ascendente" ? 1 : -1    // if (payload === "Ascendente") {return 1} else{return -1}
                }
                if(a.id < b.id){
                    return action.payload === "Ascendente" ? -1 : 1
                }
                else return 0
                });
            return {
                ...state,
                myFavorites: order,
            }


        default:
            return state;
    }
};

export default rootReducer;