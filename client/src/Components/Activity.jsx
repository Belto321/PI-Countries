import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../Redux';
import axios from 'axios'
import './activity.css'

const validate = (state) => {
  const errors = {}
  if(!state.name){
    errors.name = 'Name is required'
  }else if(!state.name.match(/^[a-zA-Z_ ]*$/)){
    errors.name = 'Name must have only letters'
  }
  if(!state.difficulty){
    errors.difficulty = 'Difficulty is required'
  }else if(state.difficulty < 0 || state.difficulty > 5){
    errors.difficulty = 'Difficulty must be beatween 1 and 5'
  }
  if(!state.duration){
    errors.duration = 'Duration is required'
  }
  if(!state.season){
    errors.season = 'Season is required'
  }
  if(!state.countries.length){
    errors.countries = 'Countries is required'
  }

  return errors
}

const Activity = () => {

const dispatch = useDispatch()
const country = useSelector( store => store.countries)
    const [ formValues, setValues ] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
      });
      const { name, difficulty, duration, season, countries} = formValues
    
      const [ formTest, setTest ] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
      });


      // const { Tname, Tdifficulty, Tduration, Tseason} = formTest

      const tester = () => {
          if(!name.match(/^[a-zA-Z_ ]*$/)) return false
          else if (difficulty < 0 || difficulty > 5) return false
          else if(duration.length === 0 || season.length === 0) return false
          else return true
      }

      const handleChange = (e) => {
        setValues(prevState => {
          const newState = {
          ...prevState,
          [e.target.name]: e.target.value
          };
          setTest(validate(newState))
          return newState
        })
      
      }

      const addCountry =  (e) => {
        // let addObj = {
        //     id: cId = cId + 1,
        //     value: e.target.value
        // }
        // console.log(addObj.id)
        //  setAddC([...addC, addObj])
         setValues({...formValues, countries: [...countries, e.target.value]})
        //  setAddC([...addC, e.target.value])
        }
        
    const setSeason = (e) => {
      setValues({
            ...formValues,
            season: e.target.value
        })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if(tester()) postNewActivivty()
    }

    const postNewActivivty = async() => {
      try {
      //   setValues({ ...formValues, countries: addC})
      console.log(formValues)
        await axios.post('http://localhost:3001/activity', formValues)
      } catch (error) {
        console.log(error.message)
      }
      alert('Activity created successfully')
    }

        const handleDelete = (name) => {
            console.log(name)
            const deletedC = countries.filter( c => c !== name )
            
            setValues({...formValues, countries: deletedC})
            // setAddC(deletedC)
          }

      useEffect(()=> {
          dispatch(getCountries())
      }, [dispatch])

      return (
          <form onSubmit={ handleSubmit} className='form'>
        <fieldset>
        <legend>Set your new Activity data:</legend>
        <div className='container'>
        <label>Activty Name:</label>
        <input type="text" name="name"  value={ name } onChange={ handleChange } required/>
        <span>{formTest.name || ""}</span>

        <label>Difficulty:</label>
        <input type="number" name="difficulty"  value={ difficulty } onChange={ handleChange } required/>
         <span>{formTest.difficulty || ""}</span>

        <label>Duration:</label>
        <input type="number" name="duration"  value={ duration } onChange={ handleChange } required/>
        <span>{formTest.duration || ""}</span>
        <label>Season:</label>
        <select onChange={setSeason}>
            <option value="">None</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
        </select>
        <span>{formTest.season || ""}</span>

        <label>Counties where this activity could be practice:</label>
            <select onChange={ addCountry }>
                {
                    country.map( c => 
                        <option
                         key={c.id}
                         value={c.name}>
                         {c.name}</option>
                    )
                }
            </select>
            <div >
            {
              countries?.map( (c, i) => (
                <div key={ i } className='addList'>
                  <p>{ c }</p>
                  <button className='delButton'
                    type= "button" onClick={ () => handleDelete(c) }
                  >x</button>
                </div>
              ) )
            }
            <span>{formTest.countries || ""}</span>
          </div>
          <button className='submit' type="submit">Create</button>
          </div>
        </fieldset>
        </form>
      )
}

export default Activity;