import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getCountryDetail} from '../Redux/index'
import { useParams, Link } from 'react-router-dom'
import './CountryDetail.css'

const CountryDetail = (props) =>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const country = useSelector(state => state.countryDetail)

    const {turist_activities} = country

    useEffect(()=>{
        
        dispatch(getCountryDetail(id))
    },[dispatch, id])
    return (
        <div>
            <div className="CoutryName">
                <h1>{country.name}</h1>
                <h3>{country.id}</h3>
            </div>
            <div className="DetailContainer">
                <div className="CDimg">
                    <img src={country.flag} alt='country img'/>
                </div>
                <div>
                    <h3 className="h3Data">Continent: {country.continet}</h3>
                    <h3 className="h3Data">Subregion: {country.subregion}</h3>
                    <h3 className="h3Data">Capital: {country.capital}</h3>
                    <h3 className="h3Data">Area: {country.area} Km2</h3>
                    <h3 className="h3Data">Population: {country.population}</h3>
                    <h3 className="h3Data">Activities:</h3>
                     {turist_activities?.map(act =>(
                      <h4> - {act.name}</h4>
                     ))}
                </div>
            </div>
            <div>
                <Link to="/countries">
                    <h3 className="GoBack">Go Back</h3>
                </Link>
            </div>
        </div>
    )
}

export default CountryDetail;