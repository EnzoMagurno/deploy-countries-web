import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCountries } from '../../Redux/actions'
import { useSelector } from 'react-redux'
import Cards from '../../Components/Cards/Cards.jsx'
import Filters from '../../Components/Filters/Filters'
import SearchBar from '../../Components/SearchBar/SearchBar'
import styles from './Home.module.css'

const Home = () => {
    const countries = useSelector(state => state.countries)
    const country = useSelector(state => state.country)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return (
        <>
            <SearchBar />
            <Filters />
            <div className={styles.cardCountry}>
                {country.length > 0 ? (
                    <Cards countries={country} />
                ) : (
                    <Cards countries={countries} />
                )}
            </div>
        </>
    )
}

export default Home
