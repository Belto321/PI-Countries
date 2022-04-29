import React from "react";
import {Link} from 'react-router-dom'
const SearchBar = () => {

    


    const [name, setName] = React.useState({
        name: ''
    })
    function handleChange(e){
        setName(
            e.target.name = e.target.value
        )
          }    
         
    return (
        <div>
        
          <Link to={`/countries/${name}`}><h3>Search Country</h3></Link> <input type="text" name="name" onChange={handleChange}/>
        
        </div>
        )
}

export default SearchBar;