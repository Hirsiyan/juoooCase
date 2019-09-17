import React from 'react';
import ComRouter from "./router"
import "./assets/css/App.css"
import Login from "./views/Login";
import TarBar from "./component/TarBar";
import MyCardBag from "./views/MyCardBag/MyCardBag"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
class App extends React.Component{
    render(){
        return(
           <div className={"app"}>
               <Router>
                   <ComRouter></ComRouter>
                   <Switch>
                       {/*<Route path={"/"} component={MyCardBag}></Route>*/}
                       <Route path={"/login"} component={Login}></Route>
                       <Route path={"/"} component={TarBar}></Route>
                   </Switch>
               </Router>
           </div>
        )
    }
}
export default App;
