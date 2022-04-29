import { GET_COUNTRIES, GET_COUNTRY_DETAIL, ADD_ACTIVITY } from './ActionsTypes';
import axios from 'axios'

export function getCountries(){
    return dispatch => {
        return axios.get('http://localhost:3001/countries')
            .then(res => dispatch({type: GET_COUNTRIES, payload: res.data}))
            .catch()
    }
};

export function getCountryDetail(name){
    return dispatch => {
        return axios.get(`http://localhost:3001/countries?name=${name}`)
            .then(res => dispatch({type: GET_COUNTRY_DETAIL, payload: res.data}))
            .catch()
    }
};

export function addActivity(payload){
    return {type: ADD_ACTIVITY, payload}
}