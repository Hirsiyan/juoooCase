import React from "react"
import TarBar from "../component/TarBar"
import Login from "../views/Login"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
class ComRouter extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path={"/login"} component={Login}></Route>
                        <Route path={"/"} component={TarBar}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default ComRouter;