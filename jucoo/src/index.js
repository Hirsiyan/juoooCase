import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'lib-flexible';
import {Provider} from "react-redux"
import store from "./store"
import "./assets/css/reset.css"
import "swiper/dist/css/swiper.min.css";
import axios from "axios";
import {changeLoading} from "./store/actionCreators/loading"
axios.interceptors.request.use(config=>{
   return config;
});
axios.interceptors.response.use(data=>{
   setTimeout(()=>{
       store.dispatch(changeLoading({fal:false}));
   },2000);
    return data;
});
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// ReactDOM.render(<App1 />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

