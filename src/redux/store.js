import { combineReducers, legacy_createStore as createStore } from 'redux';
import concontentReducer from './content-reducer';

let reducers = combineReducers({
    contentPage: concontentReducer
})

let store = createStore(reducers);

export default store;