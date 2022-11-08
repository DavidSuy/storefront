import { createStore, combineReducers } from 'redux';
import categoryReducer from './categories';
import productReducer from './products';

const reducers = {
  categories: categoryReducer,
  products: productReducer,
};

export default createStore(combineReducers(reducers));
