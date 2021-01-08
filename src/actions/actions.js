import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    AUTH_ERROR,
    LOAD_USER,
    LOG_OUT,
    GET_TRANSACTIONS,
    ALL_TRANSACTIONS,
    ALL_USERS,
    ADD_TRANSACTION,
    TRANSACTION_ERROR,
    USERS_ERROR,
    DELETE_TRANSACTION,
    DELETE_USER,
    ALL_TRANSACTIONS_ERROR,
    UPDATE_TRANSACTION,
    LOGIN_ADMIN_SUCCESS,
    LOAD_ADMIN,
    ADMIN_LOGOUT,
    LOGIN_ADMIN_ERROR,
    SEARCH_TRANSACTION

} from '../constants/constants'
import { setToken } from '../setToken'
import axios from 'axios'

export const loadUser = () => async dispatch => {
    if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'))
    }

    try {

        const response = await axios.get('https://expensetracker2020-api.herokuapp.com/api/user/profile')
        dispatch({
            type: LOAD_USER,
            payload: response.data
        })

    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error.response.data.message
        })
    }
}

export const registerUser = (user) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await axios.post('https://expensetracker2020-api.herokuapp.com/api/user/register', user, config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        })

        dispatch(loadUser())

    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data.message
        })
    }
}

export const loginUser = (user) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.post('https://expensetracker2020-api.herokuapp.com/api/user/login', user, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })

        dispatch(loadUser())

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

export const logOut = () => async dispatch => {
    dispatch({
        type: LOG_OUT
    })
}

export const getTransactions = () => async dispatch => {

    try {

        const response = await axios.get('https://expensetracker2020-api.herokuapp.com/api/transactions')
        dispatch({
            type: GET_TRANSACTIONS,
            payload: response.data.transactions
        })

    } catch (error) {
        dispatch({
            type: TRANSACTION_ERROR,
            payload: error.response.data.message
        })
    }

}

export const addTransaction = (transaction) => async dispatch => {

    try {

        const response = await axios.post('https://expensetracker2020-api.herokuapp.com/api/transactions', transaction, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        dispatch({
            type: ADD_TRANSACTION,
            payload: response.data.transactions
        })

        dispatch(getTransactions())

    } catch (error) {
        dispatch({
            type: TRANSACTION_ERROR,
            payload: error.response.data.message
        })
    }

}

export const searchTransaction = (query) => async dispatch => {
    try {

        const response = await axios.get('https://expensetracker2020-api.herokuapp.com/api/transactions/search', query)
        dispatch({
            type: SEARCH_TRANSACTION,
            payload: response.data
        })
    } catch (error) {
    dispatch({
        type: TRANSACTION_ERROR,
        payload: error.message
    })
}
}

export const adminTransactions = () => async dispatch => {

    try {

        const response = await axios.get('https://expensetracker2020-api.herokuapp.com/api/admin/transactions')
        dispatch({
            type: ALL_TRANSACTIONS,
            payload: response.data.transactions
        })

    } catch (error) {
        dispatch({
            type: ALL_TRANSACTIONS_ERROR,
            payload: error
        })
    }

}

export const adminUsers = () => async dispatch => {

    try {

        const response = await axios.get('https://expensetracker2020-api.herokuapp.com/api/admin/users')
        dispatch({
            type: ALL_USERS,
            payload: response.data.users
        })

    } catch (error) {
        dispatch({
            type: USERS_ERROR,
            payload: error
        })
    }

}

export const deleteTransaction = (id) => async dispatch => {

    try {

        await axios.delete(`https://expensetracker2020-api.herokuapp.com/api/admin/transaction/${id}`)
        dispatch({
            type: DELETE_TRANSACTION,
            payload: id
        })

    } catch (error) {
        dispatch({
            type: ALL_TRANSACTIONS_ERROR,
            payload: error.response.data.message
        })
    }

}

export const editTransaction = (props) => async dispatch => {

    try {

        await axios.put(`https://expensetracker2020-api.herokuapp.com/api/admin/transaction/${props.match.params.id}`)
        dispatch({
            type: UPDATE_TRANSACTION,
            payload: props.match.params.id
        })

    } catch (error) {
        dispatch({
            type: ALL_TRANSACTIONS_ERROR,
            payload: error.message
        })
    }

}

export const deleteUser = (id) => async dispatch => {

    try {

        await axios.delete(`https://expensetracker2020-api.herokuapp.com/api/admin/user/${id}`)
        dispatch({
            type: DELETE_USER,
            payload: id
        })

    } catch (error) {
        dispatch({
            type: USERS_ERROR,
            payload: error
        })
    }

}


export const loadAdmin = () => async dispatch => {
    if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'))
    }

    try {

        const response = await axios.get('https://expensetracker2020-api.herokuapp.com/api/admin')
        dispatch({
            type: LOAD_ADMIN,
            payload: response.data
        })

    } catch (error) {
        dispatch({
            type: LOGIN_ADMIN_ERROR,
            payload: error.response.data.message
        })
    }
}

export const adminLogin = (user) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.post('https://expensetracker2020-api.herokuapp.com/api/admin/login', user, config)
        dispatch({
            type: LOGIN_ADMIN_SUCCESS,
            payload: response.data
        })

        dispatch(loadAdmin())

    } catch (error) {
        dispatch({
            type: LOGIN_ADMIN_ERROR,
            payload: error.response.data.message
        })
    }
}

export const adminLogout = () => async dispatch => {
    dispatch({
        type: ADMIN_LOGOUT
    })
}