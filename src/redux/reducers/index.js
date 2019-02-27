import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import cartReducer from './cart-reducer';
import langReducer from './lang-reducer';

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer,
  language: langReducer,
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;