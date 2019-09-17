import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'lib-flexible';
import {Provider} from "react-redux";
import store from "./store";
import "antd/dist/antd.css";
import "./assets/css/reset.css";
import Plus from "./views/Plus"
import Integral from "./views/Integral";
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// ReactDOM.render(<Plus />, document.getElementById('root'));
ReactDOM.render(<Integral />, document.getElementById('root'));