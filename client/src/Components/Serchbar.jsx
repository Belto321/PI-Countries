import React, {useEffect, useState} from "react";
import { useDispatch} from 'react-redux';
import {getNameCountries} from '../Redux/index.js'


const SearchBar = () => {
    const dispatch = useDispatch()
 

    const [name, setName] = useState('')
    const nameSearch = () => {
        dispatch(getNameCountries(name))
    }
    function handleChange(e){
        setName(e.target.value)
          }
        // useEffect(() => {
        //     dispatch(getNameCountries(name))
        // },[dispatch, name])    
         
    return (
        <div>
        
          <button onClick={() => nameSearch()}>
              Search Country
          </button>
          <input type="text" 
          placeholder="Search..."
           onChange={(e) => handleChange(e)}/>
        
        </div>
        )
}

export default SearchBar;