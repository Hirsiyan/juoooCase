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
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
