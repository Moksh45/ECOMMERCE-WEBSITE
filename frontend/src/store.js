import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer } from './reducers/productReducers';


const reducer = combineReducers({
    products:productReducer,
});

let initialState = {};

const middleware = [thunk];

const store = configureStore(
    { reducer },
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;