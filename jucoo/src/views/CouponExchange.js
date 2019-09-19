import React from 'react'
import "../assets/css/CouponExchange.css"
class CouponExchange extends React.Component{
    render() {
        return(
            <>
                <div className="views">
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
                                <span>优惠券</span>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="coupon-o-tab">
                        <div className="coupon-input-wrap js-coupon-input-wrap">
                            <div className="exchange-coupon coupon-input-box exchange-wrapper">
                                <input type="text" className="coupon-input coupon-code js-coupon-input"
                                       placeholder="优惠券码"/>
                            </div>
                            <div className="coupon-input-btn exchange-btn js-coupon-input-btn">兑换</div>
                        </div>
                    </div>
                    <div className={"coupon-container coupon-lists-wrape"}>
                        <div className={"coupon-wrapper js-coupon-wrapper"}>
                             <div className={"coupon-boxes js-coupon-boxes"}>
                                  <div className={"coupon-use js-coupon-use js-coupon-use1"}>
                                      <p className="coupon-num">0张未使用</p>
                                      <p className={"coupon-detail"}>优惠券规则说明</p>
                                  </div>
                             </div>
                            <div className={"coupon-boxes js-coupon-boxes hide"}>

                            </div>
                        </div>
                    </div>
                    <a href="" className={"coupon-tips"}>
                        <span className={"checkmore"}>查看已过期优惠券</span>
                        <span className={"iconfont icon-menu-right"}>
                            &#xe603;
                        </span>
                    </a>
                </div>
            </>
        )
    }
}
export default CouponExchange;