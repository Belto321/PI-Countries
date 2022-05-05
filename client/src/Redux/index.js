import { GET_COUNTRIES, GET_COUNTRY_DETAIL, ADD_ACTIVITY, GET_NAME_COUNTRIES } from './ActionsTypes';
import axios from 'axios'

export function getCountries( page, Norder, Porder, Cfilter){
    return dispatch => {
        return axios.get(`http://localhost:3001/countries?page=${page}&Norder=${Norder}&Porder=${Porder}&Cfilter=${Cfilter}`)
     
            .then(res => dispatch({type: GET_COUNTRIES, payload: res.data}))
            .catch()
    }
};

export function getNameCountries(name){
    return dispatch => {
        return axios.get(`http://localhost:3001/countries?name=${name}`)

            .then(res => dispatch({type: GET_NAME_COUNTRIES, payload: res.data}))
            .catch()
    }
};

export function getCountryDetail(id){
    return dispatch => {
        return axios.get(`http://localhost:3001/countries/${id}`)
            .then(res => dispatch({type: GET_COUNTRY_DETAIL, payload: res.data}))
            .catch()
    }
};

export function addActivity(payload){
    return dispatch => {
        return axios.post(`http://localhost:3001/activity`, payload)
            .catch()
    }
}