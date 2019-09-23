import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'lib-flexible';
import {Provider} from "react-redux"
import store from "./store"
import MyMoney from "./views/MyMoney";
// import Myintegral from "./views/Myintegral";
import Ticket from "./views/Ticket"
import Discount from "./views/Discount"
import FamilyCard from "./views/FamilyCard";
// import Integral from "./views/Integral";
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// ReactDOM.render(<Ticket />, document.getElementById('root'));
// ReactDOM.render(<FamilyCard />, document.getElementById('root'));
ReactDOM.render(<Discount />, document.getElementById('root'));

//ReactDOM.render(<Myintegral/>, document.getElementById('root'));
// ReactDOM.render(<SelectCity/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

