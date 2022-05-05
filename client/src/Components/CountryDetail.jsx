import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getCountryDetail} from '../Redux/index'
import { useParams } from 'react-router-dom'

const CountryDetail = (props) =>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const country = useSelector(state => state.countryDetail)
    console.log(id)
    useEffect(()=>{
        
        dispatch(getCountryDetail(id))
    },[dispatch, id])
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