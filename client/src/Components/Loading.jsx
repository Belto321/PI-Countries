import React from "react";
import img from '../favicon.png';
import styles from './Loading.css';

const Loading = () => {
    return(
        <div className={styles.loadingContainer}>
            <img alt="Loading" className={styles.loadingLogo} src={img}></img>
            <h1 className={styles.loading}>Loading...</h1>
        </div>
    )
}

export default Loading;