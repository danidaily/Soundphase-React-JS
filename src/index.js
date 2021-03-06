import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
/*Рендер дерева */

ReactDOM.render(<BrowserRouter>

    <Provider store={store}>
        <App/>
    </Provider>
</BrowserRouter>, document.getElementById('root'));
//CTRL+ALT+SHIFT+J выбрать все появления переменной


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
