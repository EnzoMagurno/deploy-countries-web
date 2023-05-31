import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRY = 'GET_COUNTRY'
export const GET_COUNTRY_BY_NAME = 'GET_COUNTRY_BY_NAME'
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'
export const GET_ACTIVITIES = 'GET_ACTIVITIES'
export const POST_ACTIVITY = 'POST_ACTIVITY'
export const ORDER_BY_ACTIVITIES = 'ORDER_BY_ACTIVITIES'
export const RESET_PAGE = 'RESET_PAGE'

export const getCountries = () => {
    return async function (dispatch) {
        try {
            const countries = (await axios.get(`http://localhost:3001/countries`)).data
            return dispatch({ type: GET_COUNTRIES, payload: countries })
        } catch (error) {
            console.log(error.message);
        }
    }
}


export const getCountry = (id) => {
    return async function (dispatch) {
        try {
            const country = await axios.get(`http://localhost:3001/countries/${id}`)
            return dispatch({ type: GET_COUNTRY, payload: country })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getCountryByName = (name) => {
    return async function (dispatch) {
        try {
            const country = (await axios.get(`http://localhost:3001/countries?name=${name}`)).data
            return dispatch({ type: GET_COUNTRY_BY_NAME, payload: country })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getActivities = () => {
    return async function (dispatch) {
        try {
            const response = (await axios.get('http://localhost:3001/countries/activities/all')).data
            return dispatch({ type: GET_ACTIVITIES, payload: response })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const postActivity = (payload) => {
    return async function (dispatch) {
        try {
            const response = await axios.post('http://localhost:3001/countries', payload)
            return dispatch({ type: POST_ACTIVITY, payload: response })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const filterByContinent = (payload) => {
    return { type: FILTER_BY_CONTINENT, payload }
}

export const orderByName = (payload) => {
    return { type: ORDER_BY_NAME, payload }
}

export const orderByPopulation = (payload) => {
    return { type: ORDER_BY_POPULATION, payload }
}

export const orderByActivities = (payload) => {
    return { type: ORDER_BY_ACTIVITIES, payload }
}

export const nextPage = () => {
    return { type: NEXT_PAGE }
}

export const prevPage = () => {
    return { type: PREV_PAGE }
}

export const resetPage = () => {
    return { type: RESET_PAGE }
}