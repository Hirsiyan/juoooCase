import React from "react";
<<<<<<< HEAD

=======
>>>>>>> b8f7336d2f53231ff4cf66625b301ea03654f3c8
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