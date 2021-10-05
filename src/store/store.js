import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { weatherReducer } from './reducers/weatherReducer';
import { favoritesReducer } from './reducers/favoritesReducer';

const rootReducer = combineReducers({
    weatherReducer,
    favoritesReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))