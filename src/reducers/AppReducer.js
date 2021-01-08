import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    AUTH_ERROR,
    LOAD_USER,
    LOG_OUT,
    GET_TRANSACTIONS,
    ADD_TRANSACTION,
    ALL_TRANSACTIONS,
    ALL_USERS,
    TRANSACTION_ERROR,
    USERS_ERROR,
    DELETE_TRANSACTION,
    UPDATE_TRANSACTION,
    LOGIN_ADMIN_SUCCESS,
    LOGIN_ADMIN_ERROR,
    DELETE_USER,
    LOAD_ADMIN,
    ADMIN_LOGOUT,
    ALL_TRANSACTIONS_ERROR,
    SEARCH_TRANSACTION

} from '../constants/constants'

const initialState = {
    token: localStorage.getItem('token'),
    isLoggedIn: false,
    transactions: [],
    user: {},
    adminUser: {},
    search: {},
    allTransactions: [],
    users: [],
    isAdmin: false,
    isLoading: true,
    error: {}
}

const appReducer = (state = initialState, action) => {

    const { payload, type } = action
    switch (type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                isLoggedIn: true
            }

        case LOAD_USER:
            localStorage.getItem('token')
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            }

        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                isLoggedIn: false,
                error: payload
            }

        case LOG_OUT:
            localStorage.removeItem('token')
            return {
                ...state,
                isLoggedIn: false
            }

        case GET_TRANSACTIONS:
            return {
                ...state,
                isLoading: false,
                transactions: action.payload
            }

        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

        case TRANSACTION_ERROR:
            return {
                ...state,
                error: payload
            }

        case SEARCH_TRANSACTION:
            return {
                ...state,
                search: action.payload
            }

        case ALL_TRANSACTIONS:
            return {
                ...state,
                isLoading: false,
                allTransactions: action.payload
            }

        case UPDATE_TRANSACTION:
            return {
                ...state,
                allTransactions: [action.payload, ...state.allTransactions]
            }

        case DELETE_TRANSACTION:
            return {
                ...state,
                allTransactions: state.allTransactions.filter(transaction => transaction._id !== action.payload)
            }

        case ALL_USERS:
            return {
                ...state,
                isLoading: false,
                users: action.payload
            }

        case LOGIN_ADMIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                isLoggedIn: true,
                isAdmin: true
            }

        case LOAD_ADMIN:
            localStorage.getItem('token')
            return {
                ...state,
                isAdmin: true,
                isLoggedIn: true,
                adminUser: action.payload
            }

        case ADMIN_LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                isLoggedIn: false,
                isAdmin: false
            }

        case LOGIN_ADMIN_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                isAdmin: false,
                isLoggedIn: false,
                error: payload
            }

        case DELETE_USER:
            return {
                ...state,
                isLoading: false,
                users: state.users.filter(user => user._id !== action.payload)
            }

        case ALL_TRANSACTIONS_ERROR:
            return {
                ...state,
                error: payload
            }

        case USERS_ERROR:
            return {
                ...state,
                error: payload
            }

        default:
            return state
    }

}

export default appReducer