import { GET_COUNTRIES, GET_COUNTRY_DETAIL, ADD_ACTIVITY } from './ActionsTypes';

const initialState = {
    countries: [],
    countryDetail: {}
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
      case GET_COUNTRIES:
        return {
          ...state,
          countries: payload,
        };
      case GET_COUNTRY_DETAIL:
          return {
              ...state,
              countryDetail: payload
          };
      default:
          return state
    }
}