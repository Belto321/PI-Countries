import React from 'react'
import {Link} from 'react-router-dom'
import img from "../countries.png"
import './LandPage.css'

const LandPage =  ()=>{
    return (
        <div>
            <div>
                <h1>The world make up of countries</h1>
            </div>
            {/* <div className='lp_img'>
                <img src={img} alt='inicial img' />
            </div> */}
            <div>
                <h5>Learn about the wide variety of countries that make up our world</h5>
            </div>
            <div>
                <Link to="/countries">
                    <h3>Jump On It</h3>
                </Link>
            </div>
        </div>
    )
}

export default LandPage;