import { useDispatch, useSelector } from "react-redux";
import { filterByContinent, orderByPopulation, orderByName, orderByActivities, getActivities, resetPage } from "../../Redux/actions";
import styles from './Filters.module.css'
import { useEffect } from "react";


const Filters = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state)
    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])

    const handlerFilterByContinent = (event) => {
        const continent = event.target.value
        dispatch(filterByContinent(continent))
        dispatch(resetPage())
    }
    const handlerOrderByName = (event) => {
        const name = event.target.value
        dispatch(orderByName(name))
        dispatch(resetPage())
    }
    const handlerByPopulation = (event) => {
        const mayor = event.target.value;
        dispatch(orderByPopulation(mayor))
        dispatch(resetPage())
    }

    const handlerACtivities = (event) => {
        const activity = event.target.value
        dispatch(orderByActivities(activity));
        dispatch(resetPage())
    }

    return (
        <div className={styles.container}>
            <select className={styles.select} onChange={handlerOrderByName}>
                <option>Filter</option>
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
            </select>

            <select className={styles.select} onChange={handlerFilterByContinent}>
                <option value="All">All</option>
                <option value="Americas">America</option>
                <option value="Europe">Europa</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
            </select>

            <select className={styles.select} onChange={handlerByPopulation}>
                <option>By population</option>
                <option value="Higher">Higher population</option>
                <option value="Lower">Lower population</option>
            </select>

            <select className={styles.select} onChange={handlerACtivities}>
                <option >By Activities</option>
                {state.activities?.map((e) => {
                    return <option key={e.id} value={e.name}>{e.name}</option>
                })}
            </select>
        </div>
    )
}

export default Filters;