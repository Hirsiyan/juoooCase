import React from "react"
<<<<<<< HEAD

//import "../../assets/css/reset.css"

=======
>>>>>>> 90932bc9d0b7a52981c264d55dd0855bb44efbad
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