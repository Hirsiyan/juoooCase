import React from "react"
import {connect} from "react-redux"
import Swiper from "swiper/dist/js/swiper.js";
import {bindActionCreators} from "redux"
import swiperActions from "../../store/actionCreators/swiper"
class Hot extends React.Component{
    render(){
        const hotList = this.props.hotList;
        return(
            <div className={"hot"}>
                <div className={"hot-son"}>
                    <div className={"hot-son-1"}>
                        <p className={"hot-son-1-p1"}>热门演出</p>
                        <p className={"hot-son-1-p2"}> > </p>
                    </div>
                    <div className="swiper-container hot-son-2" id={"swiper3"}>
                        <div className="swiper-wrapper">
                            {
                                hotList.map((v,i)=>(
                                    <div className="swiper-slide swiper-slide-div1" key={i}>
                                        <div className="swiper-slide-div1-div2">
                                            <div className="swiper-slide-div1-div2a">
                                                <img className="swiper-slide-div1-div2a-img" src={v.pic} alt=""/>
                                                <p className={"hot-son-2-p"}>{v.show_name}</p>
                                            </div>
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
        if(this.props.hotList.length>0){
            const mySwiper3 = new Swiper('#swiper3',{
                observer:true,
                paginationClickable: true,
                slidesPerView : 'auto',
            });
        }
        this.props.getHotList();
    }
}
function mapStateToProps(state){
    return{
        hotList:state.swiperList.hotList
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(swiperActions,dispatch))(Hot);