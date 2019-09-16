import React from "react"
import "../assets/css/MyJucco.css"
class MyJucco extends React.Component{
    render(){
        return(
                <div className={"mine"}>
                      <div className={"mine_body"}>
                            <div className={"mine-info"}>
                                <a href="">
                                    <i className={"iconfont ju-icon-setting1"}>
                                        &#xe750;
                                    </i>
                                </a>
                                <div className={"mine-info__main"}>
                                    <div className={"mine-info__main__head"}></div>
                                    <div className={"mine-info__main__label"}></div>
                                    <div className={"mine-info__main__cnt"}></div>
                                </div>

                            </div>
                      </div>
                </div>
        )
    }
}
export default MyJucco;