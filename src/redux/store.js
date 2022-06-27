import { combineReducers, legacy_createStore as createStore } from 'redux';
import concontentReducer from './content-reducer';
import headerReducer from './header-reducer';
import submitApplicationReducer from './submit-application-reducer';

let reducers = combineReducers({
    header: headerReducer,
    contentPage: concontentReducer,
    SubmitApplicationBlock: submitApplicationReducer,
})

let store = createStore(reducers);

export default store;

window.store = store;