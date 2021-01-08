import { createStore, applyMiddleware } from 'redux'
import appReducer from '../reducers/AppReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const middleware = [thunk]

const intialState = {}

const store = createStore(
    appReducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store