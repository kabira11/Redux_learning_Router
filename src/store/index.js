import {createStore , applyMiddleware} from 'redux'
//thunk helps to dispatch
import thunk from 'redux-thunk'
import allReducers from './reducers'

//three parameters in createStore()
//first param is reducer
const store = createStore(
    allReducers,
    {},
    applyMiddleware(thunk)
)

export default store;