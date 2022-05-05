import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getCountries} from '../Redux/index.js'
import SearchBar from "./Serchbar";
import { Link } from "react-router-dom";


const Home = () => {
    const country = useSelector( store => store.countries)

    const dispatch = useDispatch()

    const [page, setPage] = useState(0)

    const [Norder, setNorder] = useState("ASC")

    const [Porder, setPorder] = useState("")

    const [Cfilter, setCfilter] = useState("")

    const prev = ()=> {
        setPage(page - 10)
    }

    const next = () => {
        setPage(page + 10)
    }

    const nOrderHandler = (e) => {
        e.preventDefault();
        setPorder("")
        setNorder(e.target.value)
    }

    const pOrderHandler = (e) => {
        e.preventDefault();
        setNorder("")
        setPorder(e.target.value)
    }

    const cfilterHandler = (e) => {
        e.preventDefault();
        setCfilter(e.target.value)
    }

    const reRender = () => {
        dispatch(getCountries(page, Norder, Porder, Cfilter))
    }

    useEffect(()=>{
        dispatch(getCountries(page, Norder, Porder, Cfilter))
    },[dispatch, page, Norder, Porder, Cfilter])


    return(
        <>
        <div>
            <h1>Countries</h1>
            <button
            onClick={() => reRender()}>
                Rerender
            </button>
        </div>
        <div>
            <SearchBar/>
        </div>
        <div>
            <Link to="/activiy">
                <h3>Create Activity</h3>
            </Link>
        </div>
        <div>
        <h4>filtrar por continente:</h4>
            <select onChange={(e) => cfilterHandler(e)}>
                <option value=''>None</option>
                <option value='Africa'>Africa</option>
                <option value='Europe'>Europe</option>
                <option value='Antarctica'>Antarctica</option>
                <option value='Oceania'>Oceania</option>
                <option value='South America'>South America</option>
                <option value='North America'>North America</option>
                <option value='Asia'>Asia</option>
            </select>
        </div>
        <div>
            <h4>Ordenar por Nombre:</h4>
            <select onChange={(e) => nOrderHandler(e)}>
                <option value='ASC'>Asendente</option>
                <option value='DESC'>Desendente</option>
            </select>
        </div>
        <div>
            <h4>Ordenar por cantidad de poblacion:</h4>
            <select onChange={(e) => pOrderHandler(e)}>
                <option value='ASC'>Asendente</option>
                <option value='DESC'>Desendente</option>
            </select>
        </div>
        <div>
        {country.length > 0 ?
        
        country.map(c => (
        <div key={c.id}>
            <Link to={`/countries/${c.id}`}>
            <div>
                <img src={`${c.flag}`} alt='flag img'/>
            </div>
            <div>
                <h1>{c.name}</h1>
            </div>
            <div>
                <h3>{c.continet}</h3>
            </div>
            </Link>
        </div>
        ))
    : 
            <div>
                <h3>No de encontro el Pais</h3>
            </div>
    }
        <button onClick={()=> next()}
        disabled={country.length > 10}
        >Next</button>
        <button onClick={()=> prev()}
         disabled={page < 10}
        >Prev</button>
        </div>
        </>
    )
};

export default Home;