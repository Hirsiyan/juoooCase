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
                                    <div className={"mine-info__main__head"}>
                                        <div class={"mine-info_head_pic"}>
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
                                        </a>
                                        <a href="" className={"mine-info_main_cnt_item"}>
                                            <p className={"mine-info_main_cnt_item_num"}>
                                                6
                                            </p>
                                            <p className={"mine-info_main_cnt_item_name"}>
                                                积分
                                            </p>
                                        </a>
                                        <a href="" className={"mine-info_main_cnt_item"}>
                                            <p className={"mine-info_main_cnt_item_num"}>0</p>
                                            <p className={"mine-info_main_cnt_item_name"}>优惠券</p>
                                        </a>
                                        <a href="" className={"mine-info_main_cnt_item"}>
                                            <p className={"mine-info_main_cnt_item_num"}>立即开通</p>
                                            <p className={"mine-info_main_cnt_item_name"}>橙PLUS卡</p>
                                        </a>
                                    </div>
                                </div>

                            </div>
                      </div>
                </div>
        )
    }
}
export default MyJucco;