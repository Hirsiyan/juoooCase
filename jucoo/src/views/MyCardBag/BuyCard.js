import React from "react";
// import "../../assets/css/reset.css"
import "../../assets/css/MyCardBag/CardSon.css"
import GetBack from "./getBack";
import Menu from "./menu";
import BuyCardMain from "./BuyCardMain";
class BuyCard extends React.Component{
    render() {
        return(
            <div className={"router"}>
                <div className={"router-top"}>
                <span><GetBack/></span>
                <span>购买新卡</span>
                <span><Menu/></span>
                </div>
                <BuyCardMain></BuyCardMain>

            </div>
        )
    }
}
export default BuyCard;