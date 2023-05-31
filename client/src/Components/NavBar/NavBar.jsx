import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import style from './NavBar.module.css'

const NavBar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const returnToHome = () => {
        if (location.pathname === '/home') window.location.reload()
        else navigate('/home')
    }

    return (
        <div className={style.mainContainer}>
            <Link className={style.link} to={'/home'} onClick={returnToHome}>HOME</Link>
            <Link className={style.link} to={'/form'}>ACTIVITIES</Link>
        </div>
    )
}
export default NavBar