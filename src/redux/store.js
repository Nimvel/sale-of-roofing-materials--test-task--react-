import { combineReducers, legacy_createStore as createStore } from 'redux';
import concontentReducer from './content-reducer';
import headerReducer from './header-reducer';

let reducers = combineReducers({
    header: headerReducer,
    contentPage: concontentReducer
})

let store = createStore(reducers);

export default store;