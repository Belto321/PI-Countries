import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getCountries} from '../Redux/index.js'
import SearchBar from "./Serchbar";

const Home = () => {
    const country = useSelector( store => store.countries)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])

    return(
        <>
        <div>
            <h1>Countries</h1>
        </div>
        <div>
            <SearchBar/>
        </div>
        <div>
        {country.map(c => (
        <div key={c.id}>
            <div>
                <img src={`${c.flag}`} alt='flag img'/>
            </div>
            <div>
                <h1>{c.name}</h1>
            </div>
            <div>
                <h3>{c.continet}</h3>
            </div>
        </div>
        ))}
        </div>
        </>
    )
};

export default Home;