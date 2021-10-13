import { combineReducers } from "redux";
import  products from './products';
import  cart from './cart';
import mesage from "./mesage";

const appReducers = combineReducers({
    products,
    cart,
    mesage
});

export default appReducers;
   