import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getCountries, getActivity} from '../Redux/index.js'
import SearchBar from "./Serchbar";
import { Link } from "react-router-dom";
import './Home.css'
import Loading  from './Loading'

let j = 0
let i = 1

const Home = () => {
    const country = useSelector( store => store.countries)
    const activities = useSelector(store => store.activities)
    const dispatch = useDispatch()

    const [page, setPage] = useState(0)

    const [Norder, setNorder] = useState("ASC")

    const [Porder, setPorder] = useState("")

    const [Cfilter, setCfilter] = useState("")

    const [Afilter, setAfilter] = useState("")
    
    

    const pobSort = () =>{
        j ++;
        if(j % 2 === 0) setPorder("DESC")
        else setPorder("ASC")
        setNorder("")
    }

    const nameSort = () =>{
        i ++;
        if(i % 2 === 0) setNorder("DESC")
        else setNorder("ASC")
        setPorder("")
    }
    const prev = ()=> {
        setPage(page - 10)
    }

    const next = () => {
        setPage(page + 10)
    }

    const cfilterHandler = (e) => {
        e.preventDefault();
        setCfilter(e.target.value)
    }

    const afilterHandler = (e) => {
        e.preventDefault();
        setAfilter(e.target.value)
    }

    const reRender = () => {
        setPorder("")
        setPage(0)
        setNorder('ASC')
        setCfilter("")
        setAfilter("")
        i = 1
        j = 0
    }

    useEffect(()=>{
        dispatch(getCountries(page, Norder, Porder, Cfilter, Afilter))
        dispatch(getActivity())
    },[dispatch, page, Norder, Porder, Cfilter, Afilter])
 
    if(country.length === 0) return(<Loading></Loading>)
    return(
        <>
        <div className="navBar">
            <div className="Htitle">
                <h1>Countries</h1>  
            </div>
            
                <Link className="link" to="/activiy">
                    <button className="createActivitybut">Create Activity</button>
                </Link>
                <SearchBar />
        </div>
        <div >
            <button className='RenderButton'
            onClick={() => reRender()}>
                Rerender
            </button>
           
            
        </div>
        <div className="filterContainer">
           
        
        <div>
        <h4>Filter by continent:</h4>
            <select className="Hselect" onChange={(e) => cfilterHandler(e)}>
                <option value=''>All</option>
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
       
        <h4>Filter by activity:</h4>
            <select className="Hselect" onChange={(e) => afilterHandler(e)}> 
                    <option value="">All</option>
                {activities.map( (act) => 
                    <option value={act.name} key={act.id}>{act.name}</option>
                )}
            </select>
            
        </div>
        <div>
            <h4>Sort by name:</h4>
            <button className='RenderButton'
            onClick={() => nameSort()}>
                {Norder === "DESC" ? "Z - A" : "A - Z"}
            </button>
        </div>
        <div>
            <h4>Sort by amount of population:</h4>
             <button className='RenderButton'
            onClick={() => pobSort()}>
                {Porder === "DESC" ? "Descending" : "Ascending"}
            </button>
        </div>
        </div>
       <div className="containerContainer">  
        {country.includes("Country not found") ? 
            <div>
                <h3>No counties found</h3>
            </div>
             :
        
        country.map(c => (
        <div className="cardContainer" key={c.id}>
            <Link className="link" to={`/countries/${c.id}`}>
            <div>
                <h1>{c.name}</h1>
            </div>
            <div>
                <h3>{c.continet}</h3>
            </div>
            <div>
                <img className="flag_img" src={`${c.flag}`} alt='flag img'/>
            </div>
            </Link>
        </div>
        ))
    } 
        </div>
        <div >
        <button className="prevNext" onClick={()=> prev()}
         disabled={page < 10}
        >{"<= Prev"}</button>
        <button className="prevNext" onClick={()=> next()}
        disabled={country.length > 10}
        >{"Next => "}</button>
        </div>
        </>
    )

};

export default Home;