import React from "react"
import '../assets/css/Ticket.css'
import axios from 'axios';
import Tools from '../common/Tools'
class Ticket extends React.Component{
    constructor(){
        super();
        this.state = {
            showData:[]
        }
    }
    render(){
        return (
            <div >
                {this.state.showData.map((v,i)=> (
                    <div key={i}>
                        <div className="header">
                            <div className="header-top">
                                <i className="iconfont icon-htmal5icon37"></i>
                                <span>演出详情</span>
                                <span>
                                  <i className="iconfont icon-fenxiang"></i>
                                  <i className="iconfont icon-home"></i>
                                </span>
                            </div>

                            <div className="header-main">
                                <div>
                                    <img src={v.share_pic} alt=""/>
                                </div>

                                <div className = "header-main-details">

                                    <h1 className="header-main-details-title">{v.share_title}</h1>

                                    <span className="header-main-details-price">{v.price_range}</span>

                                    <span  className="header-main-details-btn">套</span>
                                </div>
                            </div>
                        </div>
                        <div className="brief-secondary">
                            <div className="brief-secondary-left">
                                <p>{Tools.date(v.project_time)} ></p>
                                <h2>{v.city.city_name}|{v.venue.venue_name}</h2>
                            </div>
                            <div className="brief-secondary-right">
                                <i></i>
                            </div>
                        </div>
                        <div className="detail-plus-tips">
                            <div className="orange-plus-tips">
                                <p><span>橙PLUS卡</span>开通送￥100 最高省24元<i>立即开卡 ></i></p>

                            </div>
                        </div>
                        <div className="detail-schedule">
                            <div className="detail-schedule-discount">
                                领券：
                                <i>满11减10</i>
                                <i>满400减30</i>
                                <span className="iconfont icon-gengduo"></span>
                            </div>
                            <hr/>
                            <div className="detail-schedule-vip">
                                vip+：
                                <span>v+会员享</span>
                                <i>国内免邮+双倍积分</i>
                            </div>
                            <hr/>
                            <div className="detail-schedule-admission">
                                vip+：
                                <span>一人一票，</span>
                            </div>
                            <hr/>
                        </div>

                    </div>
                ))
                }
            </div>
        )
    }
    async getSchedule(){
        const info = await axios.get("/juooo/Schedule/Schedule/getScheduleInfo?schedular_id=104216&version=6.0.5&referer=2")
        console.log(info.data.data);

        this.setState({
            showData:[...this.state.showData,{...info.data.data.share_data,...info.data.data.static_data,...info.data.data.item_list[0]}]
        })
        console.log(this.state.showData)










    }
    componentDidMount() {
    this.getSchedule();

    }
}
export default Ticket;