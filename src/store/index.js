import { createStore, combineReducers } from 'redux';
import categoryReducer from './categories';

const reducers = {
  categories: categoryReducer,
};

export default createStore(combineReducers(reducers));
