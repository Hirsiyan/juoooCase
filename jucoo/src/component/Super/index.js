import React from "react";
import Swiper from "swiper/dist/js/swiper.js";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import swiperActions from "../../store/actionCreators/swiper"
class Super extends React.Component{
    render(){
        const superList = this.props.superList;
        return(
            <div className={"super"}>
                <div className={"super-son"}>
                    <div className={"super-son-1"}>
                        <p>
                            <span className={"super-son-1-span"}>优先购票</span>
                            <span> VIP+会员尊享权益</span>
                        </p>
                        <p>
                            99元/年>
                        </p>
                    </div>
                    <div className="swiper-container super-son-2" id={"swiper2"}>
                        <div className="swiper-wrapper">
                            {
                                superList.map((v,i)=>(
                                    <div key={i} className={"swiper-slide super-son-2-1"}>
                                        <div className={"super-son-2-1a"}>
                                            <img src={v.pic} alt="" style={{width:"100%",height:"100%"}}/>
                                        </div>
                                        <div className={"super-son-2-1b"}>
                                            <h3 className={"super-son-2-1b-p1"}>{v.schedular_name}</h3>
                                            <p className={"super-son-2-1b-p1"}>{v.city_name}|{v.venue_name}</p>
                                            <p>
                                                <span><span style={{color:"#ff6743"}}>{v.end_time}</span> 开始</span>
                                                <span className={"super-son-2-1b-span"}>开售提醒</span>
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getSuperList();
    }
}
function mapStateToProps(state){
    return {
        superList:state.swiperList.superList
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(swiperActions,dispatch))(Super);