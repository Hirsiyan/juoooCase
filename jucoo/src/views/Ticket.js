import React from "react"
import '../assets/css/Ticket.css'
import  '../assets/static/iconfont.css'
import axios from 'axios';
import Tools from '../common/Tools'
import Swiper from 'swiper';
class Ticket extends React.Component{
    constructor(){
        super();
        this.state = {
            showData:{},
            tourList:[],
            dataTour:[],
            recommend:[]
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
                            <span>{v.data.show_total}场 > </span>
                        </div>

                        <div className = "tour-city-list">
                            {
                                v.data.tour_list.map((p,i)=>(
                                    <div key={p.id} className="tour-city-list-main" >
                                        <h2>{p.city_name}</h2>
                                        <span>{p.show_time}</span>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="performance-introduction">
                            <h2 >演出介绍</h2>
                            <div>{v.show_intro.desc}</div>
                        </div>

                        <div className="reminder">
                            <div className="reminder-title">
                                <h2>温馨提示</h2>
                                <span> > </span>
                            </div>

                            {
                             v.show_notice.list.map((v,i)=>(
                                  <div key={i} className="reminder-main">

                                      <span><i></i>{v.title}</span>
                                   </div>
                            ))
                            }
                        </div>
                    </div>
                ))
                }
                <div className="related-recommendations">
                    <h2>相关推荐</h2>
                    {
                        this.state.recommend.map(v=>(
                                    <div className="related-recommendations-main" key={v.id}>
                                        <div className="related-recommendations-main-img">
                                            <img src={v.pic} alt=""/>
                                        </div>
                                        <div className="related-recommendations-main-details">
                                            <div className="related-details-time"><p>{v.show_time_top}</p><span>{v.show_time_bottom}</span></div>
                                            <h2>{v.name}</h2>
                                            <p className="related-details-address">{v.city_name} | {v.venue_name}</p>
                                            <p className="related-details-price">{"￥"+v.min_price}<span>起</span></p>
                                        </div>
                                    </div>
                            )
                        )
                    }
                </div>
                <div className="footer">
                    <div className="footer-main">
                        <span className="iconfont icon-kefu"></span>
                        <p>客服</p>
                    </div>
                    <div className="footer-btn">选座购买</div>
                </div>
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
    async getShowList(){
        const info = await axios.get("/juooo/Show/Search/getShowList?category=36&city_id=60&version=6.0.5&referer=2");
        console.log(info.data.data.list)
        this.setState({
            recommend:info.data.data.list
        })
  
        // console.log(this.state.recommend)
    }



    componentDidMount() {
    this.getSchedule();
    this.getTourCity();
    this.getShowList();

    }



}
export default Ticket;