import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Earth.module.css'
const Earth = () => {
    return (
        <div className={styles.container}>
            <img src="https://media.npr.org/assets/img/2013/03/06/bluemarble3k-smaller-nasa_custom-644f0b7082d6d0f6814a9e82908569c07ea55ccb-s1200-c85.webp" alt="background" />
            <Link to='/home'>COUNTRIES</Link>
        </div>
    )
}
export default Earth
