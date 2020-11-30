import {
    FILMS_STATE,
    NUMBER_OF_ITEMS,
    DAY_FOR_AXIOS,
  } from '../actionTypes';

const initialState = {
    films: [],
    numberOfItems: 2,
   // dayForAxios: this.props.route.params.day,


};

const app = (state = initialState, action) => {
  switch (action.type) {
   case FILMS_STATE: {

      return {
        ...state,
        films: action.payload,
      };
    }

      case NUMBER_OF_ITEMS: {
          return {
              ...state,
              numberOfItems: action.payload,
          };
      }
      case DAY_FOR_AXIOS: {
          return {
              ...state,
              dayForAxios: action.payload,
          };
      }

    default: return state;
  }

};

export default app;
