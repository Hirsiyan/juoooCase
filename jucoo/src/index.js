import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import Plus from "./views/Plus"
// import Integral from "./views/Integral";
// import FamilyCard from "./views/FamilyCard";
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// ReactDOM.render(<Plus />, document.getElementById('root'));
// ReactDOM.render(<Integral />, document.getElementById('root'));
// ReactDOM.render(<FamilyCard />, document.getElementById('root'));
serviceWorker.unregister();

