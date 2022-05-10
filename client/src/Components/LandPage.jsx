import React from 'react'
import {Link} from 'react-router-dom'
import img from "../banderas-siluetas-696x474.png"
import './LandPage.css'

const LandPage =  ()=>{
    return (
        <div >
            <nav className='NavTitle'>
                <h1>The world make up of countries</h1>
            </nav>
            <div className='LPcontainer'>
                <div className='imgDiv'>
                    <img src={img} alt='inicial img' />
                </div>
                <div>
                    <div className='tx'>
                        <h5>Learn about the wide variety of countries that make up our world</h5>
                    </div>
                    <div >
                        <Link to="/countries">
                            <h3 className='LPbutton'>Jump On It</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandPage;