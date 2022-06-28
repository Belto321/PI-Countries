import React from "react";
import img from '../favicon.png';
import './Loading.css';

const Loading = () => {
    return(
        <div className="loadingContainer">
            <img alt="Loading" className="loadingLogo" src={img}></img>
            <h1 className="loading">Loading...</h1>
        </div>
    )
}

export default Loading;