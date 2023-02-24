
import { combineReducers, createStore } from 'redux'
import cal from '../modules/cal'
const rootReducer = combineReducers({
    cal:cal
})
const store = createStore(rootReducer)


export default store