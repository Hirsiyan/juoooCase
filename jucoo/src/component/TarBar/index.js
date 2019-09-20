import React from "react"
import {NavLink} from "react-router-dom"
import "../../assets/css/TarBar.css"
class TarBar extends React.Component{
    render(){
        return(
            <div className={"tarbar-footer"}>
                <div className={"tarbar-footer-div"}>
                    <div className={"tarbar-footer-div-div"}>
                        <NavLink to={"/"} exact activeStyle={{color:"orange"}}>
                            <p className={"iconfont icon-index tarbar-footer-div-div-p"}></p>
                            <p>首页</p>
                        </NavLink>
                    </div>
                    <div className={"tarbar-footer-div-div"}>
                        <NavLink to={"/Theatre"} activeStyle={{color:"orange"}}>
                            <p className={"iconfont icon-juchangjuyuanxinxi tarbar-footer-div-div-p"}></p>
                            <p>剧院</p>
                        </NavLink>
                    </div>
                    <div className={"tarbar-footer-div-div"}>
                        <NavLink to={"/Eticket"} activeStyle={{color:"orange"}}>
                            <p className={"iconfont icon-piaojia28 tarbar-footer-div-div-p"}></p>
                            <p>票夹</p>
                        </NavLink>
                    </div>
                    <div className={"tarbar-footer-div-div"}>
                        <NavLink to={"/MyJucco"} activeStyle={{color:"orange"}}>
                            <p className={"iconfont icon-Icon_wode tarbar-footer-div-div-p"}></p>
                            <p>我的</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
export default TarBar;