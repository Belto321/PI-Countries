import { GET_COUNTRIES, GET_COUNTRY_DETAIL, GET_ACTIVITY, GET_NAME_COUNTRIES } from './ActionsTypes';
import axios from 'axios'

export function getCountries( page, Norder, Porder, Cfilter, Afilter){
    return dispatch => {
        return axios.get(`/countries?page=${page}&Norder=${Norder}&Porder=${Porder}&Cfilter=${Cfilter}&Afilter=${Afilter}`)
     
            .then(res => dispatch({type: GET_COUNTRIES, payload: res.data}))
            .catch()
    }
};

export function getNameCountries(name){
    return dispatch => {
        return axios.get(`/countries?name=${name}`)

            .then(res => dispatch({type: GET_NAME_COUNTRIES, payload: res.data}))
            .catch()
    }
};

export function getCountryDetail(id){
    return dispatch => {
        return axios.get(`/countries/${id}`)
            .then(res => dispatch({type: GET_COUNTRY_DETAIL, payload: res.data}))
            .catch()
    }
};

export function getActivity(){
    return dispatch => {
        return axios.get(`/activity`)
        .then(res => dispatch({type: GET_ACTIVITY, payload: res.data}))
            .catch()
    }
}