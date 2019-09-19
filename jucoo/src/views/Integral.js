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
            </div>

        )
    }
    async getData(){
        const data = await axios.post("/juooo/Scores/getAllScoresList");
        console.log(data);
    }
    componentDidMount() {
        this.getData();
    }
}
export default Integral;