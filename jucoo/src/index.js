import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'lib-flexible';
import {Provider} from "react-redux"
import store from "./store"
import "./assets/css/reset.css"
import MyMoney from "./views/MyMoney";
 import Myintegral from "./views/Myintegral";
 // ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
 ReactDOM.render(<MyMoney/>, document.getElementById('root'));
//ReactDOM.render(<Myintegral/>, document.getElementById('root'));
//
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
