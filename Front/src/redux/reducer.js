import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, GET_FAVS } from './actions';

const initialState ={
    idUser: 0,
    myFavorites: [],
    allMyFavorites: [],

};

const rootReducer = (state = initialState, action) =>{
    switch(action.type) {
        case GET_FAVS:
            return{
                ...state,
                myFavorites: [...action.payload],
                allCharacters: [...action.payload]
            }
        case ADD_FAVORITE:
            const addFavorites = [...state.allMyFavorites, action.payload];
            return{
                ...state,
                allMyFavorites: [...addFavorites],
                myFavorites: [...addFavorites],
            }
        case DELETE_FAVORITE:
            const deleteFavorites = state.allMyFavorites.filter(
                (e) => e.id !== action.payload
              );
              return {
                ...state,
                allMyFavorites: [...deleteFavorites],
                myFavorites: [...deleteFavorites],
              };
        case FILTER:
            return {
                ...state,
                myFavorites: state.allMyFavorites.filter(
                  (e) => e.gender === action.payload
                ),
              };
        case ORDER:
            let orderFunction =
            action.payload === "Ascendente"
              ? (a, b) => {
                  return a.id > b.id ? 1 : -1;
                }
              : (a, b) => {
                  return a.id < b.id ? 1 : -1;
                };
          let orderFavorites = state.myFavorites.sort(orderFunction);
          return {
            ...state,
            myFavorites: [...orderFavorites],
          };
        case "RESET":
          return {
            ...state,
            myFavorites: state.allMyFavorites,
          };
        case "LOGIN":
          return {
            ...state,
            idUser: action.payload,
          };
        default:
          return { ...state };
      }
    };

export default rootReducer;