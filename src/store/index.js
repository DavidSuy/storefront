import { createStore, combineReducers } from 'redux';
import categoryReducer from './categories';
import productReducer from './products';
import { cartReducer } from './cart';

const reducers = {
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
};

export default createStore(combineReducers(reducers));
