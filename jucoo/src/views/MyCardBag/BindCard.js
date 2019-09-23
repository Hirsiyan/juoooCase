import React from "react"

import "../../assets/css/MyCardBag/CardSon.css"
import Menu from "./menu";
import GetBack from "./getBack";
class BindCard extends React.Component{
    render() {
        return(
            <div className={"router"}>
                <div className={"router-top"}>
                    <span><GetBack/></span>
                    <span>绑定新卡</span>
                    <span><Menu/></span>
                </div>
            </div>
        )
    }
}
export default BindCard;