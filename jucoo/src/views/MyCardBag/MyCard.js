import React from "react"
<<<<<<< HEAD

=======
>>>>>>> da8f004ba5ead0f0101b9c4e98a5af3e4f42b881
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