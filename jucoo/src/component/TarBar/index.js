import React from "react"
import {NavLink} from "react-router-dom"
class TarBar extends React.Component{
    render(){
        return(
            <div className={"tarbar-footer"}>
                <div className={"tarbar-footer-div"}>
                    <div className={"tarbar-footer-div-div"}>
                        <NavLink to={"/"} exact activeStyle={{color:"#ff4500"}} id={"home"}>
                            <p className={"iconfont icon-index tarbar-footer-div-div-p1"} id={"homeP1"}></p>
                            <p id={"homeP2"}></p>
                        </NavLink>
                    </div>
                    <div className={"tarbar-footer-div-div"}>
                        <NavLink to={"/Theatre"} activeStyle={{color:"#ff4500"}}>
                            <p className={"iconfont icon-juchangjuyuanxinxi tarbar-footer-div-div-p1"}></p>
                            <p>剧院</p>
                        </NavLink>
                    </div>
                    <div className={"tarbar-footer-div-div"}>
                        <NavLink to={"/Eticket"} activeStyle={{color:"#ff4500"}}>
                            <p className={"iconfont icon-piaojia28 tarbar-footer-div-div-p1"}></p>
                            <p>票夹</p>
                        </NavLink>
                    </div>
                    <div className={"tarbar-footer-div-div"}>
                        <NavLink to={"/MyJucco"} activeStyle={{color:"#ff4500"}}>
                            <p className={"iconfont icon-Icon_wode tarbar-footer-div-div-p1"}></p>
                            <p>我的</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.location.pathname !== "/"){
            document.getElementById("homeP1").style = "";
            document.getElementById("homeP2").innerHTML = "首页";
        }else{
            document.getElementById("homeP1").style.cssText = "font-size:25px;margin-top:5px";
            document.getElementById("homeP2").innerHTML = "";
        }
    }
    componentDidMount(){
        if(this.props.location.pathname !== "/"){
            document.getElementById("homeP1").style = "";
            document.getElementById("homeP2").innerHTML = "首页";
        }else{
            document.getElementById("homeP1").style.cssText = "font-size:25px;margin-top:1px";
        }
    }
}
export default TarBar;