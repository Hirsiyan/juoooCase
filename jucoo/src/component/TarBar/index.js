import React from "react"
import {NavLink,Route} from "react-router-dom"
import Home from "../../views/Home"
import Eticket from "../../views/Eticket"
import MyJucco from "../../views/MyJucco"
import Theatre from "../../views/Theatre"
class TarBar extends React.Component{
    render(){
        return(
            <div>
                <NavLink  to={"/"}>首页</NavLink>
                <NavLink  to={"/Theatre"}>剧院</NavLink>
                <NavLink  to={"/Eticket"}>票夹</NavLink>
                <NavLink  to={"/MyJucco"}>我的</NavLink>
                <Route path={"/"} exact component={Home}></Route>
                <Route path={"/Theatre"} component={Theatre}></Route>
                <Route path={"/Eticket"} component={Eticket}></Route>
                <Route path={"/MyJucco"} component={MyJucco}></Route>
            </div>
        )
    }
}
export default TarBar;