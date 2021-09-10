import React from 'react';
import './App.css';
import Client from "./Client";
import './assets/style_sheets/main.scss';
import {Provider} from "react-redux";
import {store} from "./store/reducers/RootReducer";

function App() {
    return (
        <div>
            <Provider store={store}>
                <Client/>
            </Provider>
        </div>
    );
}

export default App;
