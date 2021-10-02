import {combineReducers, createStore} from "redux";
import {CartReducer} from "./CartReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {ProductReducer} from "./ProductReducer";
import {FormReducer} from './FormReducer';

export const rootReducer = combineReducers({
    cartReducer: CartReducer,
    productReducer: ProductReducer,
    formReducer: FormReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());