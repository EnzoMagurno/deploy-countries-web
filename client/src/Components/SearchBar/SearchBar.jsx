import React, { useState } from 'react'
import { getCountryByName, resetPage } from '../../Redux/actions'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import style from './SearchBar.module.css'

const SearchBar = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
        dispatch(resetPage())
    }

    useEffect(() => {
        if (name) dispatch(getCountryByName(name))
    }, [dispatch, name])

    return (
        <>
            <div className={style.container}>
                <input type="text" onChange={handleChange} placeholder="Write here..." />
            </div >
        </>
    );
}

export default SearchBar