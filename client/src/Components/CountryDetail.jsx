import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getCountryDetail} from '../Redux/index'
import { useParams } from 'react-router-dom'

const CountryDetail = (props) =>{
    const {name} = useParams()
    const dispatch = useDispatch()
    const country = useSelector(store => store.countryDetail)

    useEffect(()=>{
        dispatch(getCountryDetail(name))
    },[dispatch, name])
    return (
        <div>
            <div>
                <h1>{country.name}</h1>
            </div>
            <div>
                <img src={country.flag} alt='country img'/>
            </div>
            <div>
                <h3>{country.continet}</h3>
                <h3>{country.id}</h3>
                <h3>{country.capital}</h3>
            </div>
        </div>
    )
}

export default CountryDetail;