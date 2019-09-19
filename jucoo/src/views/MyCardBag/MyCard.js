import React from "react"
<<<<<<< HEAD

//import "../../assets/css/reset.css"

=======
>>>>>>> 90932bc9d0b7a52981c264d55dd0855bb44efbad
import "../../assets/css/MyCardBag/CardSon.css"
import MyCardMain from "./MyCardMain";
import GetBack from "./getBack";
import Menu from "./menu";
class MyCard extends React.Component{
    render() {
        return(
            <div className={"router"}>
                <div className={"router-top"}>
                    <span><GetBack/></span>
                    <span>我的卡包</span>
                    <span><Menu/></span>
                </div>
            <MyCardMain></MyCardMain>
            </div>
        )
    }
}
export default MyCard;