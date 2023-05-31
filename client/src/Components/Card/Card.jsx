import React from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <div className={style.card}>
            <Link className={style.anchor} to={`/detail/${props.id}`}>
                <h2>{props.name}</h2>
                <img className='img' src={props.flag} alt='Flag' />
            </Link>
            <h2>Continent: {props.continent}</h2>
        </div>
    )
}
export default Card
