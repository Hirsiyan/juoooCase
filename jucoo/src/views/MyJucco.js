import React from "react"
import "../assets/css/MyJucco.css"
import "../assets/fonts/iconfont.css"
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
                                    <div className={"mine-info__main__head"}>
                                        <div className={"mine-info_head_pic"}>
                                            <img src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png" alt=""/>
                                        </div>
                                        <span className={"mine-info_userName"}>账户</span>
                                        <span className={"mine-info_ID"}>ID:123456</span>
                                    </div>
                                    <div className={"mine-info_main_label"}>
                                        <p className={"mine-info_main_vip"}>普通会员</p>
                                    </div>
                                    <div className={"mine-info_main_cnt"}>
                                        <a href="" className={"mine-info_main_cnt_item"}>
                                            <p className={"mine-info_main_cnt_item_num"}>
                                                0
                                            </p>
                                            <p className={"mine-info_main_cnt_item_name"}>
                                                账户余额
                                            </p>
                                            <div className={"separator"}></div>
                                        </a>
                                        <a href="" className={"mine-info_main_cnt_item"}>
                                            <p className={"mine-info_main_cnt_item_num"}>
                                                6
                                            </p>
                                            <p className={"mine-info_main_cnt_item_name"}>
                                                积分
                                            </p>
                                            <div className={"separator"}></div>
                                        </a>
                                        <a href="" className={"mine-info_main_cnt_item"}>
                                            <p className={"mine-info_main_cnt_item_num"}>0</p>
                                            <p className={"mine-info_main_cnt_item_name"}>优惠券</p>
                                            <div className={"separator"}></div>
                                        </a>
                                        <a href="" className={"mine-info_main_cnt_item"}>
                                            <p className={"mine-info_main_cnt_item_num no"}>立即开通</p>
                                            <p className={"mine-info_main_cnt_item_name"}>橙PLUS卡</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a href="" className={"mine-vip"}>
                              <img className={"mine-vip-pic"} src={require("../assets/images/ad.411f5e6.png")} alt=""/>
                             </a>
                             <div className={"mine-setting"}>
                                 <ul className={"mine-setting__list"}>
                                     <li className={"mine-setting__list__item"}>
                                         <a href="" className={"mine-setting__list__item--link"}>
                                             <i className={"icon icon-order"}></i>
                                             <p className={"mine-setting__list__item__name"}>我的订单</p>
                                         </a>
                                     </li>
                                     <li className={"mine-setting__list__item"}>
                                         <a href="" className={"mine-setting__list__item--link"}>
                                             <i className={"icon icon-ticketholder"}></i>
                                             <p className={"mine-setting__list__item__name"}>我的票夹</p>
                                         </a>
                                     </li>
                                     <li className={"mine-setting__list__item"}>
                                         <a href="" className={"mine-setting__list__item--link"}>
                                             <i className={"icon icon-cardpackage"}></i>
                                             <p className={"mine-setting__list__item__name"}>我的卡包</p>
                                         </a>
                                     </li>
                                     <li className={"mine-setting__list__item"}>
                                     </li>
                                 </ul>
                                 <ul className={"mine-setting__list"}>
                                     <li className={"mine-setting__list__item"}>
                                         <a href="" className={"mine-setting__list__item--link"}>
                                              <i className={"icon icon-people"}></i>
                                              <p className={"mine-setting__list__item__name"}>
                                                  实名购票人
                                              </p>
                                         </a>
                                     </li>
                                     <li className={"mine-setting__list__item"}>
                                         <a href="" className={"mine-setting__list__item--link"}>
                                             <i className={"icon icon-address"}></i>
                                             <p className={"mine-setting__list__item__name"}>
                                                  收货地址
                                             </p>
                                         </a>
                                     </li>
                                     <li className={"mine-setting__list__item"}>
                                         <a href="" className={"mine-setting__list__item--link"}>
                                             <i className={"icon icon-feedback"}></i>
                                             <p className={"mine-setting__list__item__name"}>
                                                 意见反馈
                                             </p>
                                         </a>
                                     </li>
                                     <li className={"mine-setting__list__item"}>
                                         <a href="" className={"mine-setting__list__item--link"}>
                                             <i className={"icon icon-help"}></i>
                                             <p className={"mine-setting__list__item__name"}>
                                                 客服帮助
                                             </p>
                                         </a>
                                     </li>
                                 </ul>
                             </div>
                      </div>
                </div>
        )
    }
}
export default MyJucco;