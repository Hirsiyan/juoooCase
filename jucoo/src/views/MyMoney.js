import React from "react"
import "../assets/css/MyMoney.css"
import "../assets/fonts/iconfont.css"
class MyMoney extends React.Component{
    render() {
        return(
            <div>
                <div className="views">
                    <div className="view">
                        <div className="navTop">
                            <div className="navTop-inner">
                                <div className="left">
                                    <a href="javascript:;">
                                     <span className="icon iconfont">
                                          &#xe603;
                                     </span>
                                    </a>
                                </div>
                                <div className="center">
                                    <span>我的余额</span>
                                </div>
                                <div className="right">
                                    <a href="javascript:;">
                                     <span className={"dian icon iconfont"}>
                                         &#xe600;
                                     </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pages">
                            <div className="panel">
                                <div className="banner">
                                    <p className="text">账户余额(元)</p>
                                    <p className="num">0.00</p>
                                </div>
                            </div>
                            <div className="part integral-wrap">
                                <div className="little">余额明细</div>
                                <div className="part-box integral-list js-money-list">
                                    <div className="grid empty-message">没有消息记录</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MyMoney;