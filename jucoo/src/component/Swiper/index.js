import React from "react"
import "../../assets/css/Swiper.css"
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import swiperListActions from "../../store/actionCreators/swiper"
import {Link} from "react-router-dom"
class SwpCom extends React.Component{
    render(){
        const swiperList = this.props.swiperList;
        return(
            <div>
                <div className={"swiper-list"}>
                    <div className={"swiper-list-postion"}>
                        <div className={"swiper-list-postion-son"}>
                            <div className={"swiper-list-postion-son-a"}>
                                <Link to={"/SelectCity"}>
                                    全国
                                </Link>
                            </div>
                            <div className={"swiper-list-postion-son-b"}>
                                搜索热门演出
                            </div>
                            <div className={"swiper-list-postion-son-c"}>
                                <img src="https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png" alt=""/>
                            </div>
                        </div>
                    </div>
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
                        <div className="swiper-pagination"></div>
                    </div>
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
export default connect(mapStateToProps,dispatch=>bindActionCreators(swiperListActions,dispatch))(SwpCom);
