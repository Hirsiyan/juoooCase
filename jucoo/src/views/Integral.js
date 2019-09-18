import React from "react"
import "../assets/css/Integral.css"
import "../assets/fonts/iconfont.css"
import axios from "axios"

class Integral extends React.Component{
    render() {
        return(
            <div className="views">
                <div className="nav1">
                    <div className="nav-inter">
                        <div className="left">
                            <span className="icon-menu-left iconfont">&#xe603;</span>
                        </div>
                        <div className="center">积分商城</div>
                        <div className="right">
                            <span className="icon-menu-right iconfont">&#xe600;</span>
                        </div>
                    </div>
                </div>
                <div className="inter">
                    <span className="icon"></span>
                    <span className="si-txt">6</span>
                    <span className="scores">
                        积分明细
                    </span>
                    <span className="iconfont">&#xe603;</span>
                </div>
                <div className="filter">
                    <div className="city">城市
                        <i className="jt"></i>
                    </div>
                    <div className="sc">积分
                        <i className="jt"></i>
                    </div>
                </div>
            </div>

        )
    }
    async getData(){
        const {data} = await axios.post("/juooo/Scores/getAllScoresList");
        console.log(data);
    }
    componentDidMount() {
        this.getData();
    }
}
export default Integral;