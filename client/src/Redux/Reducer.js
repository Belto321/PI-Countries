import { GET_COUNTRIES, GET_COUNTRY_DETAIL, GET_ACTIVITY, GET_NAME_COUNTRIES, GET_CLEAN } from './ActionsTypes';

const initialState = {
    countries: [],
    countryDetail: {},
    activities: []
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
      case GET_COUNTRIES:
        return {
          ...state,
          countries: payload,
        };
        case GET_NAME_COUNTRIES:
        return {
          ...state,
          countries: [payload],
        };
      case GET_COUNTRY_DETAIL:
          return {
              ...state,
              countryDetail: payload
          };
      case GET_ACTIVITY:
        return {
          ...state,
          activities: payload
        };
        case GET_CLEAN:
          return {
              ...state,
              countryDetail: {}
          };
      default:
          return state
    }
}