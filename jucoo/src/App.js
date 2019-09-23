import React from 'react';
import ComRouter from "./router"
import "./assets/css/App.css"
import Login from "./views/Login";
import TarBar from "./component/TarBar";
import MyCardBag from "./views/MyCardBag/MyCardBag"
import MyMoney from "./views/MyMoney";
import Myintegral from "./views/Myintegral";
import Plus from "./views/Plus";
import Search from "./views/Search";
import CouponExchange from "./views/CouponExchange"
import Ticket from "./views/Ticket"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import SelectCity from "./views/SelectCity";
class App extends React.Component{
    render(){
        return(
           <div className={"app"}>
               <Router>
                   <ComRouter></ComRouter>
                   <Switch>
                       <Route path={"/ticket/:id"} component={Ticket}></Route>
                       <Route path={"/Search"} component={Search}></Route>
                       <Route path={"/SelectCity"} component={SelectCity}></Route>
                       <Route path={"/plus"} component={Plus}></Route>
                       <Route path={"/couponExchange"} component={CouponExchange}></Route>
                       <Route path={"/myintegral"} component={Myintegral}></Route>
                       <Route path={"/myMoney"} component={MyMoney}></Route>
                       <Route path={"/login"} component={Login}></Route>
                       <Route path={"/"} component={TarBar}></Route>
                   </Switch>
               </Router>
           </div>
        )
    }
}
export default App;
