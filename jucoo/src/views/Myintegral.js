import React from 'react'
import "../assets/css/Myintegral.css"
import "../assets/fonts/iconfont.css"
class Myintegral extends React.Component{
    render() {
        return(
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
                                <span>我的积分</span>
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
                                <a href="javascript:;" className="rule">
                         <span>
                             积分规则
                         </span>
                                </a>
                                <p className="text">可用积分</p>
                                <p className="num">4</p>
                                <a className="shop-integral" href="/Scores/index">积分商城</a>
                            </div>
                        </div>
                        <div className="part integral-wrap">
                            <div className="little">积分明细</div>
                            <div className="part-box integral-list js-money-list">
                                    <div className="item integral">
                                        <p className="name">每日登录</p>
                                        <p className="time">2019.9.15 18.22.33</p>
                                        <span className="add num">+2</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Myintegral;