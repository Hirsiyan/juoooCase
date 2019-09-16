import React from "react"
import {NavLink} from "react-router-dom"
import "../../assets/css/TarBar.css"
class TarBar extends React.Component{
    render(){
        return(
            <div className={"tarbar-footer"}>
                <div className={"tarbar-footer-div"}>
                    <div className={"tarbar-footer-div-div"}>
                        <NavLink to={"/"}>首页</NavLink>
                    </div>
                    <div className={"tarbar-footer-div-div"}>
                        <NavLink to={"/Theatre"}>剧院</NavLink>
                    </div>
                    <div className={"tarbar-footer-div-div"}>
                        <NavLink to={"/Eticket"}>票夹</NavLink>
                    </div>
                    <div className={"tarbar-footer-div-div"}>
                        <NavLink to={"/MyJucco"}>我的</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
export default TarBar;