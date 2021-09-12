import {combineReducers, createStore} from "redux";
import {CartReducer} from "./CartReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {ProductReducer} from "./ProductReducer";

export const rootReducer = combineReducers({
    cartReducer: CartReducer,
    productReducer: ProductReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());