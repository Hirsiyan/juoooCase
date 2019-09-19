import React from "react"
import '../assets/css/Ticket.css'
import axios from 'axios';
import Tools from '../common/Tools'
import Swiper from 'swiper';
class Ticket extends React.Component{
    constructor(){
        super();
        this.state = {
            showData:{},
            tourList:[],
            dataTour:[]

        }
    }
    render(){
        return (
            <div >
                {this.state.tourList.map((v,i)=> (
                    <div key={i} className="mainColor">

                        <div className="head" style={{backgroundImage:"url("+v.share_pic+")",backgroundSize:'cover',opacity: '0.5'}}>
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
                                <p><span>橙PLUS卡</span>开通送￥100 最高省24元<b>立即开卡 ></b></p>
                            </div>
                        </div>
                        <div className="detail-schedule">
                            <div className="detail-schedule-discount">
                                领券：
                                <span>满11减10</span>
                                <span>满400减30</span>
                                <i className="iconfont icon-gengduo"></i>
                            </div>
                            <hr/>
                            <div className="detail-schedule-vip">
                                vip+：
                                v+会员享
                                <span>国内免邮+双倍积分</span>
                            </div>
                            <hr/>
                            <div className="detail-schedule-admission">
                            vip+：
                            <span>{v.tips.desc}</span>
                            </div>
                            <hr/>
                            <div className="detail-schedule-support">
                                支持：
                                <span>{v.support.list[0]} | {v.support.list[1]}</span>
                            </div>

                        </div>
                        <div className = "tour-city">
                            <h2>巡演城市</h2>
                            <span>7场 > </span>
                        </div>
                        <div className = "tour-city-list">
                                    <div className="tour-city-list-main">
                                        <h2>{}</h2>
                                    </div>
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
           // showData:[...this.state.showData,{...info.data.data.share_data,...info.data.data.static_data,...info.data.data.item_list[0]}]
            showData:{...info.data.data.share_data,...info.data.data.static_data,...info.data.data.item_list[0]}
        })
        console.log(this.state.showData)
    }
    async getTourCity(){
        const info = await axios.get("/juooo/Schedule/Schedule/getTour?show_id=38821&venue_id=982&version=6.0.5&referer=2");
        console.log(info.data)


        this.setState({
            tourList:[...this.state.tourList,{...this.state.showData,...info.data}]
        });
        console.log(this.state.tourList)
    }
    componentDidMount() {
    this.getSchedule();
    this.getTourCity();

    }



}
export default Ticket;