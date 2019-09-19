import React from "react"
import "../../assets/css/MyCardBag/CardSwiper.css"
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import swiperListActions from "../../store/actionCreators/swiper"
import {Link} from "react-router-dom"
class CardSwiper extends React.Component{
    render(){
        const swiperList = this.props.swiperList;
        return(
            <div>
                <div className={"swiper-list"}>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                swiperList.map((v,i)=>(
                                    <div key={i} className={"swiper-slide"}>
                                        <Link to={"/login"}><img src={v.image_url} alt="" className={"swiper-container-img"}/></Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        const mySwiper = new Swiper('.swiper-container',{
            observer: true,
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: {
                disableOnInteraction: false,
            },
        });
        this.props.getSwiperList();
    }
}
function mapStateToProps(state){
    // console.log(state);
    return{
        swiperList:state.swiperList.swiperList
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(swiperListActions,dispatch))(CardSwiper);
