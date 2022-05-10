import React, { useState } from "react";
import { useDispatch} from 'react-redux';
import {getNameCountries} from '../Redux/index.js'
import './searchBar.css'

const SearchBar = () => {
    const dispatch = useDispatch()
 

    const [name, setName] = useState('')
    const nameSearch = () => {
        dispatch(getNameCountries(name))
    }
    function handleChange(e){
        setName(e.target.value)
          }
         
    return (
        <div className='searchBar'>
        
          <button className="button" onClick={() => nameSearch()}>
              Search Country
          </button>
          <input className="input" type="text" 
          placeholder="Search..."
           onChange={(e) => handleChange(e)}/>
        
        </div>
        )
}

export default SearchBar;