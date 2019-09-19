import React from "react"


//import "../../assets/css/reset.css"

import "../../assets/css/MyCardBag/MyCardBag.css"
import {
    NavLink,
    Route
} from "react-router-dom"
import MyCard from "../../views/MyCardBag/MyCard";
import BuyCard from "../../views/MyCardBag/BuyCard";
import BindCard from "../../views/MyCardBag/BindCard";
class RouteCard extends React.Component{
    render() {
        return(
            <div className={"router"}>
                <Route path={"/BuyCard"} component={BuyCard}></Route>
                <Route path={"/BindCard"} component={BindCard}></Route>
                <Route path={"/"}  exact component={MyCard}></Route>
                <div className={"router-bottom"}>
                <NavLink className={"router-bottom-son"} to={"/BuyCard"} activeStyle={{color:"#ff6743"}} >购买新卡</NavLink>
                    <span>|</span>
                <NavLink className={"router-bottom-son"} to={"/BindCard"} activeStyle={{color:"#ff6743"}} >绑定新卡</NavLink>
                    <span>|</span>
                <NavLink className={"router-bottom-son"} to={"/"} exact activeStyle={{color:"#ff6743"}} >我的卡包</NavLink>
                </div>
            </div>

        )
    }
}
export default RouteCard;