import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import SessionReducer from './sessionDucks';
import ConfigReducer from './configDucks';

const rootReducer = combineReducers({
    session : SessionReducer,
    configReducer : ConfigReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function GenerateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}