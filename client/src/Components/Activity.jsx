import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../Redux';
import axios from 'axios'


const Activity = () => {

const dispatch = useDispatch()
const country = useSelector( store => store.countries)
    const [ formValues, handleInputChange, setValues ] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: ''
      });
    const [addC, setAddC] = useState([])

      const { name, difficulty, duration, season} = formValues

      const addCountry = (e) => {
    
        setAddC([...addC, e.target.value])
        }
        
    const setSeason = (e) => {
        setValues({
            ...formValues,
            [season]: e.target.value
        })
    }

        const handleDelete = (id) => {
            const deletedC = addC.filter( c => c.id !== id )
            setAddC(deletedC)
          }

      useEffect(()=> {
          dispatch(getCountries())
      }, [dispatch])

      return (
          <form>
        <fieldset>
        <legend>Set your new Activity data:</legend>
        <label>Activty Name:</label>
        <input type="text" name="name"  value={ name } onChange={ handleInputChange } required/>
        <label>Difficulty:</label>
        <input type="number" name="difficulty"  value={ difficulty } onChange={ handleInputChange } required/>
        <label>Duration:</label>
        <input type="number" name="duration"  value={ duration } onChange={ handleInputChange } required/>
        <label>Season:</label>
        <select onChange={setSeason}>
            <option value="">None</option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
        </select>
        

        <label>Counties where this activity could be practice:</label>
            <select onChange={ addCountry }>
                {
                    country.map( c => 
                        <option
                         key={c.id}
                         value={{name: c.name,
                                 id: c.id}}>
                         {c.name}</option>
                    )
                }
            </select>
            <div >
            {
              addC.map( (c, i) => (
                <div key={ i }>
                  <p>{ c.value }</p>
                  <button
                    type= "button" onClick={ () => handleDelete(c.id) }
                  >x</button>
                </div>
              ) )
            }
          </div>
          <button type="submit">Create</button>
        </fieldset>
        </form>
      )
}

export default Activity;