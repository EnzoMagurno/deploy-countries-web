import React from 'react'
import Card from '../Card/Card'
import style from '../Cards/Cards.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { nextPage, prevPage } from '../../Redux/actions'
import Paginate from '../Paginate/Paginate'

const Cards = ({ countries }) => {
    const numPage = useSelector(state => state.numPage)
    const dispatch = useDispatch()
    const countryArray = Array.isArray(countries) ? countries : [];
    let from = (numPage - 1) * 10
    let until = numPage * 10
    let pages = Math.ceil(countryArray?.length / 10)
    let views = countryArray?.slice(from, until)
    const next = () => dispatch(nextPage())
    const prev = () => dispatch(prevPage())
    return (
        <div>
            <Paginate pages={pages} next={next} prev={prev} />
            <div className={style.cardsContainer}>
                {views?.map(country => (
                    <Card
                        id={country.id}
                        key={country.id}
                        name={country.name}
                        flag={country.flag}
                        continent={country.continent}
                        capital={country.capital}
                        subregion={country.subregion}
                        area={country.area}
                        population={country.population}
                        activities={country.activities}
                    />

                ))}
            </div>
        </div>
    );
}
export default Cards