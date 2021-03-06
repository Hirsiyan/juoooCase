import React from "react"
import MyJucco from "../views/MyJucco"
import Eticket from "../views/Eticket"
import Home from "../views/Home"
import Theatre from "../views/Theatre"
import {
    Route
} from "react-router-dom"
class ComRouter extends React.Component{
    render(){
        return(
            <>
                <Route path={"/"} exact component={Home}></Route>
                <Route path={"/Theatre"} component={Theatre}></Route>
                <Route path={"/Eticket"} component={Eticket}></Route>
                <Route path={"/MyJucco"} component={MyJucco}></Route>
            </>
        )
    }
}
export default ComRouter;