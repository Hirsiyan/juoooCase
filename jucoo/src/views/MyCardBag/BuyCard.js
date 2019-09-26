import React from "react";
<<<<<<< HEAD

=======
>>>>>>> da8f004ba5ead0f0101b9c4e98a5af3e4f42b881
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