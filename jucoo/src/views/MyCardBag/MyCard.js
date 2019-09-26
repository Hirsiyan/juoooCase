import React from "react"
<<<<<<< HEAD

=======
>>>>>>> b8f7336d2f53231ff4cf66625b301ea03654f3c8
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