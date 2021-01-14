import { combineReducers } from 'redux';
import { Reducer } from './Reducer';


const RootReducer = combineReducers({
    search : Reducer
})

export default RootReducer;