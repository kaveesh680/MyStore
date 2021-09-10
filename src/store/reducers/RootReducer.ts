import {combineReducers, createStore} from "redux";
import {CartReducer} from "./CartReducer";
import {composeWithDevTools} from "redux-devtools-extension";

export const rootReducer = combineReducers({
    cartReducer: CartReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());