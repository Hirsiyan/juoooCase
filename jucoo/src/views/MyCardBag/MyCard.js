import React from "react"
<<<<<<< HEAD

=======
>>>>>>> d81757966eab190383074dcc3ac416c1bd3bad34
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